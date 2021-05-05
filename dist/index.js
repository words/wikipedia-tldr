const defaultUnwantedProps = [
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

async function lookup (
  query,
  locale = 'en',
  followRedirects = false,
  unwantedProps = defaultUnwantedProps
) {
  const url = new URL(`https://${locale}.wikipedia.org`)
  const params = { followRedirects }

  url.pathname = `/api/rest_v1/page/summary/${encodeURIComponent(query)}`
  url.search = new URLSearchParams(params).toString()

  let body

  try {
    const res = await fetch(url).then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res
    })
    body = await res.json()
  } catch (err) {
    return null
  }

  unwantedProps.forEach(prop => {
    delete body[prop]
  })

  if (body.text) {
    body.text = body.text
      .trim()
      .replace(/\[\d+\]/g, '')
  } // remove footnotes like [1]

  if (body.html) body.html = body.html.trim()

  return Object.assign({}, { query: query }, body)
}


export default lookup
