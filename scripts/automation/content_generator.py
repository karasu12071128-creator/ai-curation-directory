#!/usr/bin/env python3
"""
SNS投稿用コンテンツ自動生成システム
Pinterest、note、その他SNS向けの投稿コンテンツを一括生成

使用方法:
   python content_generator.py --platform pinterest --tool chatgpt
   python content_generator.py --platform all --tool chatgpt
   python content_generator.py --batch --count 10

必要なパッケージ:
   pip install pillow requests openai
"""

import os
import json
import argparse
from datetime import datetime
from typing import Dict, List, Optional
from PIL import Image, ImageDraw, ImageFont
import requests
from io import BytesIO

# OpenAI API（テキスト生成用）
try:
    from openai import OpenAI
    OPENAI_AVAILABLE = True
except ImportError:
    OPENAI_AVAILABLE = False

# 出力ディレクトリ
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "generated_content")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# サイト情報
SITE_URL = "https://ai-curation-directory-zrx9.vercel.app"
SITE_NAME = "AIツールナビ"


class ColorSchemes:
    """カラースキーム定義"""
    
    SCHEMES = {
        "blue": {
            "primary": "#3B82F6",
            "secondary": "#1E40AF",
            "accent": "#60A5FA",
            "background": "#EFF6FF",
            "text": "#1E3A8A"
        },
        "purple": {
            "primary": "#8B5CF6",
            "secondary": "#5B21B6",
            "accent": "#A78BFA",
            "background": "#F5F3FF",
            "text": "#4C1D95"
        },
        "green": {
            "primary": "#10B981",
            "secondary": "#047857",
            "accent": "#34D399",
            "background": "#ECFDF5",
            "text": "#064E3B"
        },
        "orange": {
            "primary": "#F97316",
            "secondary": "#C2410C",
            "accent": "#FB923C",
            "background": "#FFF7ED",
            "text": "#7C2D12"
        },
        "pink": {
            "primary": "#EC4899",
            "secondary": "#BE185D",
            "accent": "#F472B6",
            "background": "#FDF2F8",
            "text": "#831843"
        }
    }
    
    @classmethod
    def get_scheme(cls, name: str) -> Dict:
        return cls.SCHEMES.get(name, cls.SCHEMES["blue"])
    
    @classmethod
    def get_scheme_for_category(cls, category: str) -> Dict:
        """カテゴリに応じたカラースキームを返す"""
        category_colors = {
            "文章生成": "blue",
            "画像生成": "purple",
            "動画生成": "pink",
            "音声生成": "green",
            "コーディング": "orange",
            "翻訳": "blue",
            "デザイン": "purple",
        }
        scheme_name = category_colors.get(category, "blue")
        return cls.get_scheme(scheme_name)


