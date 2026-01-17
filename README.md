# check if a value is nonpresent

basically the same as is-blank.

## installation
```sh
npm install is-nonpresent
```

## usage
```js
const isNonpresent = require('is-nonpresent')
 
isNonpresent([])              // => true
isNonpresent({})              // => true
isNonpresent(0)               // => true
isNonpresent(function(){})    // => true
isNonpresent(null)            // => true
isNonpresent(undefined)       // => true
isNonpresent('')              // => true
isNonpresent('    ')          // => true
isNonpresent('\r\t\n ')       // => true
 
isNonpresent(['a', 'b'])      // => false
isNonpresent({ a: 'b' })      // => false
isNonpresent('string')        // => false
isNonpresent(42)              // => false
isNonpresent(function(a,b){}) // => false
```

related:

- [is-present](https://npmjs.com/is-present)
- [is-blank](https://npmjs.com/is-blank)
- [is-whitespace](https://npmjs.com/is-whitespace)
- [is-empty](https://npmjs.com/is-empty)