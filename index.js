const get = require('got')
const URL = require('url')
const unwantedProps = [
  'content_urls', 
  'dir', 
  'revision', 
  'tid', 
  'timestamp', 
  'pageid', 
  'namespace', 
  'titles', 
  'api_urls'
]

async function lookup (query, locale = 'en') {
  const url = URL.format({
    protocol: 'https',
    hostname: `${locale}.wikipedia.org`,
    pathname: `/api/rest_v1/page/summary/${encodeURIComponent(query)}`
  })

  let body
  try {
    const res = await get(url, {json: true})
    body = res.body
  } catch (err) {
    return null
  }

  unwantedProps.forEach(prop => {
    delete body[prop]
  })

  return Object.assign({}, {query: query},  body)
}

module.exports = lookup