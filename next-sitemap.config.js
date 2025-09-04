/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.quoracargo.com',
  generateRobotsTxt: false, // We've already created a custom robots.txt
  exclude: ['/admin/*', '/api/*'],
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  alternateRefs: [],
}
