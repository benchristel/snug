# Snug

A lightweight system of layout components for Preact, inspired by beautiful carpentry.

## The Components

Snug is a thin but opinionated wrapper around flexbox. It is based around the following concepts:

- `<Stack>` and `<Shelf>` create vertical and horizontal flex containers, respectively.
- Within a Stack or Shelf, a `<Cubby>` creates a box that is just big enough to fit its content. Cubbies are typically used for headers, footers, and sidebars.
- By contrast, an `<Expanse>` creates an expanding region that will fill all the space not taken up by the Cubbies in the same Stack or Shelf.
- A `<Module>` is an absolutely positioned element with `inset: 0`. It stretches itself to the edges of its nearest positioned ancestor and sticks there, like an overprotective tarp. Typically, a Module is the topmost component of a Snug layout, because if it has no positioned ancestor then it will cover the entire viewport, which is usually what you want. Since Regions have `position: relative`, a Module inside a Region will cover that Region. Unlike Regions, Modules accept a `style` prop, so you can give them an appearance. By default, Modules do not have a scrollbar, and any content that does not fit within them will be hidden. You can make a Module scrollable by adding a `scroll` prop.

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
