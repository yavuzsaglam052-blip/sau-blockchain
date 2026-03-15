import React from 'react';

export default function Schema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SAÜ Blockchain Topluluğu",
    "alternateName": ["Sakarya Üniversitesi Blockchain", "Sau Blockchain", "SAÜ Web3", "Sakarya Block Chain"],
    "url": "https://sau-blockchain.vercel.app",
    "logo": "https://sau-blockchain.vercel.app/logo.png",
    "sameAs": [
      "https://www.instagram.com/saublockchain/",
      "https://x.com/saublockchain",
      "https://www.linkedin.com/company/sau-blockchain"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SAÜ Blockchain | Sakarya Üniversitesi Web3 Merkezi",
    "url": "https://sau-blockchain.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://sau-blockchain.vercel.app/arama?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const sitelinksSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Solana Ekosistemi",
        "description": "Rust & Anchor framework ile yüksek performanslı dApp geliştirme",
        "url": "https://sau-blockchain.vercel.app/egitim/solana"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Akıllı Kontratlar",
        "description": "Solidity, Rust ve Move dilleriyle güvenli ve optimize edilmiş akıllı kontrat yazımı",
        "url": "https://sau-blockchain.vercel.app/egitim/smart-contracts"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Web3 & DeFi",
        "description": "Merkeziyetsiz finans protokolleri, DEX entegrasyonları ve yield farming",
        "url": "https://sau-blockchain.vercel.app/egitim/web3-defi"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "NFT & Dijital Sanat",
        "description": "NFT standartları, metaverse entegrasyonları ve dijital varlık yönetimi",
        "url": "https://sau-blockchain.vercel.app/egitim/nft-art"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Blockchain Güvenliği",
        "description": "Akıllı kontrat denetimi, exploit analizi ve zincir üstü güvenlik pratikleri",
        "url": "https://sau-blockchain.vercel.app/egitim/security"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Web3 Eğitimleri",
        "description": "Bootcamp, hackathon ve workshop etkinlikleriyle kapsamlı eğitimler",
        "url": "https://sau-blockchain.vercel.app/egitim/web3-egitimleri"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSchema) }}
      />
    </>
  );
}
