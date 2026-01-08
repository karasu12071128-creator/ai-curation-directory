import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【完全無料】初心者におすすめのAIツール20選｜2026年版 | AIツールナビ',
  description: '無料で使えるAIツールを厳選紹介。文章生成、画像生成、翻訳、音声認識など目的別に初心者でも使いやすいツールを解説。',
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
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full ml-4">初心者向け</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            【完全無料】初心者におすすめのAIツール20選｜2026年版
          </h1>
          
          <div className="flex items-center gap-4 text-gray-500 mb-8">
            <span>2026年1月3日</span>
            <span>読了時間: 10分</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              「AIツールを使ってみたいけど、お金をかけたくない」という方へ。
              この記事では、完全無料または無料プランが充実しているAIツール20選を紹介します。
              初心者でもすぐに使い始められるものばかりです。
            </p>

            <div className="bg-green-50 p-4 rounded-lg mb-8">
              <p className="font-bold text-green-800">この記事でわかること</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>目的別の無料AIツール</li>
                <li>各ツールの無料枠の制限</li>
                <li>初心者におすすめの始め方</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">📝 文章生成・チャットAI</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">1. ChatGPT（無料版）</h3>
                <p className="text-gray-700">OpenAIの定番AI。GPT-3.5が無料で使い放題。</p>
                <p className="text-sm text-green-600">✓ 登録するだけで即利用可能</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">2. Claude（無料版）</h3>
                <p className="text-gray-700">Anthropic製。日本語が自然で長文処理が得意。</p>
                <p className="text-sm text-green-600">✓ 毎日一定回数まで無料</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">3. Google Gemini</h3>
                <p className="text-gray-700">Googleアカウントで無料利用。検索と連携。</p>
                <p className="text-sm text-green-600">✓ Googleサービスと統合</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">4. Microsoft Copilot</h3>
                <p className="text-gray-700">Bing検索と連携。GPT-4ベースが無料。</p>
                <p className="text-sm text-green-600">✓ 画像生成も無料で可能</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🎨 画像生成AI</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">5. Microsoft Designer</h3>
                <p className="text-gray-700">DALL-E 3ベースの画像生成。毎日15回無料。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">6. Leonardo.ai</h3>
                <p className="text-gray-700">毎日150クレジット無料。高品質な画像生成。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">7. Canva AI</h3>
                <p className="text-gray-700">デザインツール内でAI画像生成。月50回無料。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">8. Adobe Firefly</h3>
                <p className="text-gray-700">商用利用可能。月25クレジット無料。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🌐 翻訳・言語AI</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">9. DeepL</h3>
                <p className="text-gray-700">最高精度の翻訳AI。月5,000文字まで無料。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">10. Google翻訳</h3>
                <p className="text-gray-700">完全無料。130以上の言語に対応。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🎤 音声・動画AI</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">11. Whisper（OpenAI）</h3>
                <p className="text-gray-700">高精度音声認識。オープンソースで無料。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">12. VEED.io</h3>
                <p className="text-gray-700">動画編集+字幕自動生成。月10分まで無料。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">13. ElevenLabs</h3>
                <p className="text-gray-700">AI音声合成。月10,000文字まで無料。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">💼 ビジネス・生産性</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">14. Notion AI</h3>
                <p className="text-gray-700">ドキュメント内でAI活用。20回まで無料お試し。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">15. Gamma</h3>
                <p className="text-gray-700">AIでプレゼン自動生成。月400クレジット無料。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">16. Perplexity AI</h3>
                <p className="text-gray-700">AI検索エンジン。無料で使い放題。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">💻 プログラミング</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">17. Replit AI</h3>
                <p className="text-gray-700">ブラウザでコーディング+AI補完。無料プランあり。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">18. Codeium</h3>
                <p className="text-gray-700">GitHub Copilotの無料代替。個人利用は完全無料。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">19. Phind</h3>
                <p className="text-gray-700">プログラマー向けAI検索。無料で使い放題。</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-lg">20. v0 by Vercel</h3>
                <p className="text-gray-700">UIコンポーネント自動生成。月200クレジット無料。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">初心者におすすめの始め方</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>まずはChatGPTから</strong>
                  <p className="text-sm">最も汎用的で情報も多い</p>
                </li>
                <li>
                  <strong>目的を明確にする</strong>
                  <p className="text-sm">「何を効率化したいか」を考える</p>
                </li>
                <li>
                  <strong>1つずつ試す</strong>
                  <p className="text-sm">一度に多くのツールを使わない</p>
                </li>
                <li>
                  <strong>無料枠を使い切ってから有料検討</strong>
                  <p className="text-sm">本当に必要か見極める</p>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">まとめ</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              AIツールは無料でも十分に活用できます。
              まずは<strong>ChatGPT</strong>や<strong>Google Gemini</strong>から始めて、
              慣れてきたら目的に合わせて他のツールも試してみましょう。
              有料版は、無料枠では足りなくなってから検討すれば十分です。
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8 mb-6">
              <p className="font-bold text-yellow-800 mb-2">📌 noteでも公開中！</p>
              <p className="text-gray-700">
                この記事はnoteでも公開しています。フォローしていただくと最新情報をお届けします。
              </p>
              <a 
                href="https://note.com/legit_oxalis4714/n/n17035a0c4f07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 hover:underline font-medium"
              >
                → noteで読む
              </a>
            </div>
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
