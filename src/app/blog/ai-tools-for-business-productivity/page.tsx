import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '仕事効率化に使えるAIツール15選｜業務別おすすめガイド | AIツールナビ',
  description: '文書作成、データ分析、スケジュール管理など業務別に最適なAIツールを紹介。導入事例と具体的な活用方法も解説します。',
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
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full ml-4">ビジネス活用</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            仕事効率化に使えるAIツール15選｜業務別おすすめガイド
          </h1>
          
          <div className="flex items-center gap-4 text-gray-500 mb-8">
            <span>2026年1月5日</span>
            <span>読了時間: 12分</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              AIツールを活用すれば、日々の業務を大幅に効率化できます。
              この記事では、業務別におすすめのAIツール15選を紹介します。
              導入事例と具体的な活用方法も解説するので、すぐに実践できます。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">📝 文書作成・ライティング</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-lg">1. ChatGPT / Claude</h3>
                <p className="text-gray-700">メール作成、議事録要約、企画書のたたき台作成に最適。</p>
                <p className="text-sm text-gray-500">活用例：会議の音声をテキスト化→AIで要約→議事録完成</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-lg">2. Notion AI</h3>
                <p className="text-gray-700">Notion内で文章生成・翻訳・要約が可能。ドキュメント管理と一体化。</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-lg">3. Jasper</h3>
                <p className="text-gray-700">マーケティング文章に特化。広告コピー、ブログ記事の作成に。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">📊 データ分析・可視化</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg">4. ChatGPT Code Interpreter</h3>
                <p className="text-gray-700">Excelファイルをアップロードするだけで分析・グラフ作成。</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg">5. Julius AI</h3>
                <p className="text-gray-700">データ分析に特化したAI。自然言語でデータを分析。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🎨 デザイン・画像編集</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-lg">6. Canva AI</h3>
                <p className="text-gray-700">プレゼン資料、SNS画像をAIがデザイン提案。</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-lg">7. Adobe Firefly</h3>
                <p className="text-gray-700">商用利用可能な画像生成。Photoshopと連携。</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-lg">8. Remove.bg</h3>
                <p className="text-gray-700">ワンクリックで背景除去。商品画像の加工に便利。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">💻 プログラミング・開発</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold text-lg">9. GitHub Copilot</h3>
                <p className="text-gray-700">コード補完の定番。開発速度が2倍に。</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold text-lg">10. Cursor</h3>
                <p className="text-gray-700">AIネイティブなコードエディタ。対話形式でコーディング。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🗣️ 会議・コミュニケーション</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-lg">11. Otter.ai</h3>
                <p className="text-gray-700">会議の自動文字起こし・要約。Zoom連携可能。</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-lg">12. tl;dv</h3>
                <p className="text-gray-700">会議録画・文字起こし・ハイライト抽出を自動化。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">📅 タスク・スケジュール管理</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-bold text-lg">13. Reclaim.ai</h3>
                <p className="text-gray-700">AIがカレンダーを最適化。タスクを自動でスケジューリング。</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-bold text-lg">14. Motion</h3>
                <p className="text-gray-700">タスク・会議・習慣をAIが自動スケジュール。</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-bold text-lg">15. Clockwise</h3>
                <p className="text-gray-700">集中時間を確保するようカレンダーを最適化。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">導入のポイント</h2>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li><strong>小さく始める</strong>：まず1つのツールを1つの業務で試す</li>
                <li><strong>無料プランで検証</strong>：有料版は効果を確認してから</li>
                <li><strong>チームで共有</strong>：効果的な使い方をナレッジ化</li>
                <li><strong>定期的に見直し</strong>：新しいツールも常にチェック</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">まとめ</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              AIツールを活用すれば、単純作業を自動化し、より創造的な仕事に集中できます。
              まずは自分の業務で最も時間がかかっている作業を特定し、
              それを効率化できるツールから導入してみましょう。
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
