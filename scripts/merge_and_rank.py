import json, sys, math, datetime as dt

def score(item):
    s = item.get("stars/downloads") or 0
    star_part = math.log10(max(1, s))
    # 最近30日更新ボーナス
    try:
        updated = item.get("updated_at", "")
        if updated and updated[:10] >= (dt.datetime.utcnow()-dt.timedelta(days=30)).isoformat()[:10]:
            recency_bonus = 0.6
        else:
            recency_bonus = 0.0
    except Exception:
        recency_bonus = 0.0
    return round(star_part + recency_bonus, 3)

def merge_and_rank(files):
    merged={}
    for f in files:
        arr = json.load(open(f,"r",encoding="utf-8"))
        for it in arr:
            merged[it["id"]] = it
    out=list(merged.values())
    for it in out:
        it["score"] = score(it)
    out.sort(key=lambda x: x["score"], reverse=True)
    return out

if __name__ == "__main__":
    files = sys.argv[1:]
    if not files:
        print("[]")
        raise SystemExit(0)
    data = merge_and_rank(files)
    print(json.dumps(data, ensure_ascii=False, indent=2))
