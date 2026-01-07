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
  }
];

// カテゴリ定義
export const categories = [
  { id: 'text-generation', name: '文章生成AI', icon: '✍️', count: 5 },
  { id: 'image-generation', name: '画像生成AI', icon: '🎨', count: 5 },
  { id: 'coding', name: 'コーディング支援AI', icon: '💻', count: 5 },
  { id: 'video-generation', name: '動画生成AI', icon: '🎬', count: 5 },
  { id: 'audio', name: '音声・音楽AI', icon: '🎵', count: 5 },
  { id: 'productivity', name: 'ビジネス・生産性', icon: '💼', count: 5 },
  { id: 'marketing', name: 'マーケティングAI', icon: '📈', count: 5 },
  { id: 'design', name: 'デザインAI', icon: '🖌️', count: 5 },
  { id: 'research', name: 'リサーチ・分析AI', icon: '🔍', count: 5 },
  { id: 'customer-support', name: 'カスタマーサポートAI', icon: '💬', count: 5 }
];

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
