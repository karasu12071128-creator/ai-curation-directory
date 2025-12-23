# 思考残差 - X自動投稿システム

「思考残差」をテーマにした投稿を、毎日自動でXに投稿するシステムです。

## 概要

**思考残差**とは、考えた"あと"に残る未処理の疲れ（判断・我慢・未送信感情のあと）を指します。

このシステムは、その世界観に基づいた静かな独り言のような投稿を、AIが自動生成し、毎日決まった時間にXへ投稿します。

## 投稿スケジュール

- **頻度:** 1日1回
- **時刻:** 毎日 22:00（日本時間）

## フォルダ構成

```
.
├── .github/
│   └── workflows/
│       └── x-auto-post.yml    # GitHub Actions設定ファイル
├── x/                          # 投稿内容の保存フォルダ
│   └── YYYY-MM-DD_x.md        # 日付ごとの投稿内容
├── auto_post.py                # 自動投稿プログラム
├── requirements.txt            # Pythonパッケージ依存関係
└── README.md                   # このファイル
```

## 投稿内容の仕様

- **文字数:** 30〜80文字
- **文体:** 静かな独り言、体言止めや短い文章
- **禁止事項:**
  - アドバイス、問いかけ、共感を求める表現
  - ハッシュタグ、URL、絵文字
  - 他者への言及

## 必要な環境変数（GitHub Secrets）

以下の環境変数が設定されている必要があります：

- `OPENAI_API_KEY` - OpenAI APIキー
- `X_API_KEY` - X API Key
- `X_API_KEY_SECRET` - X API Key Secret
- `X_ACCESS_TOKEN` - X Access Token
- `X_ACCESS_TOKEN_SECRET` - X Access Token Secret

## 運用方法

### 自動投稿の停止

一時的に自動投稿を停止したい場合：

1. リポジトリの `Settings` > `Actions` > `General` に移動
2. `Disable Actions` をクリック

### 投稿スケジュールの変更

`.github/workflows/x-auto-post.yml` ファイルの `cron` 設定を編集してください。

### 手動でのテスト実行

リポジトリの `Actions` タブから、ワークフローを手動で実行できます。

## ライセンス

このプロジェクトは個人利用を目的としています。
