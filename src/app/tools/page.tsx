import Link from 'next/link';
import { Metadata } from 'next';
import { tools, categories } from '@/data/tools';

export const metadata: Metadata = {
  title: 'AIツール一覧',
  description: '50以上のAIツールを日本語で検索・比較。文章生成、画像生成、コーディング支援など、カテゴリ別に最適なAIツールを見つけましょう。',
};

export default function ToolsPage() {
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
              <Link href="/tools" className="text-blue-600 font-medium">ツール一覧</Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="font-bold text-lg mb-4">カテゴリ</h2>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/tools" 
                    className="flex items-center justify-between text-blue-600 font-medium"
                  >
                    <span>すべて</span>
                    <span className="text-sm text-gray-500">{tools.length}</span>
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link 
                      href={`/tools?category=${category.id}`}
                      className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition"
                    >
                      <span className="flex items-center gap-2">
                        <span>{category.icon}</span>
                        <span className="text-sm">{category.name}</span>
                      </span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="border-t mt-6 pt-6">
                <h2 className="font-bold text-lg mb-4">料金プラン</h2>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-gray-600">無料</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-gray-600">フリーミアム</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-gray-600">有料</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">AIツール一覧</h1>
              <div className="flex items-center gap-4">
                <span className="text-gray-500">{tools.length}件のツール</span>
                <select className="border rounded-lg px-3 py-2 text-sm">
                  <option>人気順</option>
                  <option>評価順</option>
                  <option>新着順</option>
                  <option>名前順</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.slug}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6 group"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-4xl">{tool.icon}</span>
                    <div className="flex-1">
                      <h2 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition">
                        {tool.name}
                      </h2>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          tool.pricing === 'free' ? 'bg-green-100 text-green-700' :
                          tool.pricing === 'freemium' ? 'bg-blue-100 text-blue-700' :
                          tool.pricing === 'paid' ? 'bg-orange-100 text-orange-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {tool.pricing === 'free' ? '無料' :
                           tool.pricing === 'freemium' ? 'フリーミアム' :
                           tool.pricing === 'paid' ? '有料' : 'エンタープライズ'}
                        </span>
                        <span className="text-xs text-gray-500">
                          {categories.find(c => c.id === tool.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">{tool.rating}</span>
                      <span className="mx-2">•</span>
                      <span>{tool.reviewCount.toLocaleString()}件のレビュー</span>
                    </div>
                    <span className="text-blue-600 text-sm font-medium group-hover:underline">
                      詳細を見る →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 AIツールナビ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
