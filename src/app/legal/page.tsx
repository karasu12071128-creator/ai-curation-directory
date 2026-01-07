import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | AIツールナビ',
  description: 'AIツールナビの特定商取引法に基づく表記。',
};

export default function LegalPage() {
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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">特定商取引法に基づく表記</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <table className="min-w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left font-bold w-1/3">販売業者</th>
                  <td className="py-4">AIツールナビ運営事務局</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left font-bold">運営責任者</th>
                  <td className="py-4">お問い合わせ時に開示</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left font-bold">所在地</th>
                  <td className="py-4">お問い合わせ時に開示</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left font-bold">連絡先</th>
                  <td className="py-4">
                    <Link href="/submit" className="text-blue-600 hover:underline">お問い合わせフォーム</Link>よりご連絡ください
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left font-bold">販売価格</th>
                  <td className="py-4">
                    各サービスページに記載<br />
                    ・ベーシック掲載：5,000円/月（税込）<br />
                    ・フィーチャード掲載：15,000円/月（税込）<br />
                    ・プレミアム掲載：30,000円/月（税込）
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left font-bold">支払方法</th>
                  <td className="py-4">クレジットカード、銀行振込</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left font-bold">支払時期</th>
                  <td className="py-4">サービス提供開始前</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left font-bold">サービス提供時期</th>
                  <td className="py-4">お支払い確認後、3営業日以内</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left font-bold">返品・キャンセル</th>
                  <td className="py-4">
                    サービスの性質上、お支払い後の返金はいたしかねます。<br />
                    ただし、当方の責に帰すべき事由による場合はこの限りではありません。
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left font-bold">その他</th>
                  <td className="py-4">
                    掲載内容が当サイトの基準に適合しない場合、掲載をお断りする場合があります。
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-sm text-gray-500 mt-8">
              ※ 個人情報保護の観点から、住所・電話番号等はお問い合わせいただいた方にのみ開示しております。
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
