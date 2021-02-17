/**
 * Provided an array with elements, return a new array with unique values
 *
 * As seen here https://twitter.com/addyosmani/status/952805052086824960/photo/1
 *
 * @param input
 */
export function uniqueArray<T>(input: Array<T>): Array<T> {
	return [...new Set(input)];
}
