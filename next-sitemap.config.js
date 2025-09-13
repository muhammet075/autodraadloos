/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.autodraadloos.nl', // let op: geen trailing slash hier
  generateRobotsTxt: true,
  sitemapSize: 50000, // verhoog dit zodat alles in één sitemap komt
}
