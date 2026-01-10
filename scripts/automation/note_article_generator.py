#!/usr/bin/env python3
"""
note記事テンプレート自動生成ツール
AIツールナビのコンテンツからnote記事の下書きを自動生成

使用方法:
   python note_article_generator.py --type tool_review --tool chatgpt
   python note_article_generator.py --type comparison --tools "chatgpt,claude"
   python note_article_generator.py --type roundup --category "文章生成AI"

出力:
   Markdown形式の記事テンプレートを生成し、output/ディレクトリに保存
"""

import os
import json
import argparse
from datetime import datetime
from typing import Dict, List, Optional
import re

# 出力ディレクトリ
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "output")
os.makedirs(OUTPUT_DIR, exist_ok=True)


class ArticleTemplates:
    """記事テンプレート集"""
    
    @staticmethod
    def tool_review(tool_data: Dict) -> str:
        """ツールレビュー記事テンプレート"""
        return f"""# 【{datetime.now().year}年最新】{tool_data['name']}の使い方完全ガイド｜料金・機能・評判を徹底解説

## はじめに

「{tool_data['name']}って実際どうなの？」
「無料で使える？有料プランは必要？」

そんな疑問を持っている方も多いのではないでしょうか。

この記事では、{tool_data['name']}の**基本的な使い方から料金プラン、実際の活用事例**まで、初心者にもわかりやすく解説します。

---

## {tool_data['name']}とは？

{tool_data.get('description', '【ここにツールの概要を記載】')}

### 基本情報

| 項目 | 内容 |
|------|------|
| 開発元 | {tool_data.get('developer', '【開発元】')} |
| リリース | {tool_data.get('release_date', '【リリース日】')} |
| 料金 | {tool_data.get('pricing', '【料金プラン】')} |
| 対応言語 | {tool_data.get('languages', '日本語対応')} |
| 公式サイト | {tool_data.get('url', '【URL】')} |

---

## {tool_data['name']}の主な機能

### 1. 【機能1のタイトル】

【機能1の詳細説明】

### 2. 【機能2のタイトル】

【機能2の詳細説明】

### 3. 【機能3のタイトル】

【機能3の詳細説明】

---

## 料金プラン比較

| プラン | 月額料金 | 主な機能 |
|--------|----------|----------|
| 無料プラン | ¥0 | 【機能】 |
| 有料プラン | ¥【金額】 | 【機能】 |
| ビジネスプラン | ¥【金額】 | 【機能】 |

### 無料プランでできること

- 【項目1】
- 【項目2】
- 【項目3】

### 有料プランがおすすめな人

- 【条件1】
- 【条件2】
- 【条件3】

---

## 実際の使い方（ステップバイステップ）

### Step 1: アカウント登録

【登録手順の説明】

### Step 2: 基本設定

【設定手順の説明】

### Step 3: 実際に使ってみる

【使用手順の説明】

---

## メリット・デメリット

### メリット ✅

1. **【メリット1】**: 説明
2. **【メリット2】**: 説明
3. **【メリット3】**: 説明

### デメリット ❌

1. **【デメリット1】**: 説明
2. **【デメリット2】**: 説明

---

## 活用事例・ユースケース

### ビジネスでの活用

【事例説明】

### 個人での活用

【事例説明】

### クリエイティブな活用

【事例説明】

---

## よくある質問（FAQ）

### Q1: 無料で使えますか？

A: 【回答】

### Q2: 日本語に対応していますか？

A: 【回答】

### Q3: スマホでも使えますか？

A: 【回答】

---

## まとめ

{tool_data['name']}は、【総評を記載】

**こんな人におすすめ：**
- 【対象者1】
- 【対象者2】
- 【対象者3】

ぜひ一度試してみてください！

---

📌 **関連記事**
- 【関連記事1のタイトル】
- 【関連記事2のタイトル】

🔗 **AIツールナビで詳細を見る**
https://ai-curation-directory-zrx9.vercel.app/tools/{tool_data.get('slug', '')}

---

*この記事は{datetime.now().strftime('%Y年%m月%d日')}時点の情報です。最新情報は公式サイトをご確認ください。*
"""

    @staticmethod
    def comparison(tool1: Dict, tool2: Dict) -> str:
        """比較記事テンプレート"""
        return f"""# 【{datetime.now().year}年最新】{tool1['name']} vs {tool2['name']} 徹底比較｜どっちを選ぶべき？

## はじめに

「{tool1['name']}と{tool2['name']}、どっちがいいの？」

AIツールを選ぶとき、こんな悩みを持つ方は多いのではないでしょうか。

この記事では、**{tool1['name']}と{tool2['name']}を10の観点から徹底比較**し、あなたに最適なツールを見つけるお手伝いをします。

---

## 結論：こんな人におすすめ

### {tool1['name']}がおすすめな人

- 【条件1】
- 【条件2】
- 【条件3】

### {tool2['name']}がおすすめな人

- 【条件1】
- 【条件2】
- 【条件3】

---

## 基本情報比較

| 項目 | {tool1['name']} | {tool2['name']} |
|------|-----------------|-----------------|
| 開発元 | 【開発元】 | 【開発元】 |
| リリース | 【日付】 | 【日付】 |
| 無料プラン | 【あり/なし】 | 【あり/なし】 |
| 有料プラン | 【金額】 | 【金額】 |
| 日本語対応 | 【対応状況】 | 【対応状況】 |

---

## 詳細比較

### 1. 料金プラン 💰

**{tool1['name']}**
【料金の詳細】

**{tool2['name']}**
【料金の詳細】

**勝者: 【ツール名】**

---

### 2. 機能の豊富さ 🛠️

**{tool1['name']}**
【機能の詳細】

**{tool2['name']}**
【機能の詳細】

**勝者: 【ツール名】**

---

### 3. 使いやすさ 👆

**{tool1['name']}**
【使いやすさの評価】

**{tool2['name']}**
【使いやすさの評価】

**勝者: 【ツール名】**

---

### 4. 出力品質 ✨

**{tool1['name']}**
【品質の評価】

**{tool2['name']}**
【品質の評価】

**勝者: 【ツール名】**

---

### 5. 日本語対応 🇯🇵

**{tool1['name']}**
【日本語対応の詳細】

**{tool2['name']}**
【日本語対応の詳細】

**勝者: 【ツール名】**

---

## 総合評価

| 評価項目 | {tool1['name']} | {tool2['name']} |
|----------|-----------------|-----------------|
| 料金 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |
| 機能 | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐⭐ |
| 使いやすさ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |
| 品質 | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐⭐ |
| 日本語 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |
| **総合** | **⭐⭐⭐⭐☆** | **⭐⭐⭐⭐☆** |

---

## よくある質問

### Q1: 両方使うことはできますか？

A: 【回答】

### Q2: 乗り換えは簡単ですか？

A: 【回答】

---

## まとめ

【総評を記載】

どちらも優れたツールですが、**あなたの用途に合わせて選ぶ**ことが大切です。

---

🔗 **AIツールナビで詳細を見る**
- {tool1['name']}: https://ai-curation-directory-zrx9.vercel.app/tools/{tool1.get('slug', '')}
- {tool2['name']}: https://ai-curation-directory-zrx9.vercel.app/tools/{tool2.get('slug', '')}

---

*この記事は{datetime.now().strftime('%Y年%m月%d日')}時点の情報です。*
"""

    @staticmethod
    def roundup(category: str, tools: List[Dict], count: int = 10) -> str:
        """まとめ記事テンプレート"""
        tool_sections = ""
        for i, tool in enumerate(tools[:count], 1):
            tool_sections += f"""
### {i}. {tool.get('name', f'ツール{i}')}

**概要**: {tool.get('description', '【概要を記載】')}

**料金**: {tool.get('pricing', '【料金を記載】')}

**おすすめポイント**:
- 【ポイント1】
- 【ポイント2】
- 【ポイント3】

🔗 [詳細を見る](https://ai-curation-directory-zrx9.vercel.app/tools/{tool.get('slug', '')})

---
"""
        
        return f"""# 【{datetime.now().year}年最新】{category}おすすめ{count}選｜無料で使えるツールも紹介

## はじめに

「{category}を使ってみたいけど、どれを選べばいいかわからない…」

そんな悩みを持っている方のために、**{datetime.now().year}年におすすめの{category}を{count}個厳選**してご紹介します。

無料で使えるものから、プロ向けの高機能ツールまで幅広くカバーしているので、あなたにぴったりのツールが見つかるはずです。

---

## {category}の選び方

### チェックポイント1: 料金プラン

【説明】

### チェックポイント2: 機能の充実度

【説明】

### チェックポイント3: 使いやすさ

【説明】

---

## おすすめ{category}{count}選

{tool_sections}

## 比較表

| ツール名 | 料金 | 特徴 | おすすめ度 |
|----------|------|------|------------|
| 【ツール1】 | 【料金】 | 【特徴】 | ⭐⭐⭐⭐⭐ |
| 【ツール2】 | 【料金】 | 【特徴】 | ⭐⭐⭐⭐☆ |
| 【ツール3】 | 【料金】 | 【特徴】 | ⭐⭐⭐⭐☆ |

---

## 目的別おすすめ

### 無料で始めたい人向け

1. 【ツール名】
2. 【ツール名】

### 本格的に使いたい人向け

1. 【ツール名】
2. 【ツール名】

### ビジネス利用したい人向け

1. 【ツール名】
2. 【ツール名】

---

## まとめ

【総評を記載】

ぜひ気になるツールを試してみてください！

---

📌 **関連記事**
- 【関連記事1】
- 【関連記事2】

🔗 **AIツールナビでもっと探す**
https://ai-curation-directory-zrx9.vercel.app/categories/{category.lower().replace(' ', '-')}

---

*この記事は{datetime.now().strftime('%Y年%m月%d日')}時点の情報です。*
"""


