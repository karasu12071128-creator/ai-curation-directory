#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
思考残差 - X自動投稿システム
毎日、「思考残差」をテーマにした投稿を自動生成し、Xに投稿します。
"""

import os
import sys
import random
import time
from datetime import datetime
import requests
import tweepy

# OpenAI APIの設定
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
OPENAI_BASE_URL = os.environ.get('OPENAI_BASE_URL') or 'https://api.openai.com/v1'

# X API認証情報
X_API_KEY = os.environ.get('X_API_KEY')
X_API_KEY_SECRET = os.environ.get('X_API_KEY_SECRET')
X_ACCESS_TOKEN = os.environ.get('X_ACCESS_TOKEN')
X_ACCESS_TOKEN_SECRET = os.environ.get('X_ACCESS_TOKEN_SECRET')


def get_prompt_by_type(post_type):
    """
    投稿タイプに応じたプロンプトを返す
    """
    prompts = {
        'A': """# 命令書

あなたは「思考残差」という概念を静かに表現する人です。以下の制約条件と世界観を守り、Xへの投稿を1本生成してください。

# 投稿タイプ：思考残差・概念

このタイプでは、以下の状態を静かに表現してください：
・何もしていないのに疲れる状態
・休んでも回復しない感覚
・終わっていない思考が残ること

# 世界観
・テーマ名：「思考残差」
・定義：考えた"あと"に残る未処理の疲れ（判断・我慢・未送信感情のあと）
・静かで落ち着いた文体を維持してください。

# 共通ルール
・280字以内
・売り込み禁止
・リンク禁止
・感情煽り禁止
・静かで落ち着いた文体
・断定しすぎない

# 出力形式
（本文のみをここに記述）""",

        'B': """# 命令書

あなたは「思考残差」という概念を仕事の文脈で構造的に語る人です。以下の制約条件と世界観を守り、Xへの投稿を1本生成してください。

# 投稿タイプ：思考残差 × 仕事

このタイプでは、以下のテーマを構造の話として書いてください：
・決めきれない仕事
・優先順位で消耗する状態
・判断を保留したまま残る思考

# 世界観
・テーマ名：「思考残差」
・定義：考えた"あと"に残る未処理の疲れ（判断・我慢・未送信感情のあと）
・静かで落ち着いた文体を維持してください。

# 共通ルール
・280字以内
・売り込み禁止
・リンク禁止
・感情煽り禁止
・静かで落ち着いた文体
・断定しすぎない

# 出力形式
（本文のみをここに記述）""",

        'C': """# 命令書

あなたは余白のある一文を書く人です。以下の制約条件と世界観を守り、Xへの投稿を1本生成してください。

# 投稿タイプ：余白のある一文

このタイプでは、以下の特徴を持つ投稿を書いてください：
・1〜2行
・問いかけ、または断定未満
・保存されやすい表現

# 世界観
・テーマ名：「思考残差」
・定義：考えた"あと"に残る未処理の疲れ（判断・我慢・未送信感情のあと）
・静かで落ち着いた文体を維持してください。

# 共通ルール
・280字以内
・売り込み禁止
・リンク禁止
・感情煽り禁止
・静かで落ち着いた文体
・断定しすぎない

# 出力形式
（本文のみをここに記述）""",

        'D': """# 命令書

あなたはインプレッションを加速させる投稿を書く人です。以下の制約条件と世界観を守り、Xへの投稿を1本生成してください。

# 投稿タイプ：インプレッション加速型

このタイプでは、以下の構造で投稿を書いてください：
・冒頭で逆説や違和感を出す
・2〜4行で理由を少しだけ説明
・結論や解決は書かない

# 世界観
・テーマ名：「思考残差」
・定義：考えた"あと"に残る未処理の疲れ（判断・我慢・未送信感情のあと）
・静かで落ち着いた文体を維持してください。

# 共通ルール
・280字以内
・売り込み禁止
・リンク禁止
・感情煽り禁止
・静かで落ち着いた文体
・断定しすぎない

