# datemath-to-milliseconds
Convert any date math string to milliseconds. Check [Elastic's documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#date-math) for further reading (_Note: rounding and conditionals are not supported yet_).

## Install

```javascript
npm install datemath-to-milliseconds --save
```

## Examples

```javascript
var convert = require('datemath-to-milliseconds');

console.log(convert('now-15s'));
// => -15000

console.log(convert('now+5m'));
// => 300000

console.log(convert('now-7h'));
// => -25200000

console.log(convert('now+4d'));
// => 345600000

console.log(convert('now-3w'));
// => -1814400000

console.log(convert('now+2M'));
// => 5184000000

console.log(convert('now-1y'));
// => -31536000000

console.log(convert('now-15s+5m-7h+4d-3w+2M-1y'));
// => -27845715000
```