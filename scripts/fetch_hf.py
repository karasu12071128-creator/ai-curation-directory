import requests, json, os, datetime as dt

HF_TOKEN = os.getenv("HF_TOKEN")
HEADERS = {"Authorization": f"Bearer {HF_TOKEN}"} if HF_TOKEN else {}

def fetch_models(n=200):
    url = "https://huggingface.co/api/models?sort=downloads&direction=-1&limit=200"
    r = requests.get(url, headers=HEADERS, timeout=60)
    r.raise_for_status()
    data = r.json()[:n]
    out = []
    now = dt.datetime.utcnow().isoformat()+"Z"
    for m in data:
        out.append({
            "id": f"hf_{m.get('id')}",
            "source_type": "hf_model",
            "title": m.get("id"),
            "short_desc": (m.get("cardData") or {}).get("summary", "")[:300],
            "url": f"https://huggingface.co/{m.get('id')}",
            "tags": m.get("tags") or [],
            "author": (m.get("author") or ""),
            "stars/downloads": m.get("downloads") or 0,
            "license": (m.get("cardData") or {}).get("license", ""),
            "added_at": now,
            "updated_at": m.get("lastModified") or now,
            "lang": "",
            "category": "",
            "score": 0,
            "image_url": None
        })
    return out

if __name__ == "__main__":
    models = fetch_models(200)
    print(json.dumps(models, ensure_ascii=False, indent=2))