# 出力形式
（本文のみをここに記述）"""
    }
    
    return prompts.get(post_type, prompts['A'])


def generate_content():
    """
    OpenAI APIを使用してコンテンツを生成（リトライロジック付き）
    """
    print("📝 コンテンツを生成中...")
    
    # 投稿タイプをランダムに選択
    post_types = ['A', 'B', 'C', 'D']
    selected_type = random.choice(post_types)
    
    print(f"選択された投稿タイプ: {selected_type}")
    
    prompt = get_prompt_by_type(selected_type)
    
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
        'max_tokens': 300
    }
    
    max_retries = 3
    retry_delay = 30  # 秒
    
    for attempt in range(max_retries):
        try:
            print(f"試行 {attempt + 1}/{max_retries}...")
            
            response = requests.post(
                f'{OPENAI_BASE_URL}/chat/completions',
                headers=headers,
                json=data,
                timeout=30
            )
            
            # ステータスコードとレスポンス内容をログ出力
            print(f"ステータスコード: {response.status_code}")
            
            if response.status_code != 200:
                print(f"エラーレスポンス: {response.text[:500]}")
            
            response.raise_for_status()
            
            result = response.json()
            content = result['choices'][0]['message']['content'].strip()
            
            # 文字数チェック（280字以内）
            if len(content) > 280:
                print(f"警告: 生成された文字数が280字を超えています（{len(content)}文字）")
            
            print("✅ コンテンツ生成成功")
            return content, selected_type
            
        except requests.exceptions.HTTPError as e:
            print(f"HTTPエラー（試行 {attempt + 1}/{max_retries}）: {e}")
            if attempt < max_retries - 1:
                print(f"{retry_delay}秒待機してから再試行します...")
                time.sleep(retry_delay)
            else:
                print(f"エラー: {max_retries}回の試行後もコンテンツ生成に失敗しました")
                sys.exit(1)
                
        except Exception as e:
            print(f"予期しないエラー（試行 {attempt + 1}/{max_retries}）: {type(e).__name__}: {e}")
            if attempt < max_retries - 1:
                print(f"{retry_delay}秒待機してから再試行します...")
                time.sleep(retry_delay)
            else:
                print(f"エラー: {max_retries}回の試行後もコンテンツ生成に失敗しました")
                sys.exit(1)


def post_to_x(content):
    """
    生成されたコンテンツをXに投稿（tweepyを使用、リトライロジック付き）
    """
    max_retries = 3
    retry_delay = 60  # 秒（待機時間を長くする）
    
    for attempt in range(max_retries):
        try:
            print(f"投稿試行 {attempt + 1}/{max_retries}...")
            
            # 2回目以降の試行では少し待機してから実行
            if attempt > 0:
                print(f"前回の試行から{retry_delay}秒待機しました。")
            
            # tweepyクライアントの初期化
            client = tweepy.Client(
                consumer_key=X_API_KEY,
                consumer_secret=X_API_KEY_SECRET,
                access_token=X_ACCESS_TOKEN,
                access_token_secret=X_ACCESS_TOKEN_SECRET
            )
            
            # ツイートを投稿
            response = client.create_tweet(text=content)
            
            tweet_id = response.data['id']
            
            print(f"✅ 投稿成功！ Tweet ID: {tweet_id}")
            print(f"投稿内容: {content}")
            
            return tweet_id
            
        except tweepy.TweepyException as e:
            error_msg = str(e)
            print(f"エラー（試行 {attempt + 1}/{max_retries}）: X投稿に失敗しました - {error_msg}")
            
            # 403エラーまたは最後の試行の場合
            if "403" in error_msg or "Forbidden" in error_msg:
                if attempt < max_retries - 1:
                    print(f"{retry_delay}秒待機してから再試行します...")
                    time.sleep(retry_delay)
                    continue
                else:
                    print("最大リトライ回数に達しました。投稿に失敗しました。")
                    sys.exit(1)
            else:
                # 403以外のエラーは即座に終了
                sys.exit(1)
                
        except Exception as e:
            print(f"エラー: 予期しないエラーが発生しました - {e}")
            sys.exit(1)
    
    print("すべてのリトライが失敗しました。")
    sys.exit(1)


def save_content(content, post_type):
    """
    生成された投稿内容をファイルに保存
    """
    today = datetime.now().strftime('%Y-%m-%d')
    
    # xディレクトリが存在しない場合は作成
    os.makedirs('x', exist_ok=True)
    
    filename = f'x/{today}_x.md'
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(f"# 投稿タイプ: {post_type}\n\n")
        f.write(content)
    
    print(f"📝 投稿内容を保存しました: {filename}")


def main():
    """
    メイン処理
    """
    print("=" * 50)
    print("思考残差 - X自動投稿システム")
    print("=" * 50)
    print()
    
    # 環境変数のチェック
    if not all([OPENAI_API_KEY, X_API_KEY, X_API_KEY_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET]):
        print("エラー: 必要な環境変数が設定されていません")
        sys.exit(1)
    
    # コンテンツ生成
    content, post_type = generate_content()
    print(f"生成完了: {content}")
    print(f"文字数: {len(content)}文字")
    
    # ファイルに保存
    save_content(content, post_type)
    
    # Xに投稿
    print()
    print("📤 Xに投稿中...")
    post_to_x(content)
    
    print()
    print("✨ すべての処理が完了しました！")


if __name__ == '__main__':
    main()
