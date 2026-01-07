import { MetadataRoute } from 'next';
import { tools, categories } from '@/data/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-tool-navigator.vercel.app';

  // 静的ページ
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  // ツール詳細ページ
  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // カテゴリページ
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/tools?category=${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages, ...categoryPages];
}
