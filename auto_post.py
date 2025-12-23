#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
思考残差 - X自動投稿システム
毎日、「思考残差」をテーマにした投稿を自動生成し、Xに投稿します。
"""

import os
import sys
from datetime import datetime
import requests
from requests_oauthlib import OAuth1

# OpenAI APIの設定
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
OPENAI_BASE_URL = os.environ.get('OPENAI_BASE_URL') or 'https://api.openai.com/v1'

# X API認証情報
X_API_KEY = os.environ.get('X_API_KEY')
X_API_KEY_SECRET = os.environ.get('X_API_KEY_SECRET')
X_ACCESS_TOKEN = os.environ.get('X_ACCESS_TOKEN')
X_ACCESS_TOKEN_SECRET = os.environ.get('X_ACCESS_TOKEN_SECRET')


def generate_content():
    """
    OpenAI APIを使用して「思考残差」をテーマにした投稿文を生成
    """
    prompt = """# 命令書

あなたは「思考残差」をテーマに思考する人です。以下の制約条件と世界観を守り、Xへの投稿を1本生成してください。

# 世界観
・テーマ名：「思考残差」
・定義：考えた"あと"に残る未処理の疲れ（判断・我慢・未送信感情のあと）
・静かな独り言のようなトーンを維持してください。

# 制約条件
・文字数：30〜80文字
・文体：静かな独り言、体言止めや短い文章を効果的に使う。
・禁止事項：
    ・アドバイス、問いかけ、共感を求める表現。
    ・ハッシュタグ、URL、絵文字の使用。
    ・他者への言及。

# 出力形式
（本文のみをここに記述）"""

    headers = {
        'Authorization': f'Bearer {OPENAI_API_KEY}',
        'Content-Type': 'application/json'
    }
    
    data = {
        'model': 'gpt-4.1-mini',
        'messages': [
            {'role': 'user', 'content': prompt}
        ],
        'temperature': 0.8,
        'max_tokens': 200
    }
    
    try:
        response = requests.post(
            f'{OPENAI_BASE_URL}/chat/completions',
            headers=headers,
            json=data,
            timeout=30
        )
        response.raise_for_status()
        
        result = response.json()
        content = result['choices'][0]['message']['content'].strip()
        
        # 文字数チェック（30〜80文字）
        if len(content) < 30 or len(content) > 80:
            print(f"警告: 生成された文字数が範囲外です（{len(content)}文字）")
        
        return content
        
    except Exception as e:
        print(f"エラー: コンテンツ生成に失敗しました - {e}")
        sys.exit(1)


def post_to_x(content):
    """
    生成されたコンテンツをXに投稿
    """
    url = 'https://api.twitter.com/2/tweets'
    
    auth = OAuth1(
        X_API_KEY,
        X_API_KEY_SECRET,
        X_ACCESS_TOKEN,
        X_ACCESS_TOKEN_SECRET
    )
    
    payload = {
        'text': content
    }
    
    try:
        response = requests.post(
            url,
            auth=auth,
            json=payload,
            timeout=30
        )
        response.raise_for_status()
        
        result = response.json()
        tweet_id = result['data']['id']
        
        print(f"✅ 投稿成功！ Tweet ID: {tweet_id}")
        print(f"投稿内容: {content}")
        
        return tweet_id
        
    except Exception as e:
        print(f"エラー: X投稿に失敗しました - {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"レスポンス: {e.response.text}")
        sys.exit(1)


def save_content(content):
    """
    生成された投稿内容をファイルに保存
    """
    today = datetime.now().strftime('%Y-%m-%d')
    
    # xディレクトリが存在しない場合は作成
    os.makedirs('x', exist_ok=True)
    
    filename = f'x/{today}_x.md'
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"📝 投稿内容を保存しました: {filename}")


def main():
    """
    メイン処理
    """
    print("=" * 50)
    print("思考残差 - X自動投稿システム")
    print("=" * 50)
    
    # 環境変数のチェック
    required_vars = [
        'OPENAI_API_KEY',
        'X_API_KEY',
        'X_API_KEY_SECRET',
        'X_ACCESS_TOKEN',
        'X_ACCESS_TOKEN_SECRET'
    ]
    
    missing_vars = [var for var in required_vars if not os.environ.get(var)]
    
    if missing_vars:
        print(f"エラー: 以下の環境変数が設定されていません:")
        for var in missing_vars:
            print(f"  - {var}")
        sys.exit(1)
    
    # 1. コンテンツ生成
    print("\n📝 コンテンツを生成中...")
    content = generate_content()
    print(f"生成完了: {content}")
    print(f"文字数: {len(content)}文字")
    
    # 2. ファイルに保存
    save_content(content)
    
    # 3. Xに投稿
    print("\n📤 Xに投稿中...")
    post_to_x(content)
    
    print("\n✨ すべての処理が完了しました！")


if __name__ == '__main__':
    main()