class PinterestImageGenerator:
    """Pinterest用画像生成"""
    
    # Pinterest推奨サイズ
    PIN_SIZES = {
        "standard": (1000, 1500),  # 2:3
        "square": (1000, 1000),    # 1:1
        "tall": (1000, 2100),      # 1:2.1
    }
    
    def __init__(self, size_type: str = "standard"):
        self.width, self.height = self.PIN_SIZES.get(size_type, self.PIN_SIZES["standard"])
        
    def create_tool_pin(
        self,
        tool_name: str,
        tagline: str,
        category: str,
        features: List[str],
        output_path: str,
        color_scheme: Optional[Dict] = None
    ) -> str:
        """ツール紹介用のピン画像を生成"""
        
        if color_scheme is None:
            color_scheme = ColorSchemes.get_scheme_for_category(category)
        
        # 画像作成
        img = Image.new('RGB', (self.width, self.height), color_scheme["background"])
        draw = ImageDraw.Draw(img)
        
        # フォント設定（システムフォントを使用）
        try:
            title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 72)
            subtitle_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 36)
            body_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 32)
            small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
        except:
            title_font = ImageFont.load_default()
            subtitle_font = title_font
            body_font = title_font
            small_font = title_font
        
        # ヘッダー背景
        draw.rectangle([(0, 0), (self.width, 300)], fill=color_scheme["primary"])
        
        # カテゴリラベル
        draw.text((50, 50), f"#{category}", font=small_font, fill="white")
        
        # ツール名
        draw.text((50, 120), tool_name, font=title_font, fill="white")
        
        # タグライン
        draw.text((50, 220), tagline[:50], font=subtitle_font, fill=color_scheme["accent"])
        
        # 特徴リスト
        y_position = 380
        for i, feature in enumerate(features[:5]):
            # チェックマーク風の装飾
            draw.ellipse([(50, y_position), (80, y_position + 30)], fill=color_scheme["primary"])
            draw.text((100, y_position), f"✓ {feature[:40]}", font=body_font, fill=color_scheme["text"])
            y_position += 80
        
        # フッター
        footer_y = self.height - 150
        draw.rectangle([(0, footer_y), (self.width, self.height)], fill=color_scheme["secondary"])
        draw.text((50, footer_y + 50), f"🔗 {SITE_NAME}で詳細を見る", font=subtitle_font, fill="white")
        
        # 保存
        img.save(output_path, "PNG", quality=95)
        return output_path
    
    def create_comparison_pin(
        self,
        tool1_name: str,
        tool2_name: str,
        comparison_points: List[Dict],
        output_path: str
    ) -> str:
        """比較用のピン画像を生成"""
        
        color_scheme = ColorSchemes.get_scheme("purple")
        
        img = Image.new('RGB', (self.width, self.height), color_scheme["background"])
        draw = ImageDraw.Draw(img)
        
        try:
            title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 56)
            subtitle_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 36)
            body_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 28)
        except:
            title_font = ImageFont.load_default()
            subtitle_font = title_font
            body_font = title_font
        
        # ヘッダー
        draw.rectangle([(0, 0), (self.width, 250)], fill=color_scheme["primary"])
        draw.text((50, 50), "徹底比較", font=subtitle_font, fill=color_scheme["accent"])
        draw.text((50, 120), f"{tool1_name} vs {tool2_name}", font=title_font, fill="white")
        
        # 比較テーブル
        y_position = 320
        col1_x = 100
        col2_x = self.width // 2 + 50
        
        # ヘッダー行
        draw.text((col1_x, y_position), tool1_name, font=subtitle_font, fill=color_scheme["primary"])
        draw.text((col2_x, y_position), tool2_name, font=subtitle_font, fill=color_scheme["secondary"])
        y_position += 80
        
        # 比較項目
        for point in comparison_points[:5]:
            draw.line([(50, y_position), (self.width - 50, y_position)], fill=color_scheme["accent"], width=2)
            y_position += 20
            
            draw.text((col1_x, y_position), point.get("tool1", ""), font=body_font, fill=color_scheme["text"])
            draw.text((col2_x, y_position), point.get("tool2", ""), font=body_font, fill=color_scheme["text"])
            y_position += 100
        
        # フッター
        footer_y = self.height - 150
        draw.rectangle([(0, footer_y), (self.width, self.height)], fill=color_scheme["secondary"])
        draw.text((50, footer_y + 50), f"🔗 {SITE_NAME}で詳細を見る", font=subtitle_font, fill="white")
        
        img.save(output_path, "PNG", quality=95)
        return output_path


class TextContentGenerator:
    """テキストコンテンツ生成"""
    
    def __init__(self):
        self.client = None
        if OPENAI_AVAILABLE and os.environ.get("OPENAI_API_KEY"):
            self.client = OpenAI()
    
    def generate_with_ai(self, prompt: str) -> str:
        """AIを使ってテキストを生成"""
        if not self.client:
            return self._generate_template(prompt)
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-4.1-mini",
                messages=[
                    {"role": "system", "content": "あなたはSNSマーケティングの専門家です。魅力的で簡潔なSNS投稿文を作成してください。"},
                    {"role": "user", "content": prompt}
                ],
                max_tokens=500
            )
            return response.choices[0].message.content
        except Exception as e:
            print(f"AI生成エラー: {e}")
            return self._generate_template(prompt)
    
    def _generate_template(self, prompt: str) -> str:
        """テンプレートベースのテキスト生成"""
        return "【AIによる自動生成テキストがここに入ります】"
    
    def generate_pinterest_description(self, tool_data: Dict) -> str:
        """Pinterest投稿用の説明文を生成"""
        prompt = f"""
以下のAIツールについて、Pinterest投稿用の説明文を作成してください。

ツール名: {tool_data.get('name', '')}
カテゴリ: {tool_data.get('category', '')}
概要: {tool_data.get('description', '')}
特徴: {', '.join(tool_data.get('features', [])[:3])}

要件:
- 300文字以内
- 絵文字を適度に使用
- ハッシュタグを5つ程度含める
- 「詳しくはプロフィールのリンクから」で締める
"""
        return self.generate_with_ai(prompt)
    
    def generate_note_intro(self, tool_data: Dict) -> str:
        """note記事の導入文を生成"""
        prompt = f"""
以下のAIツールについて、note記事の導入部分を作成してください。

ツール名: {tool_data.get('name', '')}
カテゴリ: {tool_data.get('category', '')}
概要: {tool_data.get('description', '')}

要件:
- 読者の悩みに共感する書き出し
- ツールで解決できることを示唆
- 200文字程度
- 親しみやすい口調
"""
        return self.generate_with_ai(prompt)


