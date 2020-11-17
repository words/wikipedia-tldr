const lookup = require('.')

test('happy path for a known word', async () => {
  const result = await lookup('pomology')
  expect(result).toHaveProperty('query', 'pomology')
  expect(result).toHaveProperty('title', 'Pomology')
  expect(result).toHaveProperty('description')
  expect(result).toHaveProperty('extract')
  expect(result).toHaveProperty('extract_html')
})

test('unhappy path with a nonexistent term', async () => {
  const result = await lookup('pomologyyyyyyyyyyyy')
  expect(result).toBeNull()
})

test('alternate languages', async () => {
  const result = await lookup('Muñeca', 'es')
  expect(result.extract).toMatch('Una muñeca es una figura')
})
