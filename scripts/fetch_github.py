import requests, json, os, datetime as dt

# GitHubのパーソナルアクセストークンは GH_TOKEN という環境変数から受け取る
GITHUB_TOKEN = os.getenv("GH_TOKEN", "")
# トークンがある場合だけ Authorization ヘッダを付ける
HEADERS = {"Authorization": f"Bearer {GITHUB_TOKEN}"} if GITHUB_TOKEN else {}
def search_repos(q, per_page=50):
    url = "https://api.github.com/search/repositories"
    params = {"q": q, "sort": "stars", "order": "desc", "per_page": per_page}
    r = requests.get(url, headers=HEADERS, params=params, timeout=60)
    r.raise_for_status()
    return r.json()["items"]

def to_item(r):
    now = dt.datetime.utcnow().isoformat()+"Z"
    return {
        "id": f"gh_{r['full_name']}",
        "source_type": "github_repo",
        "title": r["full_name"],
        "short_desc": (r.get("description") or "")[:300],
        "url": r["html_url"],
        "tags": r.get("topics") or [],
        "author": r["owner"]["login"],
        "stars/downloads": r["stargazers_count"],
        "license": (r.get("license") or {}).get("spdx_id", ""),
        "added_at": now,
        "updated_at": r["updated_at"],
        "lang": r.get("language") or "",
        "category": "",
        "score": 0,
        "image_url": r.get("owner", {}).get("avatar_url")
    }

if __name__ == "__main__":
    queries = [
        "topic:ai language:Python",
        "topic:llm",
        "topic:diffusion",
        "topic:machine-learning language:JavaScript"
    ]
    out=[]
    seen=set()
    for q in queries:
        for r in search_repos(q, per_page=50):
            if r["full_name"] in seen: continue
            seen.add(r["full_name"])
            out.append(to_item(r))
    print(json.dumps(out, ensure_ascii=False, indent=2))
