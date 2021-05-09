const lookup = require('./dist/index.node.js')

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


// cli tests
const { spawn } = require('child_process')

test('cli', async (done) => {
  const reverse = spawn('node', ['cli.js', 'pomology'])
  const chunks = []

  reverse.stdout.on('data', (chunk) => {
    chunks.push(chunk)
  });

  reverse.stdout.on('end', () => {
    const output = Buffer
      .concat(chunks)
      .toString()

    expect(output).toContain('Pomology:')
    done()
  });
});