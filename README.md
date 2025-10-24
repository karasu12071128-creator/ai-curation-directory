# AI Curation Directory — Starter Kit

このキットは **GitHub Pages + GitHub Actions** で「AIリソース自動ディレクトリ」を“手動ほぼゼロ”で公開するための雛形です。

## 使い方（超速）
1. GitHubで新規リポジトリを作成（例: `ai-curation-directory`）。  
2. このZIPの中身を丸ごとアップロード → `main` ブランチへコミット。  
3. GitHub Pages を有効化：Settings → Pages → Branch: `main` / Folder: `/site` 。  
4. Settings → Secrets and variables → Actions → New repository secret で以下を追加：
   - `HF_TOKEN`（Hugging Faceのアクセストークン／任意）
   - `GH_TOKEN`（GitHub Personal Access Token／任意）
5. Actions タブで `daily-refresh` を `Run workflow`（手動実行可）。  
6. 成功すると `/data/resources.json` と `/data/resources.csv` が生成され、サイトに一覧が表示されます。

> 注意：APIや各サービスの利用規約に従ってご利用ください。

## 構成
- `/scripts/` … 収集・統合・CSV出力スクリプト
- `/data/` … 自動生成ファイル（コミットされます）
- `/site/` … GitHub Pages サイト（Jekyll最小）
- `/schema/` … リソースのJSONスキーマ
- `.github/workflows/daily.yml` … 日次自動更新ワークフロー

## ライセンス
MIT
