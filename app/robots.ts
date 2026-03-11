import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/admin/dashboard'], // Admin panelinin Google'da çıkmasını engelliyoruz
    },
    sitemap: 'https://sau-blockchain.vercel.app/sitemap.xml',
  };
}
