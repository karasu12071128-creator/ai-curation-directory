import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約 | AIツールナビ',
  description: 'AIツールナビの利用規約。サービスのご利用条件について説明します。',
};

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">利用規約</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              この利用規約（以下「本規約」）は、AIツールナビ（以下「当サイト」）の利用条件を定めるものです。
              ユーザーの皆様には、本規約に同意いただいた上で、当サイトをご利用いただきます。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">第1条（適用）</h2>
            <p className="mb-6">
              本規約は、ユーザーと当サイト運営者との間の当サイト利用に関わる一切の関係に適用されるものとします。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">第2条（禁止事項）</h2>
            <p className="mb-4">ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません。</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当サイトの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>当サイトに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>その他、当サイト運営者が不適切と判断する行為</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">第3条（当サイトの提供の停止等）</h2>
            <p className="mb-4">
              当サイト運営者は、以下のいずれかの事由があると判断した場合、
              ユーザーに事前に通知することなく当サイトの全部または一部の提供を停止または中断することができるものとします。
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>当サイトにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、当サイトの提供が困難となった場合</li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当サイト運営者が当サイトの提供が困難と判断した場合</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">第4条（免責事項）</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>当サイトに掲載されている情報の正確性、完全性、有用性等について、いかなる保証もいたしません。</li>
              <li>当サイトからリンクされている外部サイトの内容については、一切の責任を負いません。</li>
              <li>当サイトに掲載されているAIツールの利用により生じた損害について、当サイト運営者は一切の責任を負いません。</li>
              <li>ユーザーと第三者との間で生じた紛争について、当サイト運営者は一切の責任を負いません。</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">第5条（著作権）</h2>
            <p className="mb-6">
              当サイトに掲載されているコンテンツ（文章、画像、デザイン等）の著作権は、
              当サイト運営者または正当な権利を有する第三者に帰属します。
              無断での複製、転載、改変等は禁止します。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">第6条（広告・アフィリエイトについて）</h2>
            <p className="mb-6">
              当サイトでは、アフィリエイトプログラムを利用しています。
              ユーザーが当サイト経由で商品・サービスを購入された場合、
              当サイト運営者が紹介料を受け取ることがあります。
              これにより、ユーザーに追加の費用が発生することはありません。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">第7条（利用規約の変更）</h2>
            <p className="mb-6">
              当サイト運営者は、必要と判断した場合には、ユーザーに通知することなく
              いつでも本規約を変更することができるものとします。
              変更後の利用規約は、当サイトに掲載した時点から効力を生じるものとします。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">第8条（準拠法・裁判管轄）</h2>
            <p className="mb-6">
              本規約の解釈にあたっては、日本法を準拠法とします。
              当サイトに関して紛争が生じた場合には、当サイト運営者の所在地を管轄する裁判所を専属的合意管轄とします。
            </p>

            <p className="text-sm text-gray-500 mt-8">
              制定日：2026年1月7日
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
