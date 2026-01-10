# AIツールナビ 自動化スクリプト集

SNS投稿やコンテンツ作成を自動化するためのスクリプト集です。

## 📁 ファイル構成

```
automation/
├── README.md                    # このファイル
├── pinterest_auto_post.py       # Pinterest自動投稿
├── note_article_generator.py    # note記事テンプレート生成
├── content_generator.py         # コンテンツ一括生成
└── output/                      # 生成されたコンテンツの出力先
```

## 🚀 セットアップ

### 必要なパッケージのインストール

```bash
pip install requests pillow openai
```

### 環境変数の設定

```bash
# Pinterest API（自動投稿に必要）
export PINTEREST_ACCESS_TOKEN="your_access_token"
export PINTEREST_BOARD_ID="your_board_id"

# OpenAI API（テキスト自動生成に必要、オプション）
export OPENAI_API_KEY="your_api_key"
```

## 📌 Pinterest自動投稿

### 基本的な使い方

```bash
# 環境変数を設定してから実行
python pinterest_auto_post.py
```

### 機能

- Pinterest API v5を使用した自動投稿
- 投稿済みログによる重複防止
- ツール紹介・ブログ宣伝・比較記事の投稿テンプレート

### カスタマイズ

`pinterest_auto_post.py`内の`AIToolContent`クラスでテンプレートをカスタマイズできます。

## 📝 note記事テンプレート生成

### ツールレビュー記事

```bash
python note_article_generator.py --type tool_review --tool chatgpt
```

### 比較記事

```bash
python note_article_generator.py --type comparison --tools "chatgpt,claude"
```

### まとめ記事

```bash
python note_article_generator.py --type roundup --category "文章生成AI" --count 10
```

### 出力

生成された記事テンプレートは`output/`ディレクトリにMarkdown形式で保存されます。

## 🎨 コンテンツ一括生成

### 単一ツールのコンテンツ生成

```bash
python content_generator.py --tool chatgpt
```

### 一括生成

```bash
python content_generator.py --batch --count 10
```

### 生成されるコンテンツ

- Pinterest用画像（1000x1500px）
- Pinterest投稿用テキスト（タイトル・説明文）
- note記事用導入文
- メタデータJSON

## 🔄 定期実行の設定

### cronを使った定期実行（例：毎日9時に実行）

```bash
# crontabを編集
crontab -e

# 以下を追加
0 9 * * * cd /home/ubuntu/ai-tool-navigator/scripts/automation && python pinterest_auto_post.py >> /var/log/pinterest_post.log 2>&1
```

### systemdタイマーを使った定期実行

```bash
# /etc/systemd/system/pinterest-post.service
[Unit]
Description=Pinterest Auto Post

[Service]
Type=oneshot
WorkingDirectory=/home/ubuntu/ai-tool-navigator/scripts/automation
ExecStart=/usr/bin/python3 pinterest_auto_post.py
Environment="PINTEREST_ACCESS_TOKEN=your_token"
Environment="PINTEREST_BOARD_ID=your_board_id"

[Install]
WantedBy=multi-user.target
```

```bash
# /etc/systemd/system/pinterest-post.timer
[Unit]
Description=Run Pinterest Auto Post daily

[Timer]
OnCalendar=*-*-* 09:00:00
Persistent=true

[Install]
WantedBy=timers.target
```

## 📊 ログと監視

### 投稿ログ

- `posted_pins.json`: 投稿済みピンのログ
- 重複投稿を防止するために使用

### エラーログ

スクリプト実行時のエラーは標準エラー出力に出力されます。
cronで実行する場合は、リダイレクトでログファイルに保存してください。

## ⚠️ 注意事項

1. **API制限**: Pinterest APIにはレート制限があります。Trial版は1日1000リクエストまで。
2. **画像サイズ**: Pinterestの推奨サイズ（2:3比率）を使用しています。
3. **著作権**: 生成した画像やテキストの著作権に注意してください。
4. **テスト**: 本番環境で使用する前に、必ずテスト環境で動作確認してください。

## 🛠️ トラブルシューティング

### Pinterest APIエラー

```
401 Unauthorized
```
→ アクセストークンが無効または期限切れです。再認証してください。

```
429 Too Many Requests
```
→ API制限に達しました。時間をおいて再試行してください。

### 画像生成エラー

```
OSError: cannot open resource
```
→ フォントファイルが見つかりません。システムフォントのパスを確認してください。

## 📞 サポート

問題が発生した場合は、GitHubのIssueで報告してください。

---

*最終更新: 2026年1月10日*
