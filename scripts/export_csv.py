import json, csv, sys
if len(sys.argv) < 3:
    print("usage: export_csv.py <src_json> <dst_csv>")
    raise SystemExit(1)
src, dst = sys.argv[1], sys.argv[2]
data = json.load(open(src,"r",encoding="utf-8"))
fields = ["id","source_type","title","short_desc","url","tags","author","stars/downloads","license","updated_at","category","score"]
with open(dst,"w",newline="",encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=fields)
    w.writeheader()
    for x in data:
        x = x.copy()
        x["tags"] = ",".join(x.get("tags") or [])
        w.writerow({k:x.get(k,"") for k in fields})