class NoteArticleGenerator:
    """note記事ジェネレーター"""
    
    def __init__(self, tools_data: Optional[List[Dict]] = None):
        self.tools_data = tools_data or self._load_sample_tools()
    
    def _load_sample_tools(self) -> List[Dict]:
        """サンプルツールデータを読み込み"""
        return [
            {"name": "ChatGPT", "slug": "chatgpt", "description": "OpenAIの対話型AI"},
            {"name": "Claude", "slug": "claude", "description": "Anthropicの対話型AI"},
            {"name": "Midjourney", "slug": "midjourney", "description": "高品質な画像生成AI"},
            {"name": "DALL-E 3", "slug": "dall-e-3", "description": "OpenAIの画像生成AI"},
            {"name": "GitHub Copilot", "slug": "github-copilot", "description": "AIコーディングアシスタント"},
        ]
    
    def get_tool_by_name(self, name: str) -> Optional[Dict]:
        """ツール名でデータを検索"""
        name_lower = name.lower()
        for tool in self.tools_data:
            if tool.get("name", "").lower() == name_lower:
                return tool
            if tool.get("slug", "").lower() == name_lower:
                return tool
        return {"name": name, "slug": name.lower().replace(" ", "-")}
    
    def generate_tool_review(self, tool_name: str) -> str:
        """ツールレビュー記事を生成"""
        tool = self.get_tool_by_name(tool_name)
        return ArticleTemplates.tool_review(tool)
    
    def generate_comparison(self, tool1_name: str, tool2_name: str) -> str:
        """比較記事を生成"""
        tool1 = self.get_tool_by_name(tool1_name)
        tool2 = self.get_tool_by_name(tool2_name)
        return ArticleTemplates.comparison(tool1, tool2)
    
    def generate_roundup(self, category: str, count: int = 10) -> str:
        """まとめ記事を生成"""
        return ArticleTemplates.roundup(category, self.tools_data, count)
    
    def save_article(self, content: str, filename: str) -> str:
        """記事をファイルに保存"""
        # ファイル名をサニタイズ
        safe_filename = re.sub(r'[^\w\-_]', '_', filename)
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        filepath = os.path.join(OUTPUT_DIR, f"{safe_filename}_{timestamp}.md")
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        
        return filepath


