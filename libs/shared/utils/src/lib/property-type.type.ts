/**
 * Get the type of a given property on an object
 *
 * @see https://stackoverflow.com/a/54432326/277039
 */
export type PropertyType<TObj, TProp extends keyof TObj> = TObj[TProp];
