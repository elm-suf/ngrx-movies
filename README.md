# NgrxMovies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Setup

`pnpm install`

## commands

- tailwind

  -
  - `install -D tailwindcss postcss autoprefixer`
  - `npx tailwindcss init`

- ngrx
  - `npm install @ngrx/{store,store-devtools,entity,effects}`
  - `ng g module root-store --flat false --module app.module.ts`
  - #### Entity Feature Module approach
    -  `ng g module root-store/{my-feature}-store --flat false --module root-store/root-store.module.ts`
    - 

- ngrx - manual
  - ACTIONS FORLDER : 
      - feature.action.ts + index.ts
  - REDUCER FORLDER : 
      - feature.reducer.ts + index.ts
  - 