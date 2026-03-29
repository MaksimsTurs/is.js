# is.js
Simple utility library with variable type checking functions.

## Documentation
The usage is quite simple and obviously, import the function which you need,
call the function and do you stuff
```js
import { isString } from "@maksims/is.js";
// do stuff
```
But there are two functions that may need some explanation, first function is `isObject` checks is passed
value a any valid javascript object exclude `null` and `Array`, for example
```js
import { isObject } from "@maksims/is.js";

isObject({})        // true
isObject({
    PI: 3.14,
    sum: (a, b) => a + b
})                  // true
isObject(new Map()) // true
isObject(20)        // false
isObject([])        // false
```
Second function `isRecord` function checks is passed value a plain javascript object, for example
```js
import { isObject } from "@maksims/is.js";

isObject({})        // true
isObject({
    PI: 3.14,
    sum: (a, b) => a + b
})                  // true
isObject(new Map()) // false
isObject(20)        // false
isObject([])        // false
```
