// AIツールナビ 型定義

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  website_url: string | null;
  affiliate_url: string | null;
  logo_url: string | null;
  screenshot_url: string | null;
  category_id: string | null;
  category?: Category;
  pricing_type: 'free' | 'freemium' | 'paid' | 'enterprise';
  pricing_details: string | null;
  features: string[];
  tags: string[];
  is_featured: boolean;
  is_verified: boolean;
  view_count: number;
  click_count: number;
  rating: number;
  review_count: number;
  created_at: string;
  updated_at: string;
}

export interface Submission {
  id: string;
  tool_name: string;
  website_url: string;
  description: string | null;
  category_id: string | null;
  contact_email: string;
  company_name: string | null;
  plan_type: 'free' | 'basic' | 'featured' | 'premium';
  status: 'pending' | 'approved' | 'rejected' | 'published';
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  author: string;
  tags: string[];
  is_published: boolean;
  published_at: string | null;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface ClickEvent {
  id: string;
  tool_id: string;
  event_type: 'view' | 'click' | 'affiliate_click';
  referrer: string | null;
  user_agent: string | null;
  ip_hash: string | null;
  created_at: string;
}

// API レスポンス型
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

// フィルター型
export interface ToolFilters {
  category?: string;
  pricing_type?: string;
  search?: string;
  is_featured?: boolean;
  tags?: string[];
}

// 掲載プラン型
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  is_popular: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: '無料掲載',
    price: 0,
    features: [
      '基本情報の掲載',
      'カテゴリ一覧への表示',
      '検索結果への表示',
    ],
    is_popular: false,
  },
  {
    id: 'basic',
    name: 'ベーシック',
    price: 3000,
    features: [
      '無料プランの全機能',
      '詳細説明の追加',
      'スクリーンショット掲載',
      '外部リンク設置',
    ],
    is_popular: false,
  },
  {
    id: 'featured',
    name: 'フィーチャード',
    price: 5000,
    features: [
      'ベーシックプランの全機能',
      'トップページ掲載',
      'カテゴリページ上位表示',
      'SNSでの紹介',
    ],
    is_popular: true,
  },
  {
    id: 'premium',
    name: 'プレミアム',
    price: 10000,
    features: [
      'フィーチャードプランの全機能',
      '専用紹介記事の作成',
      'ニュースレター掲載',
      '優先サポート',
    ],
    is_popular: false,
  },
];
