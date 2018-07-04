
# http-context

  High-level request & response object. Inspired by Koa's [context](http://koajs.com/#context).

  http-context is a single object that makes working with Node's `request`
  and `response` objects incredibly intuitive.

  Useful for building HTTP plugins outside of the context of Koa middleware.

## Example

```js
var ctx = context();
ctx.body = '<h2>hello world!</h2>';

assert('<h2>hello world!</h2>' == ctx.body);
assert('text/html' == ctx.type);
assert(200 == ctx.status);
assert(21 == ctx.length);
```

## Installation

```
npm install http-context
```

## Tests

```
npm install
make
```

## License

(The MIT License)

Copyright (c) 2015 Matthew Mueller &lt;matt@lapwinglabs.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
