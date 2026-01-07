import Link from 'next/link';

// 仮のツールデータ（後でSupabaseから取得）
const toolData = {
  slug: 'chatgpt',
  name: 'ChatGPT',
  description: `ChatGPTは、OpenAIが開発した大規模言語モデル（LLM）を基盤とした対話型AIアシスタントです。

## 主な特徴

- **自然な対話**: 人間のような自然な会話が可能
- **多言語対応**: 日本語を含む多数の言語に対応
- **コード生成**: プログラミングコードの作成・デバッグ支援
- **文章作成**: ブログ記事、メール、レポートなどの文章生成
- **翻訳・要約**: 長文の要約や多言語翻訳

## 料金プラン

| プラン | 価格 | 特徴 |
|--------|------|------|
| Free | 無料 | GPT-3.5、基本機能 |
| Plus | $20/月 | GPT-4、優先アクセス |
| Team | $25/月/人 | チーム機能、管理機能 |
| Enterprise | 要問合せ | カスタム、セキュリティ強化 |

## 使用例

1. 文章の校正・リライト
2. アイデアのブレインストーミング
3. プログラミングの学習・デバッグ
4. 外国語の翻訳・学習
5. データ分析・レポート作成`,
  short_description: 'OpenAIが開発した対話型AI。文章生成、質問応答、コード作成など幅広いタスクに対応。',
  website_url: 'https://chat.openai.com',
  affiliate_url: 'https://chat.openai.com',
  logo: '🤖',
  category: '文章生成AI',
  categorySlug: 'text-generation',
  pricing: 'freemium',
  pricing_details: '無料プランあり。Plus: $20/月、Team: $25/月/人',
  features: [
    'GPT-4対応',
    '多言語サポート',
    'コード生成',
    'プラグイン対応',
    'API利用可能',
    'モバイルアプリ',
  ],
  tags: ['対話AI', '文章生成', 'コード生成', 'OpenAI', 'GPT-4'],
  rating: 4.8,
  review_count: 1250,
};

const relatedTools = [
  { slug: 'claude', name: 'Claude', logo: '🧠', category: '文章生成AI' },
  { slug: 'gemini', name: 'Gemini', logo: '✨', category: '文章生成AI' },
  { slug: 'perplexity', name: 'Perplexity', logo: '🔮', category: '文章生成AI' },
];

export default function ToolDetailPage() {
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
              <Link href="/tools" className="text-gray-700 hover:text-indigo-600 transition">
                ツール一覧
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-indigo-600 transition">
                カテゴリ
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition">
                ブログ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* パンくずリスト */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-indigo-600">ホーム</Link></li>
            <li>/</li>
            <li><Link href="/tools" className="hover:text-indigo-600">ツール一覧</Link></li>
            <li>/</li>
            <li><Link href={`/tools?category=${toolData.categorySlug}`} className="hover:text-indigo-600">{toolData.category}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{toolData.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* メインコンテンツ */}
          <div className="lg:col-span-2">
            {/* ツール情報ヘッダー */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <div className="flex items-start gap-6">
                <div className="text-6xl">{toolData.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{toolData.name}</h1>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        toolData.pricing === 'free'
                          ? 'bg-green-100 text-green-700'
                          : toolData.pricing === 'freemium'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {toolData.pricing === 'free' ? '無料' : toolData.pricing === 'freemium' ? 'フリーミアム' : '有料'}
                    </span>
                  </div>
                  <Link
                    href={`/tools?category=${toolData.categorySlug}`}
                    className="text-indigo-600 hover:text-indigo-700 text-sm mb-3 inline-block"
                  >
                    {toolData.category}
                  </Link>
                  <p className="text-gray-600 mb-4">{toolData.short_description}</p>
                  
                  {/* 評価 */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-lg">★★★★★</span>
                      <span className="ml-2 font-semibold">{toolData.rating}</span>
                      <span className="text-gray-500 ml-1">({toolData.review_count}件のレビュー)</span>
                    </div>
                  </div>

                  {/* CTAボタン */}
                  <div className="flex gap-4">
                    <a
                      href={toolData.affiliate_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                      公式サイトへ →
                    </a>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                      比較リストに追加
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 詳細説明 */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">詳細説明</h2>
              <div className="prose prose-indigo max-w-none">
                <div className="whitespace-pre-wrap text-gray-700">{toolData.description}</div>
              </div>
            </div>

            {/* 機能一覧 */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">主な機能</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {toolData.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* サイドバー */}
          <div className="lg:col-span-1">
            {/* 料金情報 */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">料金情報</h3>
              <p className="text-gray-600 text-sm mb-4">{toolData.pricing_details}</p>
              <a
                href={toolData.affiliate_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                料金プランを見る
              </a>
            </div>

            {/* タグ */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">タグ</h3>
              <div className="flex flex-wrap gap-2">
                {toolData.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tools?tag=${tag}`}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 transition"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* 関連ツール */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">関連ツール</h3>
              <div className="space-y-4">
                {relatedTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                  >
                    <span className="text-2xl">{tool.logo}</span>
                    <div>
                      <p className="font-medium text-gray-900">{tool.name}</p>
                      <p className="text-sm text-gray-500">{tool.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
