# is.js
Simple utility library for check of javascript variables on specific type or condition.

## Content
+ [Installation](#installation)
+ [Example](#example)
+ [API](#api)
    + [isString](#api-is-string)
    + [isNumber](#api-is-number)
    + [isBigNumber](#api-is-big-number)
    + [isBoolean](#api-is-boolean)
    + [isSymbol](#api-is-symbol)
    + [isUndefined](#api-is-undefined)
    + [isNull](#api-is-null)
    + [isPrimitive](#api-is-primitive)
    + [isFunction](#api-is-function)
    + [isRecord](#api-is-record)
    + [isObject](#api-is-object)
    + [isArray](#api-is-array)
    + [isInstanceOf](#api-is-instance-of)
    + [isObjectEmpty](#api-is-object-empty)

## [Installation](#installation)
npm\
```npm install --save-dev @maksims/is.js```

pnpm\
```pnpm add sax @maksims/is.js```

yarn\
```yarn add @maksims/is.js```

## [Example](#example)
```js
import { isString } from "@maksims/is.js";

function doStuff(prop) {
    if(!isString(prop)) {
        // do stuff
    }

    // do stuff
};

doStuff();
```

## [API](#api)
### [isString](#api-is-string)
Check if given value is type of `string`.
### [isNumber](#api-is-number)
Check if given value is type of `number`.
### [isBigNumber](#api-is-big-number)
Check if given value is type of `bigint`.
### [isBoolean](#api-is-boolean)
Check if given value is type of `boolean`.
### [isSymbol](#api-is-symbol)
Check if given value is type of `symbol`.
### [isUndefined](#api-is-undefiend)
Check if given value is type of `undefiend`.
### [isNull](#api-is-null)
Check if given value is type of `null`.
### [isPrimitive](#api-is-primitive)
Check if given value is any of javascript primitive types, like `string`, `number`, `bigint`, `boolean`, `undefined`, `null` or `symbol`.
### [isFunction](#api-is-function)
Check if given value is type of generic function `T`.
### [isRecord](#api-is-record)
Check if given value is a plain javascript object.
```js
import { isRecord } from "@maksims/is.js";

isRecord({ name: "Max Musterman" }); // true
isRecord(new Map());                 // false
```
### [isObject](#api-is-object)
Check if given value is a any javascript object, exclude `null` and `array`.
```js
import { isObject } from "@maksims/is.js";

isObject({ name: "Max Musterman" }); // true
isObject(new Map());                 // true
isObject(null);                      // false
```
### [isArray](#api-is-array)
Check if given value is array of generic type `T[]`.
### [isInstanceOf](#api-is-instance-of)
Check if given value is instance of specific javascript object.
```js
import { isInstanceOf } from "@maksims/is.js";

isInstanceOf(20, Number);             // false
isInstanceOf(new Number(20), Number); // true
```
### [isObjectEmpty](#api-is-object-empty)
Check if object has no properties.
> [!IMPORTANT]
> Work only with enumirable properties.