def main():
    parser = argparse.ArgumentParser(description="note記事テンプレート自動生成ツール")
    parser.add_argument("--type", choices=["tool_review", "comparison", "roundup"],
                        required=True, help="記事タイプ")
    parser.add_argument("--tool", help="ツール名（tool_review用）")
    parser.add_argument("--tools", help="比較するツール名（カンマ区切り、comparison用）")
    parser.add_argument("--category", help="カテゴリ名（roundup用）")
    parser.add_argument("--count", type=int, default=10, help="まとめ記事のツール数")
    
    args = parser.parse_args()
    
    generator = NoteArticleGenerator()
    
    if args.type == "tool_review":
        if not args.tool:
            print("エラー: --tool オプションが必要です")
            return
        content = generator.generate_tool_review(args.tool)
        filename = f"review_{args.tool}"
    
    elif args.type == "comparison":
        if not args.tools:
            print("エラー: --tools オプションが必要です（例: --tools 'chatgpt,claude'）")
            return
        tools = [t.strip() for t in args.tools.split(",")]
        if len(tools) < 2:
            print("エラー: 2つのツール名が必要です")
            return
        content = generator.generate_comparison(tools[0], tools[1])
        filename = f"comparison_{tools[0]}_vs_{tools[1]}"
    
    elif args.type == "roundup":
        if not args.category:
            print("エラー: --category オプションが必要です")
            return
        content = generator.generate_roundup(args.category, args.count)
        filename = f"roundup_{args.category}"
    
    filepath = generator.save_article(content, filename)
    print(f"✅ 記事テンプレートを生成しました: {filepath}")
    print(f"\n📝 このファイルを編集してnoteに投稿してください。")


if __name__ == "__main__":
    main()
