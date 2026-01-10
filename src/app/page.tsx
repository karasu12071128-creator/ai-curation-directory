import Link from 'next/link';
import { tools, categories, getFeaturedTools } from '@/data/tools';
import { SpeakBannerSmall, DMMGenAICampBanner } from '@/components/AffiliateBanners';

export default function Home() {
  const featuredTools = getFeaturedTools().slice(0, 6);

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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            あなたに最適なAIツールを見つけよう
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {tools.length}以上のAIツールを日本語で検索・比較。<br />
            ビジネスや創作活動を加速させるツールがきっと見つかります。
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
              <input
                type="text"
                placeholder="AIツールを検索..."
                className="flex-1 px-6 py-4 text-gray-900 focus:outline-none"
              />
              <button className="bg-blue-600 px-8 py-4 hover:bg-blue-700 transition">
                検索
              </button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="text-blue-200">人気の検索:</span>
              {['ChatGPT', '画像生成', 'コード補完', '翻訳', '動画編集'].map((tag) => (
                <Link
                  key={tag}
                  href={`/tools?q=${encodeURIComponent(tag)}`}
                  className="bg-white/20 px-3 py-1 rounded-full text-sm hover:bg-white/30 transition"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">カテゴリから探す</h2>
          <p className="text-gray-600 text-center mb-12">目的に合わせてAIツールを見つけましょう</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/tools?category=${category.id}`}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition group"
              >
                <span className="text-4xl mb-3 block">{category.icon}</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.count}件のツール</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/categories" className="text-blue-600 hover:text-blue-700 font-medium">
              すべてのカテゴリを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">注目のAIツール</h2>
          <p className="text-gray-600 text-center mb-12">今話題のAIツールをピックアップ</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6 group"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{tool.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition">
                      {tool.name}
                    </h3>
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
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{tool.rating}</span>
                  <span className="mx-2">•</span>
                  <span>{tool.reviewCount.toLocaleString()}件のレビュー</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/tools" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              すべてのツールを見る
            </Link>
          </div>
        </div>
      </section>

      {/* おすすめサービス Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-2">おすすめのAI学習サービス</h2>
          <p className="text-gray-600 text-center mb-8">AIを活用したスキルアップにおすすめ</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Speak - AI英会話 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-3">PR</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">AIで英会話を学ぶ</h3>
              <p className="text-gray-600 text-sm mb-4">Speakは、AIとの会話で英語力を向上させるアプリ。いつでもどこでも、あなたのペースで学習できます。</p>
              <SpeakBannerSmall />
            </div>
            
            {/* DMM 生成AI CAMP */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-3">PR</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">生成AIを仕事で活かす</h3>
              <p className="text-gray-600 text-sm mb-4">DMM 生成AI CAMPで、ChatGPTなどの生成AIを体系的に学べます。無料カウンセリング実施中。</p>
              <DMMGenAICampBanner />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">あなたのAIツールを掲載しませんか？</h2>
          <p className="text-blue-100 mb-8">
            月間10万人以上のユーザーにあなたのツールをアピールできます。<br />
            無料プランから始められます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/submit" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              無料で掲載申請
            </Link>
            <Link 
              href="/pricing" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              料金プランを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🚀</span>
                <span className="font-bold text-xl text-white">AIツールナビ</span>
              </div>
              <p className="text-sm">
                日本最大級のAIツールディレクトリ。<br />
                あなたのビジネスに最適なAIツールを見つけましょう。
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
                <li><Link href="/legal" className="hover:text-white transition">特定商取引法に基づく表記</Link></li>
                <li><Link href="/submit" className="hover:text-white transition">お問い合わせ</Link></li>
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
