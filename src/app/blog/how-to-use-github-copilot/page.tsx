import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GitHub Copilot完全ガイド｜導入から活用テクニックまで | AIツールナビ',
  description: 'AIペアプログラマーGitHub Copilotの始め方から上級テクニックまで。コード生成の精度を上げるプロンプトのコツも紹介。',
};

export default function BlogPost() {
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
          <div className="mb-8">
            <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">← ブログ一覧に戻る</Link>
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full ml-4">使い方ガイド</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            GitHub Copilot完全ガイド｜導入から活用テクニックまで
          </h1>
          
          <div className="flex items-center gap-4 text-gray-500 mb-8">
            <span>2026年1月4日</span>
            <span>読了時間: 15分</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              GitHub Copilotは、AIがコードを提案してくれる「AIペアプログラマー」です。
              この記事では、導入方法から上級テクニックまで、Copilotを最大限活用する方法を解説します。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">GitHub Copilotとは</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GitHub CopilotはOpenAIのCodexモデルを基盤としたAIコーディングアシスタントです。
              コメントや関数名から意図を理解し、適切なコードを自動生成します。
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-lg mb-2">主な機能</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>コード補完（行単位・関数単位）</li>
                <li>コメントからコード生成</li>
                <li>テストコード自動生成</li>
                <li>コードの説明・リファクタリング提案</li>
                <li>Copilot Chat（対話形式でコーディング）</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">料金プラン</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">プラン</th>
                    <th className="border border-gray-300 px-4 py-2">料金</th>
                    <th className="border border-gray-300 px-4 py-2">対象</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Individual</td>
                    <td className="border border-gray-300 px-4 py-2">$10/月</td>
                    <td className="border border-gray-300 px-4 py-2">個人開発者</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Business</td>
                    <td className="border border-gray-300 px-4 py-2">$19/月/人</td>
                    <td className="border border-gray-300 px-4 py-2">チーム・企業</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Enterprise</td>
                    <td className="border border-gray-300 px-4 py-2">$39/月/人</td>
                    <td className="border border-gray-300 px-4 py-2">大企業</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-6">※学生・OSS開発者は無料で利用可能</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">導入手順</h2>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>GitHubでサブスクリプション登録</strong>
                  <p className="text-sm">github.com/features/copilot にアクセス</p>
                </li>
                <li>
                  <strong>VS Codeに拡張機能をインストール</strong>
                  <p className="text-sm">「GitHub Copilot」で検索してインストール</p>
                </li>
                <li>
                  <strong>GitHubアカウントでサインイン</strong>
                  <p className="text-sm">VS Code右下のアイコンからログイン</p>
                </li>
                <li>
                  <strong>コーディング開始！</strong>
                  <p className="text-sm">コメントを書くとAIが提案を表示</p>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">活用テクニック</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. コメントで意図を明確に</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              <pre>{`// ユーザーのメールアドレスを検証する関数
// - 形式チェック
// - ドメインの存在確認
// - 使い捨てメール除外
function validateEmail(email: string): boolean {`}</pre>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. 関数名を具体的に</h3>
            <p className="text-gray-700 mb-4">
              <code className="bg-gray-100 px-2 py-1 rounded">getData()</code> より 
              <code className="bg-gray-100 px-2 py-1 rounded">fetchUserOrderHistory()</code> の方が精度が上がります。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Copilot Chatを活用</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><code className="bg-gray-100 px-2 py-1 rounded">/explain</code> - コードの説明</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">/fix</code> - バグ修正</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">/tests</code> - テスト生成</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">/doc</code> - ドキュメント生成</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">注意点</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>コードレビューは必須</strong>：AIの提案を鵜呑みにしない</li>
                <li><strong>セキュリティに注意</strong>：機密情報を含むコードは確認</li>
                <li><strong>ライセンス確認</strong>：生成コードの著作権に注意</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">まとめ</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              GitHub Copilotは開発効率を大幅に向上させる強力なツールです。
              コメントを丁寧に書き、提案を適切にレビューすることで、
              最大限の効果を発揮できます。まずは無料トライアルで試してみましょう。
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
