#!/usr/bin/env node

const lookup = require('./dist/index.node')
const query = process.argv.slice(2)
const wrap = require('wordwrap')(80)

async function main () {
  if (!query.length) {
    console.log('Usage: wikipedia-tldr <term>')
    return
  }
  const result = await lookup(query)

  console.log(result)
  if (result) {
    console.log(`\x1b[33m%s\x1b[0m`, wrap(`${result.title}: ${result.description}`))
    console.log(wrap(result.extract))
  } else {
    console.log('no results :[')
  }
}

main()
