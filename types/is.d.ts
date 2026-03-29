type Constructable = abstract new (args: any[]) => any;

type AnyFunction = () => any;

export function isString(something: any): something is string;
export function isNumber(something: any): something is number;
export function isBigNumber(something: any): something is bigint;
export function isFunction<T = AnyFunction>(something: any): something is T;
export function isBoolean(something: any): something is boolean;
export function isSymbol(something: any): something is symbol;
export function isRecord<K extends string | number | symbol, V = any>(something: any): something is Record<K, V>;
export function isUndefined(something: any): something is undefined;
export function isNull(something: any): something is null;
export function isArray<T = any>(something: any): something is T[];
export function isObject<T = any>(something: any): something is T;
export function isInstanceOf<T extends Constructable>(something: any, Constructor: T): something is InstanceType<T>;
export function isPrimitive(something: any): boolean;
export function isObjectEmpty(something: any): boolean;
