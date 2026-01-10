'use client';

// Speak（スピーク）AI英会話アプリ - 1080×1080px
export function SpeakBanner() {
  return (
    <div className="my-8 flex justify-center">
      <a 
        href="//af.moshimo.com/af/c/click?a_id=5329879&p_id=7231&pc_id=20741&pl_id=91677" 
        rel="nofollow" 
        referrerPolicy="no-referrer-when-downgrade"
      >
        <img 
          src="//image.moshimo.com/af-img/6249/000000091677.png" 
          width="1080" 
          height="1080" 
          alt="Speak - AI英会話アプリ"
          className="max-w-full h-auto rounded-lg shadow-md hover:shadow-lg transition"
          style={{ maxWidth: '400px' }}
          loading="lazy"
        />
      </a>
      <img 
        src="//i.moshimo.com/af/i/impression?a_id=5329879&p_id=7231&pc_id=20741&pl_id=91677" 
        width="1" 
        height="1" 
        alt=""
        style={{ border: 'none' }}
        loading="lazy"
      />
    </div>
  );
}

// Speak バナー（サイドバー用・小さめ）
export function SpeakBannerSmall() {
  return (
    <div className="flex justify-center">
      <a 
        href="//af.moshimo.com/af/c/click?a_id=5329879&p_id=7231&pc_id=20741&pl_id=91677" 
        rel="nofollow" 
        referrerPolicy="no-referrer-when-downgrade"
      >
        <img 
          src="//image.moshimo.com/af-img/6249/000000091677.png" 
          width="1080" 
          height="1080" 
          alt="Speak - AI英会話アプリ"
          className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition"
          style={{ maxWidth: '280px' }}
          loading="lazy"
        />
      </a>
      <img 
        src="//i.moshimo.com/af/i/impression?a_id=5329879&p_id=7231&pc_id=20741&pl_id=91677" 
        width="1" 
        height="1" 
        alt=""
        style={{ border: 'none' }}
        loading="lazy"
      />
    </div>
  );
}

// DMM 生成AI CAMP - 234×60px
export function DMMGenAICampBanner() {
  return (
    <div className="my-6 flex justify-center">
      <a 
        href="//af.moshimo.com/af/c/click?a_id=5329875&p_id=7302&pc_id=20980&pl_id=92026" 
        rel="nofollow" 
        referrerPolicy="no-referrer-when-downgrade"
      >
        <img 
          src="//image.moshimo.com/af-img/7118/000000092026.png" 
          width="234" 
          height="60" 
          alt="DMM 生成AI CAMP - ChatGPTなどの生成AIを学ぶ"
          className="hover:opacity-90 transition"
          style={{ border: 'none' }}
          loading="lazy"
        />
      </a>
      <img 
        src="//i.moshimo.com/af/i/impression?a_id=5329875&p_id=7302&pc_id=20980&pl_id=92026" 
        width="1" 
        height="1" 
        alt=""
        style={{ border: 'none' }}
        loading="lazy"
      />
    </div>
  );
}

// 記事内に自然に溶け込むSpeak紹介セクション
export function SpeakArticleSection() {
  return (
    <div className="my-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <a 
            href="//af.moshimo.com/af/c/click?a_id=5329879&p_id=7231&pc_id=20741&pl_id=91677" 
            rel="nofollow" 
            referrerPolicy="no-referrer-when-downgrade"
          >
            <img 
              src="//image.moshimo.com/af-img/6249/000000091677.png" 
              width="1080" 
              height="1080" 
              alt="Speak - AI英会話アプリ"
              className="w-48 h-48 rounded-lg shadow-md hover:shadow-lg transition object-cover"
              loading="lazy"
            />
          </a>
          <img 
            src="//i.moshimo.com/af/i/impression?a_id=5329879&p_id=7231&pc_id=20741&pl_id=91677" 
            width="1" 
            height="1" 
            alt=""
            style={{ border: 'none' }}
            loading="lazy"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">PR</span>
          <h3 className="text-xl font-bold text-gray-900 mb-2">AIで英会話を学ぶなら「Speak」</h3>
          <p className="text-gray-600 text-sm mb-4">
            AIとの会話で英語力を向上。いつでもどこでも、あなたのペースで学習できます。
            ネイティブレベルの発音チェックと、パーソナライズされたレッスンで効率的に上達。
          </p>
          <a 
            href="//af.moshimo.com/af/c/click?a_id=5329879&p_id=7231&pc_id=20741&pl_id=91677" 
            rel="nofollow" 
            referrerPolicy="no-referrer-when-downgrade"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            無料トライアルを始める →
          </a>
        </div>
      </div>
    </div>
  );
}

