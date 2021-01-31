# shared-design-system-icons

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test shared-design-system-icons` to execute the unit tests.

# Icons library

This library contains all the custom SVG icons provided by UX. Every icons is its own SVG file in `src/icons`.

To consume any icons, this library builds a tree-shakeable module.

## Regenerating the icons

If icons have been added, removed or modified (that is, the original svg files in src/svg), you can regenerate the typescript representation of them by invoking a custom Nx run command:

```shell script
nx run shared-design-system-icons:generate
```
