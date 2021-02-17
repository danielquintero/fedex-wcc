// @see https://www.sitepoint.com/compile-time-immutability-in-typescript/#immutablefunctionparameters
// FIXME find a way to declare this type (and other types) without having to import them

export type Immutable<T> = {
	readonly [K in keyof T]: Immutable<T[K]>;
};
