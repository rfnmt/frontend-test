# Front-End Test Using React + TypeScript + Vite

to start project, run:

```
yarn dev
```

## Checklist

-   [x] SASS
-   [x] react router
-   [x] Redux & RTK
-   [x] Vite JS
-   [x] List Virtualization
-   [x] BEM
-   [x] TypeScript
-   [x] Documentation

# Project Overview

The vendor page of Snappfood - Front-End technical task

## Git

-   commits follow the `Conventional Commits` rules.
-   Fot more details, see **here**[https://www.conventionalcommits.org/en/v1.0.0/]

## Bundler

-   This project utilizes `Vite` as its bundler.
-   The Vite configuration is modular and maintainable, written using native ESM modules for ease of use & more speed.

## Styling

-   Styling in this project is achieved through the use of `SASS` and `SASS Modules`.

## APIs

-   The project relies on the `Axios` package API for handling API requests.

-   The API structure consists of three main parts:
    1. **API service:** Where we initiate Axios config.
    2. **Request Functions:** functions on top of axios methods to handle each request separately.
    3. **useAPI Hook:** A utility hook that simplifies using the `Request Functions` in a declarative manner.

## State Management Using RTK

-   Reducers and actions are created using `Redux Toolkit` slices with complete TypeScript support.
-   Redux devtools is accessible by default.

## Infinite Loading and Virtualized Lists

-   Infinite loading is implemented using `react-window` & `react-window-infinite-loader`.

## Lint-Staged & Husky

-   lint-staged ensures that only files that have been staged for commit are linted, helping to catch potential issues before they are committed.

-   Husky ensures code quality checks and tests are run before allowing commits. It helps maintain a consistent code quality throughout the project.
