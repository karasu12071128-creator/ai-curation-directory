import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | AIツールナビ',
  description: 'AIツールナビのプライバシーポリシー。個人情報の取り扱いについて説明します。',
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              AIツールナビ（以下「当サイト」）は、ユーザーの個人情報の取り扱いについて、
              以下のとおりプライバシーポリシーを定めます。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. 収集する情報</h2>
            <p className="mb-4">当サイトでは、以下の情報を収集する場合があります。</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>お問い合わせフォームに入力された情報（メールアドレス、お名前等）</li>
              <li>掲載申請フォームに入力された情報</li>
              <li>アクセス解析ツールによる閲覧情報（IPアドレス、ブラウザ情報等）</li>
              <li>Cookieによる情報</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. 情報の利用目的</h2>
            <p className="mb-4">収集した情報は、以下の目的で利用します。</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>お問い合わせへの対応</li>
              <li>掲載申請の審査・連絡</li>
              <li>サービスの改善・向上</li>
              <li>統計データの作成（個人を特定しない形式）</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. 第三者への提供</h2>
            <p className="mb-6">
              当サイトは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. アクセス解析ツール</h2>
            <p className="mb-6">
              当サイトでは、Googleアナリティクス等のアクセス解析ツールを使用しています。
              これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
              Googleアナリティクスの利用規約については、
              <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">こちら</a>
              をご確認ください。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. 広告について</h2>
            <p className="mb-6">
              当サイトでは、第三者配信の広告サービス（A8.net等のアフィリエイトプログラム）を利用しています。
              広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Cookieの無効化</h2>
            <p className="mb-6">
              ユーザーはブラウザの設定によりCookieを無効にすることができます。
              ただし、Cookieを無効にした場合、当サイトの一部機能が利用できなくなる可能性があります。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. プライバシーポリシーの変更</h2>
            <p className="mb-6">
              当サイトは、必要に応じて本ポリシーを変更することがあります。
              変更後のプライバシーポリシーは、当ページに掲載した時点から効力を生じるものとします。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. お問い合わせ</h2>
            <p className="mb-6">
              プライバシーポリシーに関するお問い合わせは、
              <Link href="/submit" className="text-blue-600 hover:underline">お問い合わせフォーム</Link>
              よりご連絡ください。
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
