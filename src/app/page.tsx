import Link from 'next/link';

// 仮のカテゴリデータ（後でSupabaseから取得）
const categories = [
  { slug: 'text-generation', name: '文章生成AI', icon: '✍️', count: 25 },
  { slug: 'image-generation', name: '画像生成AI', icon: '🎨', count: 18 },
  { slug: 'video-generation', name: '動画生成AI', icon: '🎬', count: 12 },
  { slug: 'audio-music', name: '音声・音楽AI', icon: '🎵', count: 15 },
  { slug: 'coding', name: 'コーディング支援AI', icon: '💻', count: 20 },
  { slug: 'marketing', name: 'マーケティングAI', icon: '📈', count: 14 },
  { slug: 'seo-content', name: 'SEO・コンテンツAI', icon: '🔍', count: 16 },
  { slug: 'productivity', name: 'ビジネス・生産性', icon: '💼', count: 22 },
];

// 仮の注目ツールデータ
const featuredTools = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAIが開発した対話型AI。文章生成、質問応答、コード作成など幅広いタスクに対応。',
    category: '文章生成AI',
    pricing: 'freemium',
    logo: '🤖',
  },
  {
    slug: 'midjourney',
    name: 'Midjourney',
    description: 'テキストから高品質な画像を生成するAI。アート、デザイン、イラスト制作に最適。',
    category: '画像生成AI',
    pricing: 'paid',
    logo: '🎨',
  },
  {
    slug: 'claude',
    name: 'Claude',
    description: 'Anthropicが開発した安全性を重視した対話型AI。長文処理と分析に優れる。',
    category: '文章生成AI',
    pricing: 'freemium',
    logo: '🧠',
  },
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AIペアプログラマー。コード補完、関数生成、バグ修正を支援。',
    category: 'コーディング支援AI',
    pricing: 'paid',
    logo: '👨‍💻',
  },
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    description: 'Notionに統合されたAI機能。文章作成、要約、翻訳、ブレインストーミングを支援。',
    category: 'ビジネス・生産性',
    pricing: 'paid',
    logo: '📝',
  },
  {
    slug: 'canva-ai',
    name: 'Canva AI',
    description: 'デザインツールCanvaのAI機能。画像生成、背景削除、テキスト生成に対応。',
    category: 'デザインAI',
    pricing: 'freemium',
    logo: '🖼️',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                🚀 AIツールナビ
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/tools" className="text-gray-700 hover:text-indigo-600 transition">
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
            <div className="flex items-center space-x-4">
              <Link
                href="/submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                無料で掲載
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            あなたに最適な<span className="text-indigo-600">AIツール</span>を見つけよう
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            2,000以上のAIツールを日本語で検索・比較。
            <br />
            ビジネスや創作活動を加速させるツールがきっと見つかります。
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-lg p-2">
              <input
                type="text"
                placeholder="AIツールを検索..."
                className="flex-1 px-6 py-3 text-lg focus:outline-none rounded-full"
              />
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition">
                検索
              </button>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-gray-500">人気の検索:</span>
            {['ChatGPT', '画像生成', 'コード補完', '翻訳', '動画編集'].map((tag) => (
              <Link
                key={tag}
                href={`/tools?search=${tag}`}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* カテゴリセクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">カテゴリから探す</h2>
            <p className="text-gray-600">目的に合わせてAIツールを見つけましょう</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/tools?category=${category.slug}`}
                className="bg-gray-50 rounded-xl p-6 hover:bg-indigo-50 hover:shadow-md transition group"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.count}件のツール</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/categories"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              すべてのカテゴリを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 注目ツールセクション */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">注目のAIツール</h2>
            <p className="text-gray-600">今話題のAIツールをピックアップ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{tool.logo}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                        {tool.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
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
                    <p className="text-sm text-gray-500 mb-2">{tool.category}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{tool.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/tools"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              すべてのツールを見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            あなたのAIツールを掲載しませんか？
          </h2>
          <p className="text-indigo-100 mb-8">
            月間10万人以上のユーザーにあなたのツールをアピールできます。
            <br />
            無料プランから始められます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              無料で掲載申請
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              料金プランを見る
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">🚀 AIツールナビ</h3>
              <p className="text-sm">
                日本最大級のAIツールディレクトリ。
                あなたに最適なAIツールを見つけましょう。
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">カテゴリ</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/tools?category=text-generation" className="hover:text-white transition">文章生成AI</Link></li>
                <li><Link href="/tools?category=image-generation" className="hover:text-white transition">画像生成AI</Link></li>
                <li><Link href="/tools?category=coding" className="hover:text-white transition">コーディング支援AI</Link></li>
                <li><Link href="/tools?category=productivity" className="hover:text-white transition">ビジネス・生産性</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">サイト</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">サイトについて</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">ブログ</Link></li>
                <li><Link href="/submit" className="hover:text-white transition">ツール掲載</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">料金プラン</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">法的情報</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">プライバシーポリシー</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">利用規約</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2026 AIツールナビ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
