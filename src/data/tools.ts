// AIツールデータベース（初期50件）
export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  pricing: 'free' | 'freemium' | 'paid' | 'enterprise';
  url: string;
  affiliateUrl?: string;
  features: string[];
  rating: number;
  reviewCount: number;
  icon: string;
  featured: boolean;
}

export const tools: Tool[] = [
  // 文章生成AI
  {
    id: '1',
    name: 'ChatGPT',
    slug: 'chatgpt',
    description: 'OpenAIが開発した対話型AI。文章生成、質問応答、コード作成など幅広いタスクに対応。GPT-4搭載で高精度な回答を提供。',
    category: 'text-generation',
    pricing: 'freemium',
    url: 'https://chat.openai.com',
    features: ['対話型AI', '文章生成', 'コード作成', '多言語対応', 'プラグイン対応'],
    rating: 4.8,
    reviewCount: 15420,
    icon: '🤖',
    featured: true
  },
  {
    id: '2',
    name: 'Claude',
    slug: 'claude',
    description: 'Anthropicが開発した安全性を重視した対話型AI。長文処理と分析に優れ、最大100Kトークンのコンテキストに対応。',
    category: 'text-generation',
    pricing: 'freemium',
    url: 'https://claude.ai',
    features: ['長文処理', '安全性重視', 'コード分析', 'ドキュメント要約', '多言語対応'],
    rating: 4.7,
    reviewCount: 8930,
    icon: '🧠',
    featured: true
  },
  {
    id: '3',
    name: 'Gemini',
    slug: 'gemini',
    description: 'Googleが開発したマルチモーダルAI。テキスト、画像、音声、動画を統合的に処理可能。',
    category: 'text-generation',
    pricing: 'freemium',
    url: 'https://gemini.google.com',
    features: ['マルチモーダル', 'Google連携', 'リアルタイム検索', '画像認識', 'コード生成'],
    rating: 4.5,
    reviewCount: 6780,
    icon: '✨',
    featured: true
  },
  {
    id: '4',
    name: 'Jasper',
    slug: 'jasper',
    description: 'マーケティング向けAIライティングツール。ブログ、広告、SNS投稿などのコンテンツを高速生成。',
    category: 'text-generation',
    pricing: 'paid',
    url: 'https://jasper.ai',
    features: ['マーケティング特化', 'テンプレート豊富', 'ブランドボイス', 'SEO最適化', 'チーム機能'],
    rating: 4.4,
    reviewCount: 3240,
    icon: '✍️',
    featured: false
  },
  {
    id: '5',
    name: 'Copy.ai',
    slug: 'copy-ai',
    description: 'セールスコピーやマーケティング文章に特化したAIツール。90以上のテンプレートを搭載。',
    category: 'text-generation',
    pricing: 'freemium',
    url: 'https://copy.ai',
    features: ['コピーライティング', 'テンプレート', 'ブログ生成', 'SNS投稿', '多言語対応'],
    rating: 4.3,
    reviewCount: 2890,
    icon: '📝',
    featured: false
  },

  // 画像生成AI
  {
    id: '6',
    name: 'Midjourney',
    slug: 'midjourney',
    description: 'テキストから高品質な画像を生成するAI。アート、デザイン、イラスト制作に最適。Discord経由で利用。',
    category: 'image-generation',
    pricing: 'paid',
    url: 'https://midjourney.com',
    features: ['高品質画像', 'アートスタイル', 'Discord連携', 'バリエーション生成', 'アップスケール'],
    rating: 4.9,
    reviewCount: 12340,
    icon: '🎨',
    featured: true
  },
  {
    id: '7',
    name: 'DALL-E 3',
    slug: 'dall-e-3',
    description: 'OpenAIの最新画像生成AI。ChatGPTと統合され、自然言語での指示で高精度な画像を生成。',
    category: 'image-generation',
    pricing: 'paid',
    url: 'https://openai.com/dall-e-3',
    features: ['ChatGPT統合', '高精度生成', 'テキスト描画', '安全フィルター', 'API対応'],
    rating: 4.7,
    reviewCount: 8920,
    icon: '🖼️',
    featured: true
  },
  {
    id: '8',
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    description: 'オープンソースの画像生成AI。ローカル実行可能で、カスタマイズ性が高い。',
    category: 'image-generation',
    pricing: 'free',
    url: 'https://stability.ai',
    features: ['オープンソース', 'ローカル実行', 'カスタムモデル', 'LoRA対応', 'コミュニティ'],
    rating: 4.6,
    reviewCount: 7650,
    icon: '🌀',
    featured: false
  },
  {
    id: '9',
    name: 'Leonardo.ai',
    slug: 'leonardo-ai',
    description: 'ゲームアセットやキャラクターデザインに特化した画像生成AI。独自モデルのトレーニングも可能。',
    category: 'image-generation',
    pricing: 'freemium',
    url: 'https://leonardo.ai',
    features: ['ゲームアセット', 'キャラクター生成', 'モデルトレーニング', 'リアルタイム生成', 'API対応'],
    rating: 4.5,
    reviewCount: 4320,
    icon: '🎮',
    featured: false
  },
  {
    id: '10',
    name: 'Canva AI',
    slug: 'canva-ai',
    description: 'デザインツールCanvaのAI機能。画像生成、背景削除、テキスト生成に対応。',
    category: 'image-generation',
    pricing: 'freemium',
    url: 'https://canva.com',
    features: ['デザイン統合', '背景削除', 'テキスト生成', 'テンプレート', 'チーム共有'],
    rating: 4.6,
    reviewCount: 9870,
    icon: '🖌️',
    featured: true
  },

  // コーディング支援AI
  {
    id: '11',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    description: 'AIペアプログラマー。コード補完、関数生成、バグ修正を支援。VS Code、JetBrainsなど主要IDEに対応。',
    category: 'coding',
    pricing: 'paid',
    url: 'https://github.com/features/copilot',
    features: ['コード補完', '関数生成', 'バグ修正', 'ドキュメント生成', 'チャット機能'],
    rating: 4.7,
    reviewCount: 11230,
    icon: '👨‍💻',
    featured: true
  },
  {
    id: '12',
    name: 'Cursor',
    slug: 'cursor',
    description: 'AI搭載のコードエディタ。GPT-4を活用したコード生成と編集が可能。VS Codeベースで使いやすい。',
    category: 'coding',
    pricing: 'freemium',
    url: 'https://cursor.sh',
    features: ['AIエディタ', 'コード生成', 'リファクタリング', 'チャット機能', 'VS Code互換'],
    rating: 4.6,
    reviewCount: 5670,
    icon: '⌨️',
    featured: true
  },
  {
    id: '13',
    name: 'Tabnine',
    slug: 'tabnine',
    description: 'AIコード補完ツール。プライベートコードでのトレーニングに対応し、セキュリティを重視。',
    category: 'coding',
    pricing: 'freemium',
    url: 'https://tabnine.com',
    features: ['コード補完', 'プライベートモデル', 'セキュリティ', '多言語対応', 'IDE統合'],
    rating: 4.4,
    reviewCount: 3890,
    icon: '💻',
    featured: false
  },
  {
    id: '14',
    name: 'Replit AI',
    slug: 'replit-ai',
    description: 'ブラウザベースの開発環境にAI機能を統合。コード生成、デバッグ、説明機能を搭載。',
    category: 'coding',
    pricing: 'freemium',
    url: 'https://replit.com',
    features: ['ブラウザIDE', 'コード生成', 'デバッグ支援', 'デプロイ', 'コラボレーション'],
    rating: 4.3,
    reviewCount: 4560,
    icon: '🔧',
    featured: false
  },
  {
    id: '15',
    name: 'Amazon CodeWhisperer',
    slug: 'amazon-codewhisperer',
    description: 'AWSが提供するAIコーディングアシスタント。AWS連携に強く、セキュリティスキャン機能も搭載。',
    category: 'coding',
    pricing: 'freemium',
    url: 'https://aws.amazon.com/codewhisperer',
    features: ['AWS連携', 'セキュリティスキャン', 'コード補完', '多言語対応', '無料枠あり'],
    rating: 4.2,
    reviewCount: 2340,
    icon: '☁️',
    featured: false
  },

  // 動画生成AI
  {
    id: '16',
    name: 'Runway',
    slug: 'runway',
    description: 'プロ向け動画生成・編集AI。Gen-2でテキストから動画生成、背景削除、モーショントラッキングに対応。',
    category: 'video-generation',
    pricing: 'freemium',
    url: 'https://runway.ml',
    features: ['動画生成', '背景削除', 'モーショントラッキング', 'グリーンスクリーン', 'API対応'],
    rating: 4.6,
    reviewCount: 5430,
    icon: '🎬',
    featured: true
  },
  {
    id: '17',
    name: 'Synthesia',
    slug: 'synthesia',
    description: 'AIアバターによる動画生成プラットフォーム。140以上の言語に対応し、企業研修やマーケティングに最適。',
    category: 'video-generation',
    pricing: 'paid',
    url: 'https://synthesia.io',
    features: ['AIアバター', '多言語対応', 'テンプレート', 'ブランドキット', 'API対応'],
    rating: 4.5,
    reviewCount: 3210,
    icon: '🎭',
    featured: true
  },
  {
    id: '18',
    name: 'HeyGen',
    slug: 'heygen',
    description: 'AIアバター動画生成ツール。リアルなアバターと音声合成で、プレゼンや広告動画を簡単作成。',
    category: 'video-generation',
    pricing: 'freemium',
    url: 'https://heygen.com',
    features: ['AIアバター', '音声合成', 'リップシンク', 'テンプレート', '多言語対応'],
    rating: 4.4,
    reviewCount: 2890,
    icon: '👤',
    featured: false
  },
  {
    id: '19',
    name: 'Pika',
    slug: 'pika',
    description: 'テキストや画像から動画を生成するAI。クリエイティブな動画制作に特化。',
    category: 'video-generation',
    pricing: 'freemium',
    url: 'https://pika.art',
    features: ['テキストto動画', '画像to動画', 'スタイル変換', 'モーション追加', 'コミュニティ'],
    rating: 4.3,
    reviewCount: 1980,
    icon: '⚡',
    featured: false
  },
  {
    id: '20',
    name: 'Lumen5',
    slug: 'lumen5',
    description: 'ブログ記事やテキストから動画を自動生成。マーケティング動画制作を効率化。',
    category: 'video-generation',
    pricing: 'freemium',
    url: 'https://lumen5.com',
    features: ['記事to動画', 'テンプレート', 'ストック素材', 'ブランドキット', 'チーム機能'],
    rating: 4.2,
    reviewCount: 2340,
    icon: '📹',
    featured: false
  },

  // 音声・音楽AI
  {
    id: '21',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    description: '高品質なAI音声合成ツール。自然な音声生成とボイスクローニングに対応。',
    category: 'audio',
    pricing: 'freemium',
    url: 'https://elevenlabs.io',
    features: ['音声合成', 'ボイスクローン', '多言語対応', '感情表現', 'API対応'],
    rating: 4.8,
    reviewCount: 6780,
    icon: '🎙️',
    featured: true
  },
  {
    id: '22',
    name: 'Murf.ai',
    slug: 'murf-ai',
    description: 'ナレーション・吹き替え向けAI音声生成。120以上の声と20言語に対応。',
    category: 'audio',
    pricing: 'freemium',
    url: 'https://murf.ai',
    features: ['ナレーション', '多言語対応', 'ピッチ調整', 'BGM追加', 'チーム機能'],
    rating: 4.5,
    reviewCount: 3450,
    icon: '🔊',
    featured: false
  },
  {
    id: '23',
    name: 'Suno',
    slug: 'suno',
    description: 'テキストから楽曲を生成するAI。歌詞と曲調を指定して、オリジナル音楽を作成。',
    category: 'audio',
    pricing: 'freemium',
    url: 'https://suno.ai',
    features: ['楽曲生成', '歌詞生成', 'ジャンル選択', 'ボーカル生成', 'ダウンロード'],
    rating: 4.6,
    reviewCount: 4560,
    icon: '🎵',
    featured: true
  },
  {
    id: '24',
    name: 'Udio',
    slug: 'udio',
    description: '高品質な音楽生成AI。プロレベルの楽曲をテキストプロンプトから生成。',
    category: 'audio',
    pricing: 'freemium',
    url: 'https://udio.com',
    features: ['音楽生成', '高音質', 'ジャンル多様', 'リミックス', 'コミュニティ'],
    rating: 4.5,
    reviewCount: 2890,
    icon: '🎶',
    featured: false
  },
  {
    id: '25',
    name: 'Descript',
    slug: 'descript',
    description: '音声・動画編集ツール。文字起こし、音声クローン、ポッドキャスト編集に対応。',
    category: 'audio',
    pricing: 'freemium',
    url: 'https://descript.com',
    features: ['文字起こし', '音声編集', '動画編集', 'ポッドキャスト', 'Overdub'],
    rating: 4.4,
    reviewCount: 3210,
    icon: '📻',
    featured: false
  },

  // ビジネス・生産性
  {
    id: '26',
    name: 'Notion AI',
    slug: 'notion-ai',
    description: 'Notionに統合されたAI機能。文章作成、要約、翻訳、ブレインストーミングを支援。',
    category: 'productivity',
    pricing: 'paid',
    url: 'https://notion.so',
    features: ['文章作成', '要約', '翻訳', 'ブレスト', 'Notion統合'],
    rating: 4.6,
    reviewCount: 8970,
    icon: '📝',
    featured: true
  },
  {
    id: '27',
    name: 'Otter.ai',
    slug: 'otter-ai',
    description: '会議の文字起こしと要約を自動化。Zoom、Teams、Meetと連携可能。',
    category: 'productivity',
    pricing: 'freemium',
    url: 'https://otter.ai',
    features: ['文字起こし', '会議要約', 'Zoom連携', 'リアルタイム', '検索機能'],
    rating: 4.5,
    reviewCount: 5670,
    icon: '🦦',
    featured: true
  },
  {
    id: '28',
    name: 'Fireflies.ai',
    slug: 'fireflies-ai',
    description: '会議の記録・文字起こし・分析ツール。アクションアイテムの自動抽出に対応。',
    category: 'productivity',
    pricing: 'freemium',
    url: 'https://fireflies.ai',
    features: ['会議記録', '文字起こし', 'アクション抽出', 'CRM連携', '検索機能'],
    rating: 4.4,
    reviewCount: 3450,
    icon: '🔥',
    featured: false
  },
  {
    id: '29',
    name: 'Grammarly',
    slug: 'grammarly',
    description: 'AI文法チェック・ライティング支援ツール。英文の校正、トーン調整、盗用チェックに対応。',
    category: 'productivity',
    pricing: 'freemium',
    url: 'https://grammarly.com',
    features: ['文法チェック', 'スペルチェック', 'トーン調整', '盗用チェック', 'ブラウザ拡張'],
    rating: 4.7,
    reviewCount: 12340,
    icon: '✅',
    featured: true
  },
  {
    id: '30',
    name: 'Mem',
    slug: 'mem',
    description: 'AI搭載のノートアプリ。自動整理、関連ノート提案、質問応答機能を搭載。',
    category: 'productivity',
    pricing: 'freemium',
    url: 'https://mem.ai',
    features: ['自動整理', '関連提案', 'Q&A機能', '検索', 'チーム共有'],
    rating: 4.3,
    reviewCount: 2340,
    icon: '🧠',
    featured: false
  },

  // マーケティングAI
  {
    id: '31',
    name: 'Surfer SEO',
    slug: 'surfer-seo',
    description: 'AIによるSEOコンテンツ最適化ツール。競合分析、キーワード提案、コンテンツスコアリングに対応。',
    category: 'marketing',
    pricing: 'paid',
    url: 'https://surferseo.com',
    features: ['SEO最適化', '競合分析', 'キーワード提案', 'コンテンツスコア', 'SERP分析'],
    rating: 4.6,
    reviewCount: 4560,
    icon: '🏄',
    featured: true
  },
  {
    id: '32',
    name: 'Semrush',
    slug: 'semrush',
    description: '総合SEO・マーケティングプラットフォーム。AI機能でコンテンツ作成と分析を支援。',
    category: 'marketing',
    pricing: 'paid',
    url: 'https://semrush.com',
    features: ['SEO分析', 'キーワード調査', '競合分析', 'コンテンツAI', 'SNS管理'],
    rating: 4.7,
    reviewCount: 8970,
    icon: '📊',
    featured: true
  },
  {
    id: '33',
    name: 'Writesonic',
    slug: 'writesonic',
    description: 'マーケティングコンテンツ生成AI。ブログ、広告、ランディングページのコピーを自動生成。',
    category: 'marketing',
    pricing: 'freemium',
    url: 'https://writesonic.com',
    features: ['コンテンツ生成', '広告コピー', 'LP作成', 'SEO対応', 'API対応'],
    rating: 4.4,
    reviewCount: 3210,
    icon: '✏️',
    featured: false
  },
  {
    id: '34',
    name: 'Phrasee',
    slug: 'phrasee',
    description: 'メールマーケティング向けAIコピーライティング。件名、本文の最適化で開封率・クリック率を向上。',
    category: 'marketing',
    pricing: 'enterprise',
    url: 'https://phrasee.co',
    features: ['メール最適化', '件名生成', 'A/Bテスト', 'ブランドボイス', 'エンタープライズ'],
    rating: 4.3,
    reviewCount: 1890,
    icon: '📧',
    featured: false
  },
  {
    id: '35',
    name: 'Persado',
    slug: 'persado',
    description: 'エンタープライズ向けAIマーケティングプラットフォーム。感情分析に基づくメッセージ最適化。',
    category: 'marketing',
    pricing: 'enterprise',
    url: 'https://persado.com',
    features: ['感情分析', 'メッセージ最適化', 'A/Bテスト', 'エンタープライズ', '多チャネル'],
    rating: 4.2,
    reviewCount: 1230,
    icon: '💬',
    featured: false
  },

  // デザインAI
  {
    id: '36',
    name: 'Figma AI',
    slug: 'figma-ai',
    description: 'デザインツールFigmaのAI機能。レイアウト提案、コンポーネント生成、プロトタイプ作成を支援。',
    category: 'design',
    pricing: 'freemium',
    url: 'https://figma.com',
    features: ['レイアウト提案', 'コンポーネント生成', 'プロトタイプ', 'コラボレーション', 'プラグイン'],
    rating: 4.8,
    reviewCount: 11230,
    icon: '🎨',
    featured: true
  },
  {
    id: '37',
    name: 'Uizard',
    slug: 'uizard',
    description: 'スケッチやワイヤーフレームからUIデザインを自動生成。非デザイナー向けのAIデザインツール。',
    category: 'design',
    pricing: 'freemium',
    url: 'https://uizard.io',
    features: ['スケッチtoUI', 'ワイヤーフレーム', 'テンプレート', 'プロトタイプ', 'チーム機能'],
    rating: 4.4,
    reviewCount: 2890,
    icon: '📱',
    featured: false
  },
  {
    id: '38',
    name: 'Looka',
    slug: 'looka',
    description: 'AIロゴ生成ツール。ブランド名と好みを入力するだけでプロ品質のロゴを作成。',
    category: 'design',
    pricing: 'paid',
    url: 'https://looka.com',
    features: ['ロゴ生成', 'ブランドキット', '名刺デザイン', 'SNS素材', 'ベクター出力'],
    rating: 4.3,
    reviewCount: 3450,
    icon: '🏷️',
    featured: false
  },
  {
    id: '39',
    name: 'Remove.bg',
    slug: 'remove-bg',
    description: '画像の背景を自動削除するAIツール。ワンクリックで透過PNG作成。',
    category: 'design',
    pricing: 'freemium',
    url: 'https://remove.bg',
    features: ['背景削除', '透過PNG', 'バッチ処理', 'API対応', 'Photoshop連携'],
    rating: 4.7,
    reviewCount: 8970,
    icon: '🖼️',
    featured: true
  },
  {
    id: '40',
    name: 'Khroma',
    slug: 'khroma',
    description: 'AIカラーパレット生成ツール。好みを学習し、無限のカラーコンビネーションを提案。',
    category: 'design',
    pricing: 'free',
    url: 'https://khroma.co',
    features: ['カラーパレット', '好み学習', '無限生成', 'グラデーション', 'エクスポート'],
    rating: 4.2,
    reviewCount: 1890,
    icon: '🎨',
    featured: false
  },

  // リサーチ・分析AI
  {
    id: '41',
    name: 'Perplexity AI',
    slug: 'perplexity-ai',
    description: 'AI検索エンジン。リアルタイムで情報を検索し、ソース付きで回答を生成。',
    category: 'research',
    pricing: 'freemium',
    url: 'https://perplexity.ai',
    features: ['AI検索', 'ソース引用', 'リアルタイム', 'フォローアップ', 'Pro Search'],
    rating: 4.7,
    reviewCount: 6780,
    icon: '🔍',
    featured: true
  },
  {
    id: '42',
    name: 'Elicit',
    slug: 'elicit',
    description: '学術研究向けAIアシスタント。論文検索、要約、データ抽出を自動化。',
    category: 'research',
    pricing: 'freemium',
    url: 'https://elicit.org',
    features: ['論文検索', '要約生成', 'データ抽出', '引用管理', 'ワークフロー'],
    rating: 4.5,
    reviewCount: 3210,
    icon: '📚',
    featured: true
  },
  {
    id: '43',
    name: 'Consensus',
    slug: 'consensus',
    description: '科学論文に特化したAI検索エンジン。研究結果のコンセンサスを可視化。',
    category: 'research',
    pricing: 'freemium',
    url: 'https://consensus.app',
    features: ['論文検索', 'コンセンサス表示', 'エビデンス評価', '要約', 'API対応'],
    rating: 4.4,
    reviewCount: 2340,
    icon: '🔬',
    featured: false
  },
  {
    id: '44',
    name: 'Scite',
    slug: 'scite',
    description: '引用分析AIツール。論文がどのように引用されているかを分析し、信頼性を評価。',
    category: 'research',
    pricing: 'paid',
    url: 'https://scite.ai',
    features: ['引用分析', '信頼性評価', 'スマート引用', 'ブラウザ拡張', 'API対応'],
    rating: 4.3,
    reviewCount: 1890,
    icon: '📖',
    featured: false
  },
  {
    id: '45',
    name: 'Scholarcy',
    slug: 'scholarcy',
    description: '論文・記事の自動要約ツール。フラッシュカード形式で重要ポイントを抽出。',
    category: 'research',
    pricing: 'freemium',
    url: 'https://scholarcy.com',
    features: ['論文要約', 'フラッシュカード', 'キーポイント抽出', 'ブラウザ拡張', 'エクスポート'],
    rating: 4.2,
    reviewCount: 1560,
    icon: '📋',
    featured: false
  },

  // カスタマーサポートAI
  {
    id: '46',
    name: 'Intercom Fin',
    slug: 'intercom-fin',
    description: 'AIカスタマーサポートボット。自然な対話で顧客の問い合わせに自動対応。',
    category: 'customer-support',
    pricing: 'paid',
    url: 'https://intercom.com',
    features: ['AIチャットボット', '自動応答', 'ナレッジベース', '多言語対応', '分析機能'],
    rating: 4.6,
    reviewCount: 5670,
    icon: '💬',
    featured: true
  },
  {
    id: '47',
    name: 'Zendesk AI',
    slug: 'zendesk-ai',
    description: 'カスタマーサービスプラットフォームのAI機能。チケット分類、回答提案、自動化を実現。',
    category: 'customer-support',
    pricing: 'paid',
    url: 'https://zendesk.com',
    features: ['チケット分類', '回答提案', '自動化', '分析', 'オムニチャネル'],
    rating: 4.5,
    reviewCount: 4560,
    icon: '🎧',
    featured: true
  },
  {
    id: '48',
    name: 'Tidio',
    slug: 'tidio',
    description: 'AIチャットボットとライブチャットを統合。中小企業向けのカスタマーサポートツール。',
    category: 'customer-support',
    pricing: 'freemium',
    url: 'https://tidio.com',
    features: ['AIチャットボット', 'ライブチャット', 'メール連携', 'Shopify連携', '分析'],
    rating: 4.4,
    reviewCount: 3210,
    icon: '🤖',
    featured: false
  },
  {
    id: '49',
    name: 'Ada',
    slug: 'ada',
    description: 'エンタープライズ向けAIカスタマーサービスプラットフォーム。自動化率90%以上を実現。',
    category: 'customer-support',
    pricing: 'enterprise',
    url: 'https://ada.cx',
    features: ['高度な自動化', 'マルチチャネル', 'パーソナライズ', '分析', 'API対応'],
    rating: 4.5,
    reviewCount: 2340,
    icon: '🌟',
    featured: false
  },
  {
    id: '50',
    name: 'Drift',
    slug: 'drift',
    description: '会話型マーケティング・セールスプラットフォーム。AIチャットボットでリード獲得を自動化。',
    category: 'customer-support',
    pricing: 'paid',
    url: 'https://drift.com',
    features: ['会話型マーケ', 'リード獲得', 'ミーティング予約', 'CRM連携', 'ABM対応'],
    rating: 4.3,
    reviewCount: 2890,
    icon: '💼',
    featured: false
  },

  // 追加ツール51-100
  { id: '51', name: 'Writesonic', slug: 'writesonic', description: 'AIコンテンツ作成ツール。ブログ、広告、商品説明を自動生成。', category: 'text-generation', pricing: 'freemium', url: 'https://writesonic.com', features: ['ブログ生成', '広告コピー', 'SEO対応'], rating: 4.3, reviewCount: 2890, icon: '✏️', featured: false },
  { id: '52', name: 'Rytr', slug: 'rytr', description: '40以上のユースケースに対応したAIライティングアシスタント。', category: 'text-generation', pricing: 'freemium', url: 'https://rytr.me', features: ['多用途', 'テンプレート', '多言語'], rating: 4.2, reviewCount: 2340, icon: '📄', featured: false },
  { id: '53', name: 'Wordtune', slug: 'wordtune', description: '文章のリライトと改善に特化したAIツール。', category: 'text-generation', pricing: 'freemium', url: 'https://wordtune.com', features: ['リライト', 'トーン調整', 'ブラウザ拡張'], rating: 4.4, reviewCount: 3120, icon: '🔄', featured: false },
  { id: '54', name: 'Anyword', slug: 'anyword', description: 'マーケティングコピーに特化したAI。パフォーマンス予測機能付き。', category: 'text-generation', pricing: 'paid', url: 'https://anyword.com', features: ['コピー生成', '予測スコア', 'A/Bテスト'], rating: 4.3, reviewCount: 1890, icon: '📊', featured: false },
  { id: '55', name: 'Ideogram', slug: 'ideogram', description: 'テキスト描画に強い画像生成AI。ロゴやポスター制作に最適。', category: 'image-generation', pricing: 'freemium', url: 'https://ideogram.ai', features: ['テキスト描画', 'ロゴ生成', '高品質'], rating: 4.5, reviewCount: 4560, icon: '🎯', featured: false },
  { id: '56', name: 'Playground AI', slug: 'playground-ai', description: '無料で使える画像生成AI。多様なモデルを選択可能。', category: 'image-generation', pricing: 'freemium', url: 'https://playground.ai', features: ['無料枠大', 'モデル選択', 'コミュニティ'], rating: 4.3, reviewCount: 3450, icon: '🎪', featured: false },
  { id: '57', name: 'NightCafe', slug: 'nightcafe', description: 'アート生成に特化したAI。複数のアルゴリズムを搭載。', category: 'image-generation', pricing: 'freemium', url: 'https://nightcafe.studio', features: ['アート生成', '複数モデル', 'コミュニティ'], rating: 4.2, reviewCount: 2890, icon: '🌙', featured: false },
  { id: '58', name: 'Clipdrop', slug: 'clipdrop', description: 'Stability AI提供の画像編集ツール群。背景削除、拡張など。', category: 'image-generation', pricing: 'freemium', url: 'https://clipdrop.co', features: ['背景削除', '画像拡張', 'リライト'], rating: 4.4, reviewCount: 3210, icon: '✂️', featured: false },
  { id: '59', name: 'Codeium', slug: 'codeium', description: '無料のAIコード補完ツール。70以上の言語に対応。', category: 'coding', pricing: 'free', url: 'https://codeium.com', features: ['無料', '70言語対応', 'IDE統合'], rating: 4.5, reviewCount: 4560, icon: '⚡', featured: false },
  { id: '60', name: 'Sourcegraph Cody', slug: 'sourcegraph-cody', description: 'コードベース全体を理解するAIアシスタント。', category: 'coding', pricing: 'freemium', url: 'https://sourcegraph.com/cody', features: ['コード理解', '検索', 'リファクタ'], rating: 4.3, reviewCount: 2340, icon: '🔎', featured: false },
  { id: '61', name: 'Pieces', slug: 'pieces', description: 'コードスニペット管理とAI支援を統合したツール。', category: 'coding', pricing: 'freemium', url: 'https://pieces.app', features: ['スニペット管理', 'AI補完', 'オフライン'], rating: 4.2, reviewCount: 1890, icon: '🧩', featured: false },
  { id: '62', name: 'Blackbox AI', slug: 'blackbox-ai', description: 'コード生成と検索に特化したAIツール。', category: 'coding', pricing: 'freemium', url: 'https://blackbox.ai', features: ['コード検索', '生成', 'ブラウザ拡張'], rating: 4.1, reviewCount: 2120, icon: '⬛', featured: false },
  { id: '63', name: 'Kapwing', slug: 'kapwing', description: 'AI搭載のオンライン動画編集ツール。字幕自動生成など。', category: 'video-generation', pricing: 'freemium', url: 'https://kapwing.com', features: ['字幕生成', 'リサイズ', 'テンプレート'], rating: 4.4, reviewCount: 5670, icon: '🎥', featured: false },
  { id: '64', name: 'InVideo', slug: 'invideo', description: 'テンプレートベースのAI動画作成ツール。', category: 'video-generation', pricing: 'freemium', url: 'https://invideo.io', features: ['テンプレート', 'テキストto動画', 'ストック素材'], rating: 4.3, reviewCount: 4320, icon: '📽️', featured: false },
  { id: '65', name: 'Pictory', slug: 'pictory', description: 'ブログ記事から動画を自動生成するAI。', category: 'video-generation', pricing: 'paid', url: 'https://pictory.ai', features: ['記事to動画', '自動編集', 'ブランディング'], rating: 4.2, reviewCount: 2890, icon: '🖼️', featured: false },
  { id: '66', name: 'Fliki', slug: 'fliki', description: 'テキストから動画と音声を生成するAI。', category: 'video-generation', pricing: 'freemium', url: 'https://fliki.ai', features: ['テキストto動画', '音声合成', '多言語'], rating: 4.3, reviewCount: 3210, icon: '🎞️', featured: false },
  { id: '67', name: 'Resemble AI', slug: 'resemble-ai', description: 'カスタム音声クローンを作成できるAI。', category: 'audio', pricing: 'paid', url: 'https://resemble.ai', features: ['音声クローン', 'API', 'リアルタイム'], rating: 4.4, reviewCount: 2340, icon: '🎤', featured: false },
  { id: '68', name: 'Play.ht', slug: 'play-ht', description: '高品質なAI音声合成サービス。900以上の声。', category: 'audio', pricing: 'freemium', url: 'https://play.ht', features: ['900+声', '多言語', 'API'], rating: 4.3, reviewCount: 3120, icon: '▶️', featured: false },
  { id: '69', name: 'Speechify', slug: 'speechify', description: 'テキスト読み上げアプリ。学習や読書に最適。', category: 'audio', pricing: 'freemium', url: 'https://speechify.com', features: ['読み上げ', 'OCR', 'ブラウザ拡張'], rating: 4.5, reviewCount: 6780, icon: '📖', featured: false },
  { id: '70', name: 'AIVA', slug: 'aiva', description: 'AI作曲ツール。映画、ゲーム、広告向け音楽を生成。', category: 'audio', pricing: 'freemium', url: 'https://aiva.ai', features: ['作曲', 'カスタマイズ', '商用利用'], rating: 4.2, reviewCount: 2890, icon: '🎼', featured: false },
  { id: '71', name: 'Taskade', slug: 'taskade', description: 'AI搭載のプロジェクト管理・コラボレーションツール。', category: 'productivity', pricing: 'freemium', url: 'https://taskade.com', features: ['タスク管理', 'AI生成', 'リアルタイム'], rating: 4.4, reviewCount: 3450, icon: '✅', featured: false },
  { id: '72', name: 'Coda AI', slug: 'coda-ai', description: 'ドキュメントとスプレッドシートを統合したAIツール。', category: 'productivity', pricing: 'freemium', url: 'https://coda.io', features: ['ドキュメント', '自動化', 'AI支援'], rating: 4.3, reviewCount: 2890, icon: '📑', featured: false },
  { id: '73', name: 'Reclaim AI', slug: 'reclaim-ai', description: 'AIスケジュール最適化ツール。カレンダー管理を自動化。', category: 'productivity', pricing: 'freemium', url: 'https://reclaim.ai', features: ['スケジュール', '自動調整', 'Google連携'], rating: 4.5, reviewCount: 2340, icon: '📅', featured: false },
  { id: '74', name: 'Superhuman', slug: 'superhuman', description: 'AI搭載の高速メールクライアント。', category: 'productivity', pricing: 'paid', url: 'https://superhuman.com', features: ['高速', 'AI返信', 'ショートカット'], rating: 4.6, reviewCount: 4560, icon: '📧', featured: false },
  { id: '75', name: 'Clearscope', slug: 'clearscope', description: 'SEOコンテンツ最適化プラットフォーム。', category: 'marketing', pricing: 'paid', url: 'https://clearscope.io', features: ['SEO分析', 'キーワード', 'コンテンツスコア'], rating: 4.5, reviewCount: 2340, icon: '🎯', featured: false },
  { id: '76', name: 'MarketMuse', slug: 'marketmuse', description: 'AIコンテンツ戦略・最適化プラットフォーム。', category: 'marketing', pricing: 'paid', url: 'https://marketmuse.com', features: ['コンテンツ戦略', '競合分析', 'AI提案'], rating: 4.3, reviewCount: 1890, icon: '📈', featured: false },
  { id: '77', name: 'Frase', slug: 'frase', description: 'SEOリサーチとコンテンツ作成を統合したAI。', category: 'marketing', pricing: 'paid', url: 'https://frase.io', features: ['SEOリサーチ', 'アウトライン', 'AI執筆'], rating: 4.4, reviewCount: 2890, icon: '🔍', featured: false },
  { id: '78', name: 'Lately', slug: 'lately', description: '長文コンテンツからSNS投稿を自動生成するAI。', category: 'marketing', pricing: 'paid', url: 'https://lately.ai', features: ['SNS生成', '分析', 'スケジュール'], rating: 4.2, reviewCount: 1560, icon: '📱', featured: false },
  { id: '79', name: 'Framer', slug: 'framer', description: 'AI搭載のノーコードWebサイトビルダー。', category: 'design', pricing: 'freemium', url: 'https://framer.com', features: ['ノーコード', 'AI生成', 'アニメーション'], rating: 4.6, reviewCount: 5670, icon: '🖥️', featured: false },
  { id: '80', name: 'Galileo AI', slug: 'galileo-ai', description: 'テキストからUIデザインを生成するAI。', category: 'design', pricing: 'paid', url: 'https://galileo.ai', features: ['UI生成', 'Figma連携', '高品質'], rating: 4.4, reviewCount: 2340, icon: '🎨', featured: false },
  { id: '81', name: 'Magician', slug: 'magician', description: 'Figma用AIデザインアシスタント。', category: 'design', pricing: 'paid', url: 'https://magician.design', features: ['Figmaプラグイン', 'アイコン生成', 'コピー'], rating: 4.3, reviewCount: 1890, icon: '🪄', featured: false },
  { id: '82', name: 'Fontjoy', slug: 'fontjoy', description: 'AIによるフォントペアリング提案ツール。', category: 'design', pricing: 'free', url: 'https://fontjoy.com', features: ['フォント提案', '無料', 'シンプル'], rating: 4.2, reviewCount: 3210, icon: '🔤', featured: false },
  { id: '83', name: 'Connected Papers', slug: 'connected-papers', description: '論文の関連性を視覚化するツール。', category: 'research', pricing: 'freemium', url: 'https://connectedpapers.com', features: ['論文可視化', '関連発見', '無料枠'], rating: 4.4, reviewCount: 2890, icon: '🕸️', featured: false },
  { id: '84', name: 'Semantic Scholar', slug: 'semantic-scholar', description: 'AI搭載の学術論文検索エンジン。', category: 'research', pricing: 'free', url: 'https://semanticscholar.org', features: ['論文検索', 'AI要約', '引用分析'], rating: 4.5, reviewCount: 4560, icon: '🎓', featured: false },
  { id: '85', name: 'Research Rabbit', slug: 'research-rabbit', description: '論文発見と整理を支援するAIツール。', category: 'research', pricing: 'free', url: 'https://researchrabbit.ai', features: ['論文発見', 'コレクション', '無料'], rating: 4.3, reviewCount: 2340, icon: '🐰', featured: false },
  { id: '86', name: 'Iris AI', slug: 'iris-ai', description: '研究者向けAIリサーチアシスタント。', category: 'research', pricing: 'paid', url: 'https://iris.ai', features: ['文献レビュー', 'データ抽出', 'ワークスペース'], rating: 4.2, reviewCount: 1560, icon: '👁️', featured: false },
  { id: '87', name: 'Freshdesk', slug: 'freshdesk', description: 'AI搭載のヘルプデスクソフトウェア。', category: 'customer-support', pricing: 'freemium', url: 'https://freshdesk.com', features: ['チケット管理', 'AI自動化', 'オムニチャネル'], rating: 4.4, reviewCount: 5670, icon: '🎫', featured: false },
  { id: '88', name: 'Help Scout', slug: 'help-scout', description: 'シンプルで使いやすいAIカスタマーサポート。', category: 'customer-support', pricing: 'paid', url: 'https://helpscout.com', features: ['共有受信箱', 'AI返信', 'ナレッジベース'], rating: 4.5, reviewCount: 3450, icon: '🦮', featured: false },
  { id: '89', name: 'Kustomer', slug: 'kustomer', description: 'AIファーストのCRMカスタマーサービス。', category: 'customer-support', pricing: 'enterprise', url: 'https://kustomer.com', features: ['CRM統合', 'AI自動化', 'オムニチャネル'], rating: 4.3, reviewCount: 2120, icon: '👥', featured: false },
  { id: '90', name: 'Gorgias', slug: 'gorgias', description: 'Eコマース向けAIカスタマーサポート。', category: 'customer-support', pricing: 'paid', url: 'https://gorgias.com', features: ['Shopify連携', 'AI返信', 'マクロ'], rating: 4.4, reviewCount: 3890, icon: '🛒', featured: false },
  { id: '91', name: 'Tome', slug: 'tome', description: 'AIプレゼンテーション作成ツール。', category: 'productivity', pricing: 'freemium', url: 'https://tome.app', features: ['スライド生成', 'AI画像', 'コラボ'], rating: 4.3, reviewCount: 4560, icon: '📊', featured: false },
  { id: '92', name: 'Beautiful.ai', slug: 'beautiful-ai', description: 'AIデザインのプレゼンテーションツール。', category: 'productivity', pricing: 'paid', url: 'https://beautiful.ai', features: ['自動デザイン', 'テンプレート', 'チーム'], rating: 4.4, reviewCount: 3210, icon: '✨', featured: false },
  { id: '93', name: 'Gamma', slug: 'gamma', description: 'AIでドキュメント・スライドを生成。', category: 'productivity', pricing: 'freemium', url: 'https://gamma.app', features: ['ドキュメント', 'スライド', 'AI生成'], rating: 4.5, reviewCount: 5670, icon: '🌈', featured: false },
  { id: '94', name: 'Krisp', slug: 'krisp', description: 'AIノイズキャンセリングアプリ。', category: 'audio', pricing: 'freemium', url: 'https://krisp.ai', features: ['ノイズ除去', '会議録音', '文字起こし'], rating: 4.6, reviewCount: 6780, icon: '🔇', featured: false },
  { id: '95', name: 'Podcastle', slug: 'podcastle', description: 'AIポッドキャスト制作プラットフォーム。', category: 'audio', pricing: 'freemium', url: 'https://podcastle.ai', features: ['録音', '編集', 'AI音声'], rating: 4.3, reviewCount: 2890, icon: '🎧', featured: false },
  { id: '96', name: 'Krea AI', slug: 'krea-ai', description: 'リアルタイム画像生成・編集AI。', category: 'image-generation', pricing: 'freemium', url: 'https://krea.ai', features: ['リアルタイム', '編集', 'アップスケール'], rating: 4.4, reviewCount: 3450, icon: '⚡', featured: false },
  { id: '97', name: 'Photoroom', slug: 'photoroom', description: '商品写真編集に特化したAIツール。', category: 'image-generation', pricing: 'freemium', url: 'https://photoroom.com', features: ['背景削除', '商品写真', 'バッチ処理'], rating: 4.5, reviewCount: 5670, icon: '📸', featured: false },
  { id: '98', name: 'Pixlr', slug: 'pixlr', description: 'AI搭載のオンライン画像編集ツール。', category: 'image-generation', pricing: 'freemium', url: 'https://pixlr.com', features: ['画像編集', 'AI機能', '無料'], rating: 4.2, reviewCount: 4320, icon: '🖌️', featured: false },
  { id: '99', name: 'Veed.io', slug: 'veed-io', description: 'AI搭載のオンライン動画編集ツール。', category: 'video-generation', pricing: 'freemium', url: 'https://veed.io', features: ['字幕', '翻訳', 'AI編集'], rating: 4.4, reviewCount: 6780, icon: '🎬', featured: false },
  { id: '100', name: 'Descript', slug: 'descript-video', description: 'テキスト編集で動画を編集できるAI。', category: 'video-generation', pricing: 'freemium', url: 'https://descript.com', features: ['テキスト編集', '文字起こし', 'Overdub'], rating: 4.5, reviewCount: 5670, icon: '📝', featured: false }
];

// カテゴリ定義
export const categories = [
  { id: 'text-generation', name: '文章生成AI', icon: '✍️', count: 9 },
  { id: 'image-generation', name: '画像生成AI', icon: '🎨', count: 12 },
  { id: 'coding', name: 'コーディング支援AI', icon: '💻', count: 9 },
  { id: 'video-generation', name: '動画生成AI', icon: '🎬', count: 11 },
  { id: 'audio', name: '音声・音楽AI', icon: '🎵', count: 10 },
  { id: 'productivity', name: 'ビジネス・生産性', icon: '💼', count: 12 },
  { id: 'marketing', name: 'マーケティングAI', icon: '📈', count: 9 },
  { id: 'design', name: 'デザインAI', icon: '🖌️', count: 9 },
  { id: 'research', name: 'リサーチ・分析AI', icon: '🔍', count: 9 },
  { id: 'customer-support', name: 'カスタマーサポートAI', icon: '💬', count: 10 }];

// ヘルパー関数
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(tool => tool.category === categoryId);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter(tool => tool.featured);
}

export function searchTools(query: string): Tool[] {
  const lowerQuery = query.toLowerCase();
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.features.some(f => f.toLowerCase().includes(lowerQuery))
  );
}
