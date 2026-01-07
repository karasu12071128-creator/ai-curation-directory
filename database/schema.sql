-- AIツールナビ データベーススキーマ
-- Supabase用 PostgreSQL

-- カテゴリテーブル
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    icon VARCHAR(50),
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ツールテーブル
CREATE TABLE tools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(200) NOT NULL,
    slug VARCHAR(200) NOT NULL UNIQUE,
    description TEXT,
    short_description VARCHAR(500),
    website_url VARCHAR(500),
    affiliate_url VARCHAR(500),
    logo_url VARCHAR(500),
    screenshot_url VARCHAR(500),
    category_id UUID REFERENCES categories(id),
    pricing_type VARCHAR(50) CHECK (pricing_type IN ('free', 'freemium', 'paid', 'enterprise')),
    pricing_details TEXT,
    features TEXT[],
    tags TEXT[],
    is_featured BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    view_count INT DEFAULT 0,
    click_count INT DEFAULT 0,
    rating DECIMAL(3,2) DEFAULT 0,
    review_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 掲載申請テーブル
CREATE TABLE submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tool_name VARCHAR(200) NOT NULL,
    website_url VARCHAR(500) NOT NULL,
    description TEXT,
    category_id UUID REFERENCES categories(id),
    contact_email VARCHAR(255) NOT NULL,
    company_name VARCHAR(200),
    plan_type VARCHAR(50) CHECK (plan_type IN ('free', 'basic', 'featured', 'premium')),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'published')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ブログ記事テーブル
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(300) NOT NULL,
    slug VARCHAR(300) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt VARCHAR(500),
    featured_image VARCHAR(500),
    author VARCHAR(100) DEFAULT 'AI Tool Navigator',
    tags TEXT[],
    is_published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    view_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- クリックトラッキングテーブル
CREATE TABLE click_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tool_id UUID REFERENCES tools(id),
    event_type VARCHAR(50) CHECK (event_type IN ('view', 'click', 'affiliate_click')),
    referrer VARCHAR(500),
    user_agent TEXT,
    ip_hash VARCHAR(64),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- インデックス作成
CREATE INDEX idx_tools_category ON tools(category_id);
CREATE INDEX idx_tools_featured ON tools(is_featured);
CREATE INDEX idx_tools_slug ON tools(slug);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_click_events_tool ON click_events(tool_id);
CREATE INDEX idx_click_events_created ON click_events(created_at);

-- 更新日時自動更新トリガー
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_categories_updated_at
    BEFORE UPDATE ON categories
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tools_updated_at
    BEFORE UPDATE ON tools
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_submissions_updated_at
    BEFORE UPDATE ON submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 初期カテゴリデータ
INSERT INTO categories (name, slug, description, icon, display_order) VALUES
('文章生成AI', 'text-generation', 'ChatGPT、Claude等の文章生成AIツール', 'edit', 1),
('画像生成AI', 'image-generation', 'Midjourney、DALL-E等の画像生成AIツール', 'image', 2),
('動画生成AI', 'video-generation', '動画を自動生成するAIツール', 'video', 3),
('音声・音楽AI', 'audio-music', '音声合成、音楽生成AIツール', 'music', 4),
('コーディング支援AI', 'coding', 'GitHub Copilot等のコーディング支援ツール', 'code', 5),
('マーケティングAI', 'marketing', 'マーケティング自動化AIツール', 'trending-up', 6),
('SEO・コンテンツAI', 'seo-content', 'SEO最適化、コンテンツ作成支援ツール', 'search', 7),
('デザインAI', 'design', 'Canva等のデザイン支援AIツール', 'palette', 8),
('データ分析AI', 'data-analysis', 'データ分析、可視化AIツール', 'bar-chart', 9),
('翻訳・言語AI', 'translation', '翻訳、多言語対応AIツール', 'globe', 10),
('チャットボット', 'chatbot', 'カスタマーサポート用チャットボット', 'message-circle', 11),
('自動化・ワークフロー', 'automation', 'Zapier等の自動化ツール', 'zap', 12),
('教育・学習AI', 'education', '教育、学習支援AIツール', 'book-open', 13),
('ビジネス・生産性', 'productivity', 'Notion AI等の生産性向上ツール', 'briefcase', 14),
('研究・論文AI', 'research', '論文作成、研究支援AIツール', 'file-text', 15),
('法務・契約AI', 'legal', '契約書作成、法務支援AIツール', 'shield', 16),
('人事・採用AI', 'hr-recruitment', '採用、人事管理AIツール', 'users', 17),
('財務・会計AI', 'finance', '財務分析、会計支援AIツール', 'dollar-sign', 18),
('カスタマーサポートAI', 'customer-support', 'カスタマーサポート自動化ツール', 'headphones', 19),
('その他AI', 'other', 'その他のAIツール', 'more-horizontal', 20);
