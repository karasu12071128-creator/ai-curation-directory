# scripts/fetch_github.py
import os, sys, json, time, math, datetime as dt
import requests

# ===== 設定 =====
QUERIES = [
    # できるだけAI系を広く拾うクエリ（重複は後でユニーク化）
    "topic:transformers stars:>500",
    "topic:diffusers stars:>200",
    "topic:stable-diffusion stars:>200",
    "topic:llm stars:>200",
    "topic:langchain stars:>200",
    "chatgpt stars:>200",
    "rag stars:>100",
    "embeddings stars:>100",
    "text-generation stars:>200",
    "vision-language stars:>100",
    "openai stars:>500",
    # 汎用MLの人気どころ
    "topic:machine-learning stars:>5000",
]
PER_PAGE = 50        # 1ページの件数
MAX_PAGES = 2        # 各クエリで最大何ページ取得するか（合計 ≦ 100件/クエリ）

# ===== GitHub API ヘッダ =====
TOKEN = os.getenv("GH_TOKEN") or os.getenv("GITHUB_TOKEN")
HEADERS = {
    "Accept": "application/vnd.github+json",
    **({"Authorization": f"Bearer {TOKEN}"} if TOKEN else {})
}

def gh_get(url, params=None):
    r = requests.get(url, headers=HEADERS, params=params, timeout=30)
    r.raise_for_status()
    return r.json()

def to_item(repo):
    """リスト表示用の統一フォーマットに変換"""
    license_info = ""
    if repo.get("license"):
        license_info = repo["license"].get("spdx_id") or repo["license"].get("key") or repo["license"].get("name") or ""

    topics = repo.get("topics") or []
    # なるべく短くて説明的な概要
    desc = (repo.get("description") or "").strip()

    return {
        "id": f"gh_{repo['full_name']}",
        "source_type": "github_repo",
        "title": repo["full_name"],
        "short_desc": desc,
        "url": repo["html_url"],
        "tags": topics,
        "author": (repo.get("owner") or {}).get("login", ""),
        "stars/downloads": repo.get("stargazers_count", 0),
        "license": license_info,
        "updated_at": repo.get("pushed_at") or repo.get("updated_at") or "",  # できるだけ最近の活動時刻
        "category": "code",
    }

def search_repos(q):
    """指定クエリで複数ページ検索し、リポジトリ一覧を返す"""
    out = []
    for page in range(1, MAX_PAGES + 1):
        params = {
            "q": q,
            "sort": "stars",
            "order": "desc",
            "per_page": PER_PAGE,
            "page": page,
        }
        data = gh_get("https://api.github.com/search/repositories", params=params)
        items = data.get("items") or []
        out.extend(items)
        # 次ページが無さそうなら抜ける
        if len(items) < PER_PAGE:
            break
        time.sleep(1)  # レート制限に優しく
    return out

def main():
    # 全クエリを回してユニーク化（full_name基準）
    seen = set()
    merged = []
    for q in QUERIES:
        try:
            repos = search_repos(q)
        except requests.HTTPError as e:
            # レート制限/一時的エラー時はスキップ（最低限の耐障害性）
            # 必要ならここで再試行ロジックを入れてもOK
            continue
        for r in repos:
            key = r["full_name"]
            if key in seen:
                continue
            seen.add(key)
            merged.append(to_item(r))

    # JSONを標準出力へ（ワークフローで `> gh.json` にリダイレクト）
    json.dump(merged, sys.stdout, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()