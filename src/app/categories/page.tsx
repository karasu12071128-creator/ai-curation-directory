import Link from 'next/link';
import { Metadata } from 'next';
import { categories } from '@/data/tools';

export const metadata: Metadata = {
  title: 'カテゴリ一覧 | AIツールナビ',
  description: 'AIツールをカテゴリ別に探す。文章生成、画像生成、コーディング支援など10カテゴリから最適なツールを見つけましょう。',
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-xl text-gray-900">AIツールナビ</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/tools" className="text-gray-600 hover:text-gray-900">ツール一覧</Link>
              <Link href="/categories" className="text-blue-600 font-semibold">カテゴリ</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">ブログ</Link>
              <Link href="/submit" className="text-gray-600 hover:text-gray-900">ツール掲載</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">カテゴリから探す</h1>
          <p className="text-xl text-gray-600">目的に合わせてAIツールを見つけましょう</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/tools?category=${category.id}`}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition group"
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{category.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {category.name}
                  </h2>
                  <p className="text-gray-500">{category.count}件のツール</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 AIツールナビ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
