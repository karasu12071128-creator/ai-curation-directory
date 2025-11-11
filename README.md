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

## 運用手順

### 手動リカバリ手順（データ更新に失敗した場合）

データ更新ジョブが失敗した場合や、公開されているデータが0件になった場合は、以下の手順で手動リカバリを実行します。

1.  **GitHubリポジトリの「Actions」タブに移動します。**
2.  **左側のワークフロー一覧から「daily-refresh」を選択します。**
3.  **「Run workflow」ボタンをクリックし、表示されるダイアログで再度「Run workflow」をクリックして、手動でジョブを再実行します。**

ジョブが正常に完了すると、`resources.json`と`resources.csv`が再生成され、サイトにデータが反映されます。

### 監視の確認方法

データ更新ジョブの成否は、GitHub Actionsの実行結果で確認できます。ジョブが失敗した場合、または生成されたデータが0件だった場合は、GitHub Actionsが自動的にエラーを検出し、リポジトリの管理者に通知メールが送信されます。
