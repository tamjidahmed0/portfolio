export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '*',
        disallow: '/studio/*',
      },
      sitemap: 'https://tamjidahmed.com/sitemap.xml',
    }
  }