class ContentBatchGenerator:
    """コンテンツ一括生成"""
    
    def __init__(self):
        self.image_generator = PinterestImageGenerator()
        self.text_generator = TextContentGenerator()
    
    def generate_tool_content(self, tool_data: Dict) -> Dict:
        """ツールの全プラットフォーム向けコンテンツを生成"""
        
        tool_name = tool_data.get("name", "Unknown")
        slug = tool_data.get("slug", tool_name.lower().replace(" ", "-"))
        
        # 出力ディレクトリ
        tool_dir = os.path.join(OUTPUT_DIR, slug)
        os.makedirs(tool_dir, exist_ok=True)
        
        result = {
            "tool_name": tool_name,
            "slug": slug,
            "generated_at": datetime.now().isoformat(),
            "content": {}
        }
        
        # Pinterest用画像
        pinterest_image_path = os.path.join(tool_dir, "pinterest_pin.png")
        self.image_generator.create_tool_pin(
            tool_name=tool_name,
            tagline=tool_data.get("tagline", ""),
            category=tool_data.get("category", "AIツール"),
            features=tool_data.get("features", []),
            output_path=pinterest_image_path
        )
        result["content"]["pinterest"] = {
            "image": pinterest_image_path,
            "title": f"【{tool_data.get('category', 'AIツール')}】{tool_name}",
            "description": self.text_generator.generate_pinterest_description(tool_data),
            "link": f"{SITE_URL}/tools/{slug}"
        }
        
        # note用テキスト
        result["content"]["note"] = {
            "intro": self.text_generator.generate_note_intro(tool_data),
            "link": f"{SITE_URL}/tools/{slug}"
        }
        
        # メタデータを保存
        metadata_path = os.path.join(tool_dir, "content_metadata.json")
        with open(metadata_path, "w", encoding="utf-8") as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        
        return result
    
    def batch_generate(self, tools: List[Dict], count: int = 10) -> List[Dict]:
        """複数ツールのコンテンツを一括生成"""
        results = []
        for tool in tools[:count]:
            print(f"生成中: {tool.get('name', 'Unknown')}")
            result = self.generate_tool_content(tool)
            results.append(result)
        return results


def main():
    parser = argparse.ArgumentParser(description="SNS投稿用コンテンツ自動生成")
    parser.add_argument("--platform", choices=["pinterest", "note", "all"], default="all",
                        help="対象プラットフォーム")
    parser.add_argument("--tool", help="ツール名")
    parser.add_argument("--batch", action="store_true", help="一括生成モード")
    parser.add_argument("--count", type=int, default=10, help="一括生成数")
    
    args = parser.parse_args()
    
    # サンプルツールデータ
    sample_tools = [
        {
            "name": "ChatGPT",
            "slug": "chatgpt",
            "category": "文章生成AI",
            "tagline": "OpenAIの対話型AIアシスタント",
            "description": "自然な対話ができる高性能AIアシスタント",
            "features": ["自然な日本語対話", "コード生成", "文章要約", "翻訳", "アイデア出し"]
        },
        {
            "name": "Claude",
            "slug": "claude",
            "category": "文章生成AI",
            "tagline": "Anthropicの安全性重視AI",
            "description": "長文処理に強い対話型AI",
            "features": ["長文処理", "論理的な回答", "コード生成", "分析", "要約"]
        },
        {
            "name": "Midjourney",
            "slug": "midjourney",
            "category": "画像生成AI",
            "tagline": "アート品質の画像生成",
            "description": "高品質なアート画像を生成するAI",
            "features": ["高品質画像", "アート風", "スタイル指定", "バリエーション", "アップスケール"]
        }
    ]
    
    generator = ContentBatchGenerator()
    
    if args.batch:
        print(f"一括生成モード: {args.count}件")
        results = generator.batch_generate(sample_tools, args.count)
        print(f"\n✅ {len(results)}件のコンテンツを生成しました")
        print(f"📁 出力先: {OUTPUT_DIR}")
    elif args.tool:
        tool_data = next((t for t in sample_tools if t["name"].lower() == args.tool.lower()), None)
        if tool_data:
            result = generator.generate_tool_content(tool_data)
            print(f"✅ {args.tool}のコンテンツを生成しました")
            print(f"📁 出力先: {OUTPUT_DIR}/{tool_data['slug']}")
        else:
            print(f"エラー: ツール '{args.tool}' が見つかりません")
    else:
        print("使用方法:")
        print("  python content_generator.py --tool chatgpt")
        print("  python content_generator.py --batch --count 10")


if __name__ == "__main__":
    main()
