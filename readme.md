# wikipedia-tldr 

> Grab the first paragraph of any Wikipedia page

Use it programmatically with JavaScript to fetch JSON, or use the command line interface (CLI) to look stuff up from your terminal.

## Programmatic Usage

Install it:

```sh
npm install wikipedia-tldr
```

Use it in JavaScript:

```js
const tldr = require('wikipedia-tldr')

tldr('somatology').then(result => {
  console.log(result)
})
```

The result looks like this:

```js
{
  query: "pomology",
  type: "standard",
  title: "Pomology",
  displaytitle: "Pomology",
  thumbnail: {
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Poire_Willermoz.jpg/241px-Poire_Willermoz.jpg",
    width: 241,
    height: 320
  },
  originalimage: {
    source: "https://upload.wikimedia.org/wikipedia/commons/9/95/Poire_Willermoz.jpg",
    width: 644,
    height: 856
  },
  lang: "en",
  description: "branch of botany that studies and cultivates fruit",
  extract: "Pomology is a branch of botany that studies and cultivates fruit. The denomination fruticulture—introduced from Romance languages —is also used.",
  extract_html: "<p><b>Pomology</b> is a branch of botany that studies and cultivates fruit. The denomination <b>fruticulture</b>—introduced from Romance languages —is also used.</p>"
}
```

If no result is found, `null` is returned.

The default language is English `en`, but you can specify a different language
with an optional secondar argument to the function:

```js
tldr('muñeca', 'es')
```

For available language codes, see the [List of Wikipedias](https://en.wikipedia.org/wiki/List_of_Wikipedias).

## CLI Usage

```
npm i -g wikipedia-tldr && wikipedia-tldr pomology
```

or use [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

```sh
$ npx wikipedia-tldr zymology
npx: installed 62 in 4.301s
English

Alternative forms
zumology (dated)
Etymology
From zymo- +‎ -logy.
Noun
zymology (uncountable)
(zymurgy) A treatise on the fermentation of liquors, or the doctrine of fermentation.
The science of or knowledge concerning fermentation.
Translations


References
zymology in Webster’s Revised Unabridged Dictionary, G. & C. Merriam, 1913
The Century Dictionary, The Century Co., New York, 1914
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [cheerio](https://github.com/cheeriojs/cheerio): Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
- [got](): Simplified HTTP requests

## Dev Dependencies

- [jest](https://github.com/facebook/jest): Delightful JavaScript Testing.


## License

MIT
