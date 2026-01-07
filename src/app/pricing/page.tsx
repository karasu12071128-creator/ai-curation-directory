import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '料金プラン | AIツールナビ',
  description: 'AIツールナビへの掲載料金プラン。無料プランから優先掲載プランまで、ニーズに合わせてお選びいただけます。',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'ベーシック',
      price: '¥5,000',
      period: '/月',
      description: '基本的な掲載プラン',
      features: [
        'ツール一覧への掲載',
        '基本情報の掲載',
        '公式サイトへのリンク',
        '月1回の情報更新',
      ],
      cta: '申請する',
      popular: false,
    },
    {
      name: 'フィーチャード',
      price: '¥15,000',
      period: '/月',
      description: '注目度アップの人気プラン',
      features: [
        'ベーシックの全機能',
        'トップページへの掲載',
        'カテゴリページで上位表示',
        '「おすすめ」バッジ付与',
        '詳細な機能紹介',
        '月2回の情報更新',
      ],
      cta: '申請する',
      popular: true,
    },
    {
      name: 'プレミアム',
      price: '¥30,000',
      period: '/月',
      description: '最大露出の特別プラン',
      features: [
        'フィーチャードの全機能',
        'トップページ最上部に掲載',
        '専用の紹介記事作成',
        'SNSでの紹介',
        'バナー広告枠',
        '無制限の情報更新',
        '優先サポート',
      ],
      cta: '申請する',
      popular: false,
    },
  ];

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">料金プラン</h1>
          <p className="text-xl text-gray-600">あなたのAIツールを多くのユーザーにアピールしましょう</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-sm p-8 relative ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    人気
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/submit"
                className={`block text-center py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">よくある質問</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">無料で掲載できますか？</h3>
              <p className="text-gray-600">
                基本的な情報掲載は審査の上、無料で行っております。より多くの露出をご希望の場合は有料プランをご検討ください。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">支払い方法は？</h3>
              <p className="text-gray-600">
                クレジットカード、銀行振込に対応しています。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">解約はいつでもできますか？</h3>
              <p className="text-gray-600">
                はい、いつでも解約可能です。次回更新日の前日までにご連絡ください。
              </p>
            </div>
          </div>
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
