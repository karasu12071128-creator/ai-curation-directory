# scripts/merge_rank.py
import sys, json, math, datetime as dt

# --- ISO8601 をゆるくパース（Z対応） ---
def parse_iso(s):
    if not s:
        return None
    try:
        if s.endswith("Z"):
            s = s[:-1] + "+00:00"
        return dt.datetime.fromisoformat(s)
    except Exception:
        return None

# --- スコア計算 ---
def score(item):
    # 人気度（stars/downloads）は対数で圧縮
    s = item.get("stars/downloads") or 0
    try:
        s = float(s)
    except Exception:
        s = 0.0
    star_part = math.log10(max(1.0, s))

    # 最近更新ボーナス（過去30日以内なら +0.6）
    recency_bonus = 0.0
    updated = parse_iso(item.get("updated_at"))
    if updated:
        try:
            if updated >= (dt.datetime.utcnow().replace(tzinfo=None) - dt.timedelta(days=30)):
                recency_bonus = 0.6
        except Exception:
            recency_bonus = 0.0

    return round(star_part + recency_bonus, 3)

# --- マージ & スコア付け ---
def merge_and_rank(files):
    merged = {}
    for f in files:
        if not f:
            continue
        try:
            arr = json.load(open(f, "r", encoding="utf-8"))
            if not isinstance(arr, list):
                continue
        except Exception:
            continue

        for it in arr:
            # tags をリストに正規化
            tags = it.get("tags") or []
            if isinstance(tags, str):
                tags = [x.strip() for x in tags.split(",") if x.strip()]
            it["tags"] = list(dict.fromkeys(tags))  # 重複排除

            # 必須フィールドの穴埋め
            it.setdefault("id", it.get("url", ""))
            it.setdefault("title", "")
            it.setdefault("short_desc", "")
            it.setdefault("url", "")
            it.setdefault("source_type", "")
            it.setdefault("author", "")
            it.setdefault("license", "")
            it.setdefault("updated_at", "")
            it.setdefault("category", "")

            merged[it["id"]] = it  # 同一IDは後勝ち（最新で上書き）

    # スコア付与＆ソート
    out = list(merged.values())
    for it in out:
        it["score"] = score(it)
    out.sort(key=lambda x: x.get("score", 0), reverse=True)
    return out

def main():
    files = sys.argv[1:]
    if not files:
        # 引数なしでも空配列を返す（CI失敗を避ける）
        print("[]")
        return
    data = merge_and_rank(files)
    print(json.dumps(data, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()