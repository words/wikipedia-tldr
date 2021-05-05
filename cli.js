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
  if (result) {
    console.log(wrap(result.text))
  } else {
    console.log('no results :[')
  }
}

main()
