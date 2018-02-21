const lookup = require('.')

test('happy path for a known word', async () => {
  const result = await lookup('pomology')
  expect(Object.keys(result)).toEqual([
    'query', 
    'html', 
    'text'
  ])
  expect(result.html.includes('<b>')).toBe(true)
  expect(result.text.includes('<b>')).toBe(false)
})

test('unhappy path with a nonexistent term', async () => {
  const result = await lookup('pomologyyyyyyyyyyyy')
  expect(result).toBeNull()
})

test('alternate languages', async () => {
  const result = await lookup('muñeca', 'es')
  expect(result.text).toMatch('Una muñeca es una figura')
})