// 記事内に自然に溶け込むDMM生成AI CAMP紹介セクション
export function DMMGenAICampArticleSection() {
  return (
    <div className="my-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 text-center sm:text-left">
          <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-2">PR</span>
          <h3 className="text-lg font-bold text-gray-900 mb-2">ChatGPTを仕事で活かしたい方へ</h3>
          <p className="text-gray-600 text-sm mb-3">
            DMM 生成AI CAMPで、ChatGPTなどの生成AIを体系的に学べます。
            無料カウンセリングで、あなたに合った学習プランをご提案。
          </p>
        </div>
        <div className="flex-shrink-0">
          <a 
            href="//af.moshimo.com/af/c/click?a_id=5329875&p_id=7302&pc_id=20980&pl_id=92026" 
            rel="nofollow" 
            referrerPolicy="no-referrer-when-downgrade"
            className="inline-block"
          >
            <img 
              src="//image.moshimo.com/af-img/7118/000000092026.png" 
              width="234" 
              height="60" 
              alt="DMM 生成AI CAMP"
              className="hover:opacity-90 transition"
              style={{ border: 'none' }}
              loading="lazy"
            />
          </a>
          <img 
            src="//i.moshimo.com/af/i/impression?a_id=5329875&p_id=7302&pc_id=20980&pl_id=92026" 
            width="1" 
            height="1" 
            alt=""
            style={{ border: 'none' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

// サイドバー用のおすすめセクション
export function AffiliateSidebar() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <h3 className="font-bold text-gray-900 text-lg border-b pb-2">おすすめサービス</h3>
      
      {/* Speak */}
      <div className="text-center">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-2">AI英会話</span>
        <a 
          href="//af.moshimo.com/af/c/click?a_id=5329879&p_id=7231&pc_id=20741&pl_id=91677" 
          rel="nofollow" 
          referrerPolicy="no-referrer-when-downgrade"
        >
          <img 
            src="//image.moshimo.com/af-img/6249/000000091677.png" 
            width="1080" 
            height="1080" 
            alt="Speak - AI英会話アプリ"
            className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition mb-2"
            style={{ maxWidth: '200px', margin: '0 auto' }}
            loading="lazy"
          />
        </a>
        <img 
          src="//i.moshimo.com/af/i/impression?a_id=5329879&p_id=7231&pc_id=20741&pl_id=91677" 
          width="1" 
          height="1" 
          alt=""
          style={{ border: 'none' }}
          loading="lazy"
        />
        <p className="text-sm text-gray-600">AIと英会話レッスン</p>
      </div>

      <hr className="border-gray-200" />

      {/* DMM */}
      <div className="text-center">
        <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full mb-2">AIスクール</span>
        <a 
          href="//af.moshimo.com/af/c/click?a_id=5329875&p_id=7302&pc_id=20980&pl_id=92026" 
          rel="nofollow" 
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        >
          <img 
            src="//image.moshimo.com/af-img/7118/000000092026.png" 
            width="234" 
            height="60" 
            alt="DMM 生成AI CAMP"
            className="mx-auto hover:opacity-90 transition"
            style={{ border: 'none' }}
            loading="lazy"
          />
        </a>
        <img 
          src="//i.moshimo.com/af/i/impression?a_id=5329875&p_id=7302&pc_id=20980&pl_id=92026" 
          width="1" 
          height="1" 
          alt=""
          style={{ border: 'none' }}
          loading="lazy"
        />
        <p className="text-sm text-gray-600 mt-2">生成AIを学ぶ</p>
      </div>
    </div>
  );
}
