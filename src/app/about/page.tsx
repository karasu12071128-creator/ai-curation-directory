import Link from 'next/link';
import { Metadata } from 'next';
import { tools, categories } from '@/data/tools';

export const metadata: Metadata = {
  title: 'サイトについて | AIツールナビ',
  description: 'AIツールナビは日本最大級のAIツール検索・比較サイトです。ビジネスや創作活動に最適なAIツールを見つけましょう。',
};

export default function AboutPage() {
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
              <Link href="/categories" className="text-gray-600 hover:text-gray-900">カテゴリ</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">ブログ</Link>
              <Link href="/submit" className="text-gray-600 hover:text-gray-900">ツール掲載</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">AIツールナビについて</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ミッション</h2>
            <p className="mb-6">
              AIツールナビは、急速に進化するAI技術を誰もが活用できるようにすることを目指しています。
              数多くのAIツールの中から、あなたのニーズに最適なツールを見つけるお手伝いをします。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">サイトの特徴</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2">🔍 豊富なツール数</h3>
                <p className="text-blue-800">{tools.length}以上のAIツールを掲載。日々更新中。</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-green-900 mb-2">📂 {categories.length}カテゴリ</h3>
                <p className="text-green-800">目的別にツールを探せる分類システム。</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-purple-900 mb-2">🇯🇵 日本語対応</h3>
                <p className="text-purple-800">すべての情報を日本語で提供。</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-orange-900 mb-2">⭐ レビュー・評価</h3>
                <p className="text-orange-800">実際のユーザー評価を参考に選べる。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">掲載カテゴリ</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>{cat.icon} {cat.name}（{cat.count}件）</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ツール掲載について</h2>
            <p className="mb-6">
              AIツールの開発者・運営者の方へ：当サイトへのツール掲載を受け付けています。
              無料プランから有料の優先掲載プランまで、ニーズに合わせてお選びいただけます。
            </p>
            <Link 
              href="/submit" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              掲載申請はこちら
            </Link>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">お問い合わせ</h2>
            <p className="mb-6">
              ご質問、ご要望、掲載に関するお問い合わせは
              <Link href="/submit" className="text-blue-600 hover:underline">お問い合わせフォーム</Link>
              よりご連絡ください。
            </p>
          </div>
        </article>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 AIツールナビ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
