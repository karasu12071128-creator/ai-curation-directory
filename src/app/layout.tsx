import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AIツールナビ | 日本最大級のAIツール検索・比較サイト",
    template: "%s | AIツールナビ"
  },
  description: "2000以上のAIツールを日本語で検索・比較。ChatGPT、Midjourney、GitHub Copilotなど、ビジネスや創作活動を加速させる最適なAIツールが見つかります。無料ツールから有料ツールまで、カテゴリ別に徹底解説。",
  keywords: [
    "AIツール",
    "AI比較",
    "ChatGPT",
    "Midjourney",
    "画像生成AI",
    "文章生成AI",
    "コーディングAI",
    "GitHub Copilot",
    "AIツール一覧",
    "AIツールおすすめ",
    "AI活用",
    "生成AI",
    "AIサービス"
  ],
  authors: [{ name: "AIツールナビ編集部" }],
  creator: "AIツールナビ",
  publisher: "AIツールナビ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ai-tool-navigator.vercel.app",
    siteName: "AIツールナビ",
    title: "AIツールナビ | 日本最大級のAIツール検索・比較サイト",
    description: "2000以上のAIツールを日本語で検索・比較。ビジネスや創作活動を加速させる最適なAIツールが見つかります。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIツールナビ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIツールナビ | 日本最大級のAIツール検索・比較サイト",
    description: "2000以上のAIツールを日本語で検索・比較。最適なAIツールが見つかります。",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ai-tool-navigator.vercel.app",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
