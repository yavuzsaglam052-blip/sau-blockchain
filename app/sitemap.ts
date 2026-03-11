import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sau-blockchain.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1, // Ana sayfanın Google'daki en önemli (ilk çıkacak) sayfa olduğunu belirtiyoruz
    },
    // Eğer ileride "/hakkimizda" veya blog sayfaları gelirse buraya eklenebilir. Şimdilik Single Page.
  ];
}
