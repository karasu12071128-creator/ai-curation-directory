import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { tools, categories, getToolBySlug } from '@/data/tools';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  
  if (!tool) {
    return {
      title: 'ツールが見つかりません',
    };
  }

  return {
    title: `${tool.name} - 機能・料金・評判`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} | AIツールナビ`,
      description: tool.description,
    },
  };
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const category = categories.find(c => c.id === tool.category);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-xl text-gray-900">AIツールナビ</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/tools" className="text-gray-600 hover:text-gray-900">ツール一覧</Link>
              <Link href="/categories" className="text-gray-600 hover:text-gray-900">カテゴリ</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">ブログ</Link>
              <Link href="/submit" className="text-gray-600 hover:text-gray-900">ツール掲載</Link>
            </nav>
            <Link 
              href="/submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              無料で掲載
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/tools" className="hover:text-blue-600">ツール一覧</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{tool.name}</span>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tool Header */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-start gap-6">
                <span className="text-6xl">{tool.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      tool.pricing === 'free' ? 'bg-green-100 text-green-700' :
                      tool.pricing === 'freemium' ? 'bg-blue-100 text-blue-700' :
                      tool.pricing === 'paid' ? 'bg-orange-100 text-orange-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {tool.pricing === 'free' ? '無料' :
                       tool.pricing === 'freemium' ? 'フリーミアム' :
                       tool.pricing === 'paid' ? '有料' : 'エンタープライズ'}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <Link 
                      href={`/tools?category=${tool.category}`}
                      className="flex items-center gap-1 hover:text-blue-600"
                    >
                      <span>{category?.icon}</span>
                      <span>{category?.name}</span>
                    </Link>
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span>{tool.rating}</span>
                      <span className="text-gray-400">({tool.reviewCount.toLocaleString()}件)</span>
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  公式サイトを見る →
                </a>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  ♡ 保存
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-sm p-8 mt-6">
              <h2 className="text-xl font-bold mb-4">主な機能</h2>
              <div className="grid grid-cols-2 gap-3">
                {tool.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-8 mt-6">
              <h2 className="text-xl font-bold mb-4">{tool.name}とは</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  {tool.name}は{category?.name}カテゴリに属するAIツールです。
                  {tool.pricing === 'free' ? '完全無料で利用可能なため、気軽に試すことができます。' :
                   tool.pricing === 'freemium' ? '無料プランで基本機能を試すことができ、必要に応じて有料プランにアップグレードできます。' :
                   tool.pricing === 'paid' ? '有料サービスですが、その分高品質な機能を提供しています。' :
                   '企業向けの本格的なソリューションを提供しています。'}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold mb-4">基本情報</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-gray-500">カテゴリ</dt>
                  <dd className="font-medium">{category?.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">料金</dt>
                  <dd className="font-medium">
                    {tool.pricing === 'free' ? '無料' :
                     tool.pricing === 'freemium' ? 'フリーミアム' :
                     tool.pricing === 'paid' ? '有料' : 'エンタープライズ'}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">評価</dt>
                  <dd className="font-medium flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    {tool.rating}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">レビュー数</dt>
                  <dd className="font-medium">{tool.reviewCount.toLocaleString()}件</dd>
                </div>
              </dl>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-sm p-6 mt-6 text-white">
              <h3 className="font-bold text-lg mb-2">あなたのツールを掲載しませんか？</h3>
              <p className="text-blue-100 text-sm mb-4">
                月間10万人以上のユーザーにアピールできます。
              </p>
              <Link
                href="/submit"
                className="block bg-white text-blue-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                無料で掲載申請
              </Link>
            </div>

            {/* Related Tools */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h3 className="font-bold mb-4">関連ツール</h3>
              <div className="space-y-4">
                {tools
                  .filter(t => t.category === tool.category && t.id !== tool.id)
                  .slice(0, 3)
                  .map((relatedTool) => (
                    <Link
                      key={relatedTool.id}
                      href={`/tools/${relatedTool.slug}`}
                      className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
                    >
                      <span className="text-2xl">{relatedTool.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900">{relatedTool.name}</p>
                        <p className="text-xs text-gray-500">
                          ★ {relatedTool.rating}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 AIツールナビ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
