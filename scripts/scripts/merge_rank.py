import json, math, datetime as dt, sys

def score(item):
    s = item.get("stars/downloads") or 0
    star_part = math.log10(max(1, s))
    recency_bonus = 0.0
    updated = item.get("updated_at", "")
    try:
        if updated and updated[:10] >= (dt.datetime.utcnow() - dt.timedelta(days=30)).isoformat()[:10]:
            recency_bonus = 0.6
    except Exception:
        pass
    return round(star_part + recency_bonus, 3)

def merge_and_rank(files):
    merged = {}
    for f in files:
        with open(f, "r", encoding="utf-8") as fp:
            arr = json.load(fp)
        for it in arr:
            merged[it["id"]] = it
    out = list(merged.values())
    for it in out:
        it["score"] = score(it)
    out.sort(key=lambda x: x["score"], reverse=True)
    return out

if __name__ == "__main__":
    if len(sys.argv) < 3:
        raise SystemExit("usage: python scripts/merge_rank.py hf.json gh.json")
    data = merge_and_rank(sys.argv[1:])
    print(json.dumps(data, ensure_ascii=False, indent=2))