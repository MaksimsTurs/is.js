type Constructable = abstract new (args: any[]) => any;

export function isString(something: any): something is string;
export function isNumber(something: any): something is number;
export function isBigNumber(something: any): something is bigint;
export function isBoolean(something: any): something is boolean;
export function isSymbol(something: any): something is symbol;
export function isUndefined(something: any): something is undefined;
export function isNull(something: any): something is null;
export function isPrimitive(something: any): boolean;
export function isFunction<T>(something: any): something is T;
export function isRecord<K extends string | number | symbol, V = any>(something: any): something is Record<K, V>;
export function isArray<T = any>(something: any): something is T[];
export function isObject<T = any>(something: any): something is T;
export function isInstanceOf<T extends Constructable>(something: any, Constructor: T): something is InstanceType<T>;
export function isObjectEmpty(something: any): boolean;
