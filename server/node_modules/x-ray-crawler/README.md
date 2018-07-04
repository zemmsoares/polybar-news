# x-ray Crawler

Friendly web crawler for [x-ray](http://github.com/lapwinglabs/x-ray).

## Features

- Extensible drivers
- Request and response hooks
- Rate limiting
- Delayed requests
- Concurrency support
- Request timeout
- Total request limiting

## Example

```js
function http(ctx, fn) {
  superagent.get(ctx.url, fn)
}

var crawl = Crawler(http)
  .throttle(3, '1s')
  .delay('1s', '10s')
  .concurrency(2)
  .limit(20)

crawl('http://lapwinglabs.com', function(err, ctx) {
  if (err) throw err
  console.log('status code: %s', ctx.status)
  console.log('status body: %s', ctx.body)
})
```

## Installation

```js
npm install x-ray-crawler
```

## API

Coming Soon.

## Test

> **Note:** Work in progress

```js
npm test
```

## License

(The MIT License)

Copyright (c) 2015 Matthew Mueller <matt@lapwinglabs.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
