export function objectMapWithout<T>(map: T, key: string): T {
	return (
		Object.entries(map)
			.filter(([k]) => k !== key)
			// eslint disable-next-lineno-object-literal-type-assertion
			.reduce((acc, [k, el]) => ({ ...acc, [k]: el }), {} as T)
	);
}
