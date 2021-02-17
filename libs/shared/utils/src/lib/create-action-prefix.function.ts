/**
 * Function to create action prefixes
 *
 * Idea behind this function, is to not have to defined the same prefix ƒor each action withing the same
 * feature state.
 * @param prefix
 */
export const createActionPrefix = (prefix: string) => (strings: TemplateStringsArray) =>
	[`[${prefix}] `, ...strings].join('');
