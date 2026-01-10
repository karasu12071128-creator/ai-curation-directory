#!/usr/bin/env python3
"""
Pinterest自動投稿スクリプト
AIツールナビのコンテンツをPinterestに自動投稿するためのスクリプト

使用方法:
1. Pinterest APIのアクセストークンを環境変数に設定
   export PINTEREST_ACCESS_TOKEN="your_access_token"
2. スクリプトを実行
   python pinterest_auto_post.py

必要なパッケージ:
   pip install requests pillow
"""

import os
import json
import requests
from datetime import datetime
from typing import Optional, Dict, List
import logging

# ログ設定
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Pinterest API設定
PINTEREST_API_BASE = "https://api.pinterest.com/v5"
ACCESS_TOKEN = os.environ.get("PINTEREST_ACCESS_TOKEN", "")

# AIツールナビの設定
SITE_URL = "https://ai-curation-directory-zrx9.vercel.app"
BOARD_ID = os.environ.get("PINTEREST_BOARD_ID", "")  # 投稿先のボードID


class PinterestAPI:
    """Pinterest API v5 クライアント"""
    
    def __init__(self, access_token: str):
        self.access_token = access_token
        self.headers = {
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json"
        }
    
    def get_user_account(self) -> Dict:
        """ユーザーアカウント情報を取得"""
        response = requests.get(
            f"{PINTEREST_API_BASE}/user_account",
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()
    
    def get_boards(self) -> List[Dict]:
        """ユーザーのボード一覧を取得"""
        response = requests.get(
            f"{PINTEREST_API_BASE}/boards",
            headers=self.headers
        )
        response.raise_for_status()
        return response.json().get("items", [])
    
    def create_pin(
        self,
        board_id: str,
        title: str,
        description: str,
        link: str,
        media_source: Dict,
        alt_text: Optional[str] = None
    ) -> Dict:
        """
        新しいピンを作成
        
        Args:
            board_id: 投稿先のボードID
            title: ピンのタイトル（最大100文字）
            description: ピンの説明文（最大500文字）
            link: リンク先URL
            media_source: メディアソース情報
            alt_text: 画像の代替テキスト
        
        Returns:
            作成されたピンの情報
        """
        payload = {
            "board_id": board_id,
            "title": title[:100],  # 最大100文字
            "description": description[:500],  # 最大500文字
            "link": link,
            "media_source": media_source
        }
        
        if alt_text:
            payload["alt_text"] = alt_text[:500]
        
        response = requests.post(
            f"{PINTEREST_API_BASE}/pins",
            headers=self.headers,
            json=payload
        )
        response.raise_for_status()
        return response.json()
    
    def create_pin_from_url(
        self,
        board_id: str,
        title: str,
        description: str,
        link: str,
        image_url: str
    ) -> Dict:
        """URLから画像を取得してピンを作成"""
        media_source = {
            "source_type": "image_url",
            "url": image_url
        }
        return self.create_pin(board_id, title, description, link, media_source)


class AIToolContent:
    """AIツールナビのコンテンツ管理"""
    
    # 投稿用テンプレート
    TEMPLATES = {
        "tool_introduction": {
            "title": "【{category}】{tool_name}｜{tagline}",
            "description": """🤖 {tool_name}とは？

{description}

✨ 主な特徴：
{features}

💰 料金：{pricing}

🔗 詳しくはプロフィールのリンクから！

#AI #AIツール #{tool_name_tag} #テクノロジー #効率化 #生産性向上"""
        },
        "blog_promotion": {
            "title": "{article_title}",
            "description": """📝 新着記事のお知らせ

{summary}

この記事では以下について解説しています：
{topics}

🔗 詳しくはプロフィールのリンクから！

#AI #AIツール #ブログ #テック情報"""
        },
        "comparison": {
            "title": "【徹底比較】{tool1} vs {tool2}",
            "description": """🔍 {tool1}と{tool2}を徹底比較！

どちらを選ぶべき？
{comparison_points}

あなたに合ったツールを見つけよう！

🔗 詳しくはプロフィールのリンクから！

#AI比較 #AIツール #{tool1_tag} #{tool2_tag}"""
        }
    }
    
    @classmethod
    def generate_tool_post(cls, tool_data: Dict) -> Dict:
        """ツール紹介用の投稿コンテンツを生成"""
        template = cls.TEMPLATES["tool_introduction"]
        
        # 特徴をフォーマット
        features = tool_data.get("features", [])
        features_text = "\n".join([f"• {f}" for f in features[:5]])
        
        # タグ用にツール名を整形（スペースを除去）
        tool_name_tag = tool_data.get("name", "").replace(" ", "")
        
        title = template["title"].format(
            category=tool_data.get("category", "AIツール"),
            tool_name=tool_data.get("name", ""),
            tagline=tool_data.get("tagline", "")[:30]
        )
        
        description = template["description"].format(
            tool_name=tool_data.get("name", ""),
            description=tool_data.get("description", "")[:100],
            features=features_text,
            pricing=tool_data.get("pricing", "詳細はサイトで確認"),
            tool_name_tag=tool_name_tag
        )
        
        return {
            "title": title,
            "description": description,
            "link": f"{SITE_URL}/tools/{tool_data.get('slug', '')}",
            "image_url": tool_data.get("image_url", "")
        }
    
    @classmethod
    def generate_blog_post(cls, blog_data: Dict) -> Dict:
        """ブログ記事宣伝用の投稿コンテンツを生成"""
        template = cls.TEMPLATES["blog_promotion"]
        
        topics = blog_data.get("topics", [])
        topics_text = "\n".join([f"✅ {t}" for t in topics[:4]])
        
        title = template["title"].format(
            article_title=blog_data.get("title", "")[:100]
        )
        
        description = template["description"].format(
            summary=blog_data.get("summary", "")[:150],
            topics=topics_text
        )
        
        return {
            "title": title,
            "description": description,
            "link": f"{SITE_URL}/blog/{blog_data.get('slug', '')}",
            "image_url": blog_data.get("image_url", "")
        }


class PostScheduler:
    """投稿スケジューラー"""
    
    def __init__(self, api: PinterestAPI, board_id: str):
        self.api = api
        self.board_id = board_id
        self.posted_log_file = "posted_pins.json"
    
    def load_posted_log(self) -> List[str]:
        """投稿済みログを読み込み"""
        if os.path.exists(self.posted_log_file):
            with open(self.posted_log_file, "r") as f:
                return json.load(f)
        return []
    
    def save_posted_log(self, posted: List[str]):
        """投稿済みログを保存"""
        with open(self.posted_log_file, "w") as f:
            json.dump(posted, f, indent=2)
    
    def post_content(self, content: Dict) -> Optional[Dict]:
        """コンテンツを投稿"""
        try:
            result = self.api.create_pin_from_url(
                board_id=self.board_id,
                title=content["title"],
                description=content["description"],
                link=content["link"],
                image_url=content["image_url"]
            )
            logger.info(f"ピンを作成しました: {content['title']}")
            return result
        except requests.exceptions.HTTPError as e:
            logger.error(f"ピン作成エラー: {e}")
            return None
    
    def run_daily_post(self, content_list: List[Dict], max_posts: int = 1):
        """
        日次投稿を実行
        
        Args:
            content_list: 投稿候補のコンテンツリスト
            max_posts: 1回の実行で投稿する最大数
        """
        posted = self.load_posted_log()
        posts_made = 0
        
        for content in content_list:
            if posts_made >= max_posts:
                break
            
            content_id = content.get("link", "")
            if content_id in posted:
                continue
            
            result = self.post_content(content)
            if result:
                posted.append(content_id)
                posts_made += 1
        
        self.save_posted_log(posted)
        logger.info(f"本日の投稿完了: {posts_made}件")


def main():
    """メイン処理"""
    if not ACCESS_TOKEN:
        logger.error("PINTEREST_ACCESS_TOKEN が設定されていません")
        logger.info("環境変数を設定してください: export PINTEREST_ACCESS_TOKEN='your_token'")
        return
    
    if not BOARD_ID:
        logger.error("PINTEREST_BOARD_ID が設定されていません")
        logger.info("環境変数を設定してください: export PINTEREST_BOARD_ID='your_board_id'")
        return
    
    # API初期化
    api = PinterestAPI(ACCESS_TOKEN)
    
    # ユーザー情報確認
    try:
        user = api.get_user_account()
        logger.info(f"認証成功: {user.get('username', 'Unknown')}")
    except Exception as e:
        logger.error(f"認証エラー: {e}")
        return
    
    # サンプルコンテンツ（実際にはデータベースやAPIから取得）
    sample_tools = [
        {
            "name": "ChatGPT",
            "slug": "chatgpt",
            "category": "文章生成AI",
            "tagline": "OpenAIの対話型AI",
            "description": "自然な対話ができる高性能AIアシスタント。文章作成、プログラミング、翻訳など幅広いタスクに対応。",
            "features": [
                "自然な日本語での対話",
                "コード生成・デバッグ",
                "文章の要約・翻訳",
                "アイデア出し・ブレスト"
            ],
            "pricing": "無料プランあり / Plus $20/月",
            "image_url": "https://example.com/chatgpt.png"
        }
    ]
    
    # コンテンツ生成
    contents = [AIToolContent.generate_tool_post(tool) for tool in sample_tools]
    
    # スケジューラー実行
    scheduler = PostScheduler(api, BOARD_ID)
    scheduler.run_daily_post(contents, max_posts=1)


if __name__ == "__main__":
    main()
