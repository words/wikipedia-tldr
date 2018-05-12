const get = require('got')
const URL = require('url')

async function lookup (query, locale = 'en') {
  const url = URL.format({
    protocol: 'https',
    hostname: `${locale}.wikipedia.org`,
    pathname: `/api/rest_v1/page/summary/${query}`
  })
  console.log(url)

  let body
  try {
    const res = await get(url, {json: true})
    body = res.body
  } catch (err) {
    console.error(err)
    return null
  }

  return Object.assign({}, body, {query: query})
}

module.exports = lookup