// noinspection JSUnusedGlobalSymbols
/**
 * bind function is a polyfill for Function.prototype.bind
 * @param f - function to bind
 * @param context - context to bind
 * @returns bound function
 * @example
 * const bound = bind(function (a, b) {
 *    return a + b
 *  }, {a: 1})
 *  bound(2) // 3
 *  bound(3) // 4
 * */
export function bind<T, U extends any[], V>(
  f: (this: T, ...args: U) => V,
  context: T,
): (...args: U) => V {
  return function bound(this: T, ...args: U): V {
    return f.apply(context, args)
  }
}
