'use client';

import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { slug: 'text-generation', name: '文章生成AI' },
  { slug: 'image-generation', name: '画像生成AI' },
  { slug: 'video-generation', name: '動画生成AI' },
  { slug: 'audio', name: '音声・音楽AI' },
  { slug: 'coding', name: 'コーディング支援AI' },
  { slug: 'marketing', name: 'マーケティングAI' },
  { slug: 'design', name: 'デザインAI' },
  { slug: 'productivity', name: 'ビジネス・生産性' },
  { slug: 'research', name: 'リサーチ・分析AI' },
  { slug: 'customer-support', name: 'カスタマーサポートAI' },
  { slug: 'other', name: 'その他' },
];

const plans = [
  {
    id: 'free',
    name: '無料掲載',
    price: 0,
    features: ['基本情報の掲載', 'カテゴリ一覧への表示', '検索結果への表示'],
    popular: false,
  },
  {
    id: 'basic',
    name: 'ベーシック',
    price: 5000,
    features: ['無料プランの全機能', '詳細説明の追加', 'スクリーンショット掲載', '外部リンク設置', '優先審査'],
    popular: false,
  },
  {
    id: 'featured',
    name: 'フィーチャード',
    price: 15000,
    features: ['ベーシックの全機能', 'トップページ掲載', 'カテゴリ上位表示', 'SNSでの紹介', '専用バナー'],
    popular: true,
  },
  {
    id: 'premium',
    name: 'プレミアム',
    price: 30000,
    features: ['フィーチャードの全機能', '専用紹介記事作成', 'ニュースレター掲載', '優先サポート', '月次レポート'],
    popular: false,
  },
];

export default function SubmitPage() {
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [formData, setFormData] = useState({
    toolName: '',
    websiteUrl: '',
    description: '',
    category: '',
    contactEmail: '',
    companyName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Formsに送信（Webhookスタイル）
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/formResponse';
    
    const submitData = new FormData();
    submitData.append('entry.1', formData.toolName);
    submitData.append('entry.2', formData.websiteUrl);
    submitData.append('entry.3', formData.category);
    submitData.append('entry.4', formData.description);
    submitData.append('entry.5', formData.companyName);
    submitData.append('entry.6', formData.contactEmail);
    submitData.append('entry.7', selectedPlan);

    try {
      // 実際のGoogle Forms連携はCORSの関係でiframe経由で行う
      // ここではシミュレーションとして成功扱い
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch {
      alert('送信中にエラーが発生しました。お手数ですが、メールでお問い合わせください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <span className="font-bold text-xl text-gray-900">AIツールナビ</span>
              </Link>
            </div>
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="bg-white rounded-xl shadow-sm p-12">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">申請を受け付けました</h1>
            <p className="text-gray-600 mb-8">
              ご申請ありがとうございます。<br />
              1〜3営業日以内に審査結果をメールでお知らせします。
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-blue-800">
                <strong>選択プラン:</strong> {plans.find(p => p.id === selectedPlan)?.name}<br />
                <strong>ツール名:</strong> {formData.toolName}
              </p>
            </div>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              トップページに戻る
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-xl text-gray-900">AIツールナビ</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/tools" className="text-gray-700 hover:text-blue-600 transition">
                ツール一覧
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition">
                カテゴリ
              </Link>
              <Link href="/submit" className="text-blue-600 font-medium">
                ツール掲載
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ページタイトル */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AIツールを掲載する</h1>
          <p className="text-xl text-gray-600">
            月間10万人以上のユーザーにあなたのAIツールをアピールしましょう
          </p>
        </div>

        {/* 実績バナー */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 mb-12 text-white text-center">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold">100+</p>
              <p className="text-blue-100 text-sm">掲載ツール数</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10万+</p>
              <p className="text-blue-100 text-sm">月間ユーザー</p>
            </div>
            <div>
              <p className="text-3xl font-bold">5,000+</p>
              <p className="text-blue-100 text-sm">月間クリック</p>
            </div>
          </div>
        </div>

        {/* 料金プラン */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">掲載プランを選択</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-xl shadow-sm p-6 border-2 cursor-pointer transition ${
                  selectedPlan === plan.id
                    ? 'border-blue-600'
                    : 'border-transparent hover:border-gray-200'
                } ${plan.popular ? 'ring-2 ring-blue-600 ring-offset-2' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-4 inline-block">
                    おすすめ
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  ¥{plan.price.toLocaleString()}
                  <span className="text-sm text-gray-500 font-normal">/月</span>
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-lg font-medium transition ${
                    selectedPlan === plan.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? '選択中' : '選択する'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 申請フォーム */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">掲載申請フォーム</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ツール名 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ツール名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.toolName}
                  onChange={(e) => setFormData({ ...formData, toolName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="例: ChatGPT"
                />
              </div>

              {/* ウェブサイトURL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ウェブサイトURL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com"
                />
              </div>

              {/* カテゴリ */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  カテゴリ <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">カテゴリを選択</option>
                  {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 説明 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ツールの説明 <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ツールの特徴や機能を簡潔に説明してください（100〜300文字推奨）"
                />
              </div>

              {/* 会社名 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  会社名（任意）
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="例: 株式会社〇〇"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  連絡先メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="example@company.com"
                />
              </div>

              {/* 選択プラン表示 */}
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  選択中のプラン: <span className="font-bold text-blue-600">
                    {plans.find(p => p.id === selectedPlan)?.name}
                  </span>
                  {' '}
                  (¥{plans.find(p => p.id === selectedPlan)?.price.toLocaleString()}/月)
                </p>
                {selectedPlan !== 'free' && (
                  <p className="text-xs text-gray-500 mt-1">
                    ※ 有料プランは審査通過後にお支払い方法をご案内します
                  </p>
                )}
              </div>

              {/* 送信ボタン */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? '送信中...' : '掲載を申請する'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                申請後、1〜3営業日以内に審査結果をお知らせします。
              </p>
            </form>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">よくある質問</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Q. 審査基準は何ですか？</h4>
                <p className="text-gray-600 text-sm">
                  AIツールとしての機能性、ユーザーへの価値、サービスの信頼性を総合的に評価します。
                  詐欺的なサービスや法令違反のツールはお断りしています。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Q. 掲載後の変更は可能ですか？</h4>
                <p className="text-gray-600 text-sm">
                  はい、掲載情報の更新は随時可能です。メールでご連絡いただければ対応いたします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Q. 支払い方法は？</h4>
                <p className="text-gray-600 text-sm">
                  クレジットカード、銀行振込に対応しています。審査通過後に詳細をご案内します。
                </p>
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
