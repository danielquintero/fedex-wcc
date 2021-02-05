# Web Coding Challenge

<p align="center"><img src="https://logos-marcas.com/wp-content/uploads/2020/04/FedEx-Logo.png" width="450"></p>

## WCC (Web Coding Challenge)

WCC is the application implementing the requirements laid out in the assessment given by Fedex to complete the following steps:

- Build a single page app with a sign-up form. ✅
- The form should allow users to enter first name, last name, email, and password. ✅
- All fields are required. ✅
- Password validation:
  - Should be a minimum of eight characters, ✅
  - Should contain lower and uppercase letters, ✅
  - Should not contain user’s first or last name. ✅
- Email should be validated but there are various ways of accomplishing this. So, show us what
  you consider as a proper email validation. ✅
- The form should send a POST request to https://demo-api.now.sh/users. ✅

### Getting started

- Make sure to install dependencies, run `npm install`
- For better dx you can install nx globally `npm i -g @nrwl/cli`, this will allow you to run any nx command from terminal. All possible nx commands are listed toward the end of this file.

### How to run the project

To run WCC simply run `nx serve` or `npm start`, make sure you have installed depedencies `npm i` beforehand.

### Test & lint targets

To run lint and unit test, you can simply run `nx run-many --target=test --all --parallel` or `nx run-many --target=lint --all --parallel` for testing or linting every app/library, respectively.

Integration tests are also available for the features requested. You can run Cypress by `nx run wcc-e2e:e2e --watch`.

## Aproaching the assessment

### General knowledge

For the assessment, I kept in mind the requirements, mentioned above, I used the tools that I am more experienced with and I think have the best DX. Furthermore, I have used some extras to showcase how some organisational challenges e.g.(orchestration of frontend applications, design system, mocking, testing etc) can be addressed with proper tooling (NX monorepo, storybook, miragejs, ngspectator).

The application has one main protected/guarded route `/app/dashboard` which requires a user to be signed in. Unprotected routes are `/signin` and `/signup`. This assessment focused on the second one, where the logic/validation is implemented as requested. The other route allows a user to login to a "mocked" dashboard but it is outside the scope of the excersie and it's only there to give an idea of how the sign in could be implemented.

### Store

Ngrx is used as state management library. I implemented a facade abstraction layer to decouple stateful components/containers from an specific library implementation as well as to accomodate for a comprenhensible API.

### Styles

To quickly help put together some pleasing UI, I have used Tailwind CSS. I tried to make templates more readable by using `@apply` in `.css` files rather than cluttered the templates.

### Domain Driven Design

This is out of scope for the assessment but I thought would be good to share how we could follow a DDD approach, we could generated clients/types from Backend specifications (Swagger, OpenAPI) to enforce the correctness of our frontend applications.

The scenario for this example is simplified, but would not take much more effort to make it a real life example. `libs/shared/iam/data-access/src/lib/+state/iam.models.ts` shows how we can produce frontend library types from DTO types thanks to Typescript utility types. Besides inferring generated types, we can also generate entire clients (angular services) to fully rely on the Backend contract signature.

### Mocking

[Miragejs](https://miragejs.com/) is a fantastic library to mock requests for faster development. It stands out from many other mocking libraries because it allows to do some more complex mocking, you can basically think of miragejs as a persistent mocking library. I have set up an example of how we can use mirage with Angular both for test and for development. If you are curious how does this mocking server works in this app you can check `libs/shared/util-mock-server`.

## ---------------------- NX Dev Extensions ----------------------

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@fedex/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
