# Snug

A lightweight system of layout components for Preact, inspired by beautiful carpentry.

## The Components

Snug is a thin but opinionated wrapper around flexbox. It is based around the following concepts:

- `<Stack>` and `<Shelf>` create vertical and horizontal flex containers, respectively. They are absolutely positioned elements with `inset: 0`, so they stretch themselves to the edges of their nearest positioned ancestor and stick there, like an overprotective tarp.
- Within a Stack or Shelf, a `<Box>` creates a container. By default, a Box is just big enough to fit its content and does not expand or shrink. If the Boxes within a stack are too big or too numerous to fit onscreen, they will simply overflow and be hidden. If the Boxes within a shelf don't fit in one row, they'll wrap to multiple rows.
- Boxes have `position: relative`, so a Stack or Shelf inside a Box will stretch to fill the Box.
- Boxes take the following props:
  - `expand` tells the Box to fill any leftover space in its parent Stack or Shelf. If the Box's content is too big for the available space, the Box will take its size from its content and overflow its parent.
  - `clip` (only valid if using `expand`) tells the Box to be _no bigger_ than the available space in its parent. If the Box's content doesn't fit, it will overflow and be hidden.
  - `scroll` (only valid if using `clip`) tells the Box to display scrollbars if its content overflows.
  - `style`

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
