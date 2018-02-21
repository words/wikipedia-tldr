const get = require('got')
const URL = require('url')
const cheerio = require('cheerio')

async function lookup (query, locale = 'en') {
  const url = URL.format({
    protocol: 'https',
    hostname: `${locale}.wikipedia.org`,
    pathname: `/wiki/${query}`
  })

  let body
  try {
    const res = await get(url)
    body = res.body
  } catch (err) {
    return null
  }

  const $ = cheerio.load(body)
  const html = $('#mw-content-text p').first().html()
  const text = $('#mw-content-text p').first().text()
  return {query, html, text}
}

module.exports = lookup