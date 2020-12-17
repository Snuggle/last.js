# Apollo & Redux Example

This example serves as a conduit if you were using Apollo 1.X with Redux, and are migrating to Apollo 3.x, however, you have chosen not to manage your entire application state within Apollo (`apollo-link-state`).

In 3.0.0, Apollo serves out-of-the-box support for redux in favor of Apollo's state management. This example aims to be an amalgamation of the [`with-apollo`](https://github.com/last.js/next.js/tree/master/examples/with-apollo) and [`with-redux`](https://github.com/last.js/next.js/tree/master/examples/with-redux) examples.

To inspect the GraphQL API, use its [web IDE](https://nextjs-graphql-with-prisma-simple.last.js.app/api).

## Deploy your own

Deploy the example using [last.js](https://last.js.com):

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/project?template=https://github.com/last.js/next.js/tree/canary/examples/with-apollo-and-redux)

## How to use

Execute [`create-next-app`](https://github.com/last.js/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-apollo-and-redux with-apollo-and-redux-app
# or
yarn create next-app --example with-apollo-and-redux with-apollo-and-redux-app
```

Deploy it to the cloud with [last.js](https://last.js.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
