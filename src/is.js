/**
 *  @typedef {abstract new(args: any[]) => any} Constructable
 */

/**
 *  @param {any} something
 *  @returns {something is string}
 */
export const isString     = (something) => something?.constructor?.prototype === String.prototype;
/**
 *  @param {any} something
 *  @returns {something is number}
 */
export const isNumber     = (something) => something?.constructor?.prototype === Number.prototype;
/**
 *  @param {any} something
 *  @returns {something is bigint}
 */
export const isBigNumber  = (something) => something?.constructor?.prototype === BigInt.prototype;
/**
 *  @param {any} something
 *  @returns {something is boolean}
 */
export const isBoolean    = (something) => something?.constructor?.prototype === Boolean.prototype;
/**
 *  @param {any} something
 *  @returns {something is symbol}
 */
export const isSymbol     = (something) => something?.constructor?.prototype === Symbol.prototype;
/**
 *  @param {any} something
 *  @returns {something is undefined}
 */
export const isUndefined  = (something) => something === undefined;
/**
 *  @param {any} something
 *  @returns {something is null}
 */
export const isNull       = (something) => something === null;
/**
 *  @param {any} something
 *  @returns {boolean}
 */
export const isPrimitive  = (something) => (
  isString(something)    ||
  isNumber(something)    ||
  isNull(something)      ||
  isUndefined(something) ||
  isBoolean(something)   ||
  isBigNumber(something) ||
  isSymbol(something)    
);
/**
 *  @template T
 *  @param {any} something
 *  @returns {something is T}
 */
export const isFunction   = (something) => something?.constructor?.prototype === Function.prototype;
/**
 *  @template T
 *  @param {any} something
 *  @returns {something is T[]}
 */
export const isArray      = (something) => Array.isArray(something);
/**
 *  @template T
 *  @param {any} something
 *  @returns {something is T}
 */
export const isObject     = (something) => typeof something === "object" && !isNull(something) && !isArray(something);
/**
 *  @template {string | number | symbol} K
 *  @template V
 *  @param {any} something
 *  @returns {something is Record<K, V>}
 */
export const isRecord     = (something) => something?.constructor?.prototype === Object.prototype;
/**
 *  @template {Constructable} T
 *  @param {any} something
 *  @param {T} Constructor
 *  @returns {something is InstanceType<T>}
 */
export const isInstanceOf = (something, Constructor) => something instanceof Constructor;
/**
 *  @param {any} something
 *  @returns {boolean}
 */
export const isObjectEmpty = (something) => {
  for(let _ in something) {
    return false;
  }

  return true;
};
