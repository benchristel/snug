# Snug

A lightweight system of layout components for Preact, inspired by beautiful carpentry.

## Fundamental Components

Snug is a thin but opinionated wrapper around flexbox. It is based around the following concepts:

- `<Box>`, a relatively positioned block element.
- `<Shelf>`, which puts boxes side by side in a flex row. A Shelf is as wide as its parent, and as tall as it needs to be to hold its children. If the children of a Shelf don't fit in one row, they'll wrap to multiple rows.
- `<Split>` and `<Region>` which, as you might expect, split an area of the screen into regions (e.g. sidebar and main content).
  - All children of a Split must be Regions.
  - Unlike Box and Shelf, a Split derives its size not from its children but from its parent. Specifically, a Split completely covers its nearest positioned ancestor.
  - If a Split doesn't have room for all its Regions, they will simply overflow and be hidden.
  - By default, a Region is only as large as it needs to be to contain its children.
  - However, regions can be set to `expand`, which will make them expand to fill available space in the Split.
  - If the children of a Region don't fit within the parent Split, the Region will show a scrollbar.
- A `<Spring>` is similar to a Box, but expands to fill unused space in its flex parent with `flex-grow: 1`. Used in Shelves and Regions.

## Features

- Compatible with right-to-left layouts by default

## Development

### Server and Typechecker

```
yarn dev
yarn ts
```

- Opening the project in **Visual Studio Code** automatically starts the dev server and `typescript` typechecker.
- The dev server runs at http://localhost:5173 (the port number is `vite` in 1337... sort of).
- Output appears in the terminal pane (accessed via `ctrl+~`).
- Type errors also show up in the problems pane (`ctrl+shift+M`).
- The server and typechecker stop automatically when VS Code quits.

### Tests

- **Tests** run in the browser. The test report appears at the top of the screen.
- The page will refresh (re-running the tests) whenever you save a file.
- The tests and test report are completely removed from production builds.
- You can write tests in-source, or in files named `*.test.*`, e.g. `example.test.ts`. The test file pattern is configured in `src/test-results.ts`.

The test framework is `@benchristel/taste`. For more information, see [@benchristel/taste on NPM](https://www.npmjs.com/package/@benchristel/taste).

### Formatting

- Files get auto-formatted when you commit, so you'll never check in inconsistently-formatted code. To disable this behavior, delete `.husky/pre-commit`.
- To format all files, run `yarn format`.
- The code formatter is `prettier`. See `.prettierrc` for configuration.

## Building for production

```
yarn build
```

This outputs files in the `dist` directory, which is symlinked to `docs`
for easy deployment to GitHub Pages.

To [smoketest](<https://en.wikipedia.org/wiki/Smoke_testing_(electrical)>) your production build locally before deploying it, run:

```
yarn smoke
```

This runs an HTTP server (via [`vite preview`](https://vitejs.dev/guide/cli.html#vite-preview)) and opens the built app in your browser.

## Deploying

To deploy your built app to GitHub Pages, go to the `Pages` tab of your repo's settings and change the directory to deploy from to `/docs`.

This template repo is deployed at https://benchristel.github.io/preact-typescript-vite-taste/
