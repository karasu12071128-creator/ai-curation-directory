import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIツール活用ブログ | AIツールナビ',
  description: 'AIツールの使い方、比較、最新情報をお届けするブログ。ChatGPT、Midjourney、GitHub Copilotなど人気ツールの活用法を解説。',
};

const blogPosts = [
  {
    slug: 'chatgpt-vs-claude-comparison-2026',
    title: '【2026年最新】ChatGPT vs Claude徹底比較！どちらを選ぶべき？',
    excerpt: 'OpenAIのChatGPTとAnthropicのClaudeを徹底比較。料金、性能、使いやすさの観点から最適なAIアシスタントを選ぶポイントを解説します。',
    category: '比較・レビュー',
    date: '2026-01-07',
    readTime: '8分',
  },
  {
    slug: 'best-ai-image-generators-2026',
    title: '【2026年版】画像生成AIおすすめ10選｜無料から有料まで徹底比較',
    excerpt: 'Midjourney、DALL-E 3、Stable Diffusionなど人気の画像生成AIを比較。用途別のおすすめと選び方を詳しく解説します。',
    category: 'まとめ',
    date: '2026-01-06',
    readTime: '10分',
  },
  {
    slug: 'ai-tools-for-business-productivity',
    title: '仕事効率化に使えるAIツール15選｜業務別おすすめガイド',
    excerpt: '文書作成、データ分析、スケジュール管理など業務別に最適なAIツールを紹介。導入事例と具体的な活用方法も解説します。',
    category: 'ビジネス活用',
    date: '2026-01-05',
    readTime: '12分',
  },
  {
    slug: 'how-to-use-github-copilot',
    title: 'GitHub Copilot完全ガイド｜導入から活用テクニックまで',
    excerpt: 'AIペアプログラマーGitHub Copilotの始め方から上級テクニックまで。コード生成の精度を上げるプロンプトのコツも紹介。',
    category: '使い方ガイド',
    date: '2026-01-04',
    readTime: '15分',
  },
  {
    slug: 'free-ai-tools-beginners-guide',
    title: '【完全無料】初心者におすすめのAIツール20選｜2026年版',
    excerpt: '無料で使えるAIツールを厳選紹介。文章生成、画像生成、翻訳、音声認識など目的別に初心者でも使いやすいツールを解説。',
    category: '初心者向け',
    date: '2026-01-03',
    readTime: '10分',
  },
];

export default function BlogPage() {
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
              <Link href="/blog" className="text-blue-600 font-medium">ブログ</Link>
              <Link href="/submit" className="text-gray-600 hover:text-gray-900">ツール掲載</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AIツール活用ブログ</h1>
          <p className="text-xl text-gray-600">
            AIツールの使い方、比較、最新情報をお届けします
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">読了時間: {post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            </article>
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
