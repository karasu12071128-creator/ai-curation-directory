import Link from 'next/link';

// 仮のツールデータ
const tools = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAIが開発した対話型AI。文章生成、質問応答、コード作成など幅広いタスクに対応。GPT-4を搭載し、高度な推論能力を持つ。',
    category: '文章生成AI',
    categorySlug: 'text-generation',
    pricing: 'freemium',
    logo: '🤖',
    tags: ['対話AI', '文章生成', 'コード生成'],
  },
  {
    slug: 'claude',
    name: 'Claude',
    description: 'Anthropicが開発した安全性を重視した対話型AI。長文処理と分析に優れ、最大100Kトークンのコンテキストに対応。',
    category: '文章生成AI',
    categorySlug: 'text-generation',
    pricing: 'freemium',
    logo: '🧠',
    tags: ['対話AI', '長文処理', '分析'],
  },
  {
    slug: 'midjourney',
    name: 'Midjourney',
    description: 'テキストから高品質な画像を生成するAI。アート、デザイン、イラスト制作に最適。Discord経由で利用可能。',
    category: '画像生成AI',
    categorySlug: 'image-generation',
    pricing: 'paid',
    logo: '🎨',
    tags: ['画像生成', 'アート', 'デザイン'],
  },
  {
    slug: 'dall-e-3',
    name: 'DALL-E 3',
    description: 'OpenAIの最新画像生成AI。ChatGPTと統合され、自然言語での指示から高精度な画像を生成。',
    category: '画像生成AI',
    categorySlug: 'image-generation',
    pricing: 'paid',
    logo: '🖼️',
    tags: ['画像生成', 'OpenAI', 'ChatGPT連携'],
  },
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AIペアプログラマー。コード補完、関数生成、バグ修正を支援。VS Code、JetBrains等の主要IDEに対応。',
    category: 'コーディング支援AI',
    categorySlug: 'coding',
    pricing: 'paid',
    logo: '👨‍💻',
    tags: ['コード補完', 'プログラミング', 'IDE'],
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    description: 'AI搭載のコードエディタ。GPT-4を活用したコード生成、リファクタリング、デバッグ支援機能を提供。',
    category: 'コーディング支援AI',
    categorySlug: 'coding',
    pricing: 'freemium',
    logo: '⌨️',
    tags: ['コードエディタ', 'AI IDE', 'GPT-4'],
  },
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    description: 'Notionに統合されたAI機能。文章作成、要約、翻訳、ブレインストーミングを支援。ワークスペース内で直接利用可能。',
    category: 'ビジネス・生産性',
    categorySlug: 'productivity',
    pricing: 'paid',
    logo: '📝',
    tags: ['生産性', 'ドキュメント', 'ワークスペース'],
  },
  {
    slug: 'canva-ai',
    name: 'Canva AI',
    description: 'デザインツールCanvaのAI機能。Magic Write、画像生成、背景削除、テキスト生成に対応。',
    category: 'デザインAI',
    categorySlug: 'design',
    pricing: 'freemium',
    logo: '🎭',
    tags: ['デザイン', '画像編集', 'テンプレート'],
  },
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    description: '高品質な音声合成AI。多言語対応、感情表現、声のクローニング機能を提供。ナレーション、オーディオブック制作に最適。',
    category: '音声・音楽AI',
    categorySlug: 'audio-music',
    pricing: 'freemium',
    logo: '🎙️',
    tags: ['音声合成', 'TTS', 'ナレーション'],
  },
  {
    slug: 'runway',
    name: 'Runway',
    description: '動画生成・編集AI。Gen-2による動画生成、グリーンスクリーン不要の背景除去、モーショントラッキング機能を提供。',
    category: '動画生成AI',
    categorySlug: 'video-generation',
    pricing: 'freemium',
    logo: '🎬',
    tags: ['動画生成', '動画編集', 'VFX'],
  },
  {
    slug: 'jasper',
    name: 'Jasper',
    description: 'マーケティング特化のAIライティングツール。広告コピー、ブログ記事、SNS投稿の作成を支援。',
    category: 'マーケティングAI',
    categorySlug: 'marketing',
    pricing: 'paid',
    logo: '📣',
    tags: ['コピーライティング', 'マーケティング', 'コンテンツ'],
  },
  {
    slug: 'surfer-seo',
    name: 'Surfer SEO',
    description: 'AI搭載のSEO最適化ツール。コンテンツエディター、キーワード分析、競合分析機能を提供。',
    category: 'SEO・コンテンツAI',
    categorySlug: 'seo-content',
    pricing: 'paid',
    logo: '🔍',
    tags: ['SEO', 'コンテンツ最適化', 'キーワード'],
  },
];

const categories = [
  { slug: 'all', name: 'すべて' },
  { slug: 'text-generation', name: '文章生成AI' },
  { slug: 'image-generation', name: '画像生成AI' },
  { slug: 'video-generation', name: '動画生成AI' },
  { slug: 'audio-music', name: '音声・音楽AI' },
  { slug: 'coding', name: 'コーディング支援AI' },
  { slug: 'marketing', name: 'マーケティングAI' },
  { slug: 'seo-content', name: 'SEO・コンテンツAI' },
  { slug: 'design', name: 'デザインAI' },
  { slug: 'productivity', name: 'ビジネス・生産性' },
];

const pricingFilters = [
  { value: 'all', label: 'すべて' },
  { value: 'free', label: '無料' },
  { value: 'freemium', label: 'フリーミアム' },
  { value: 'paid', label: '有料' },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              🚀 AIツールナビ
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/tools" className="text-indigo-600 font-medium">
                ツール一覧
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-indigo-600 transition">
                カテゴリ
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition">
                ブログ
              </Link>
              <Link href="/submit" className="text-gray-700 hover:text-indigo-600 transition">
                ツール掲載
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ページタイトル */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AIツール一覧</h1>
          <p className="text-gray-600">2,000以上のAIツールから最適なものを見つけましょう</p>
        </div>

        {/* フィルターセクション */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* 検索 */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">検索</label>
              <input
                type="text"
                placeholder="ツール名やキーワードで検索..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* カテゴリフィルター */}
            <div className="w-full lg:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">カテゴリ</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 料金フィルター */}
            <div className="w-full lg:w-40">
              <label className="block text-sm font-medium text-gray-700 mb-2">料金</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                {pricingFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ツール一覧 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{tool.logo}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition truncate">
                      {tool.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                        tool.pricing === 'free'
                          ? 'bg-green-100 text-green-700'
                          : tool.pricing === 'freemium'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {tool.pricing === 'free' ? '無料' : tool.pricing === 'freemium' ? 'フリーミアム' : '有料'}
                    </span>
                  </div>
                  <p className="text-sm text-indigo-600 mb-2">{tool.category}</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{tool.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ページネーション */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
              前へ
            </button>
            <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg">1</button>
            <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
            <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">10</button>
            <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              次へ
            </button>
          </nav>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">© 2026 AIツールナビ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
