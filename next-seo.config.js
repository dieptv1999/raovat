export default {
  title: process.env.NEXT_PUBLIC_TITLE_WEB || `Rao vặt 24h`,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    site_name: `${process.env.NEXT_PUBLIC_TITLE_WEB || `Rao vặt 24h`} - Kênh rao vặt, mua bán tốt nhất Việt Nam`,
    url: process.env.NEXT_PUBLIC_SEO_DEFAULT_URL,
    description: 'Kênh rao vặt, mua bán tốt nhất Việt Nam',
    images: [
      {
        url: 'http://raovat24h.net/images/investor_frontpage/raovat24h.png',
        description: "TrustKeys NFT Market Image" || '',
        width: 1000,
        height: 541,
        type: 'image/png',
        alt: `${process.env.NEXT_PUBLIC_TITLE_WEB || `Rao vặt 24h`} - Kênh rao vặt, mua bán tốt nhất Việt Nam`,
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      httpEquiv: 'Content-Security-Policy',
      content: 'upgrade-insecure-requests'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://raovat24h.net/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://raovat24h.net/favicon.png',
      sizes: '76x76'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
  ]
}
