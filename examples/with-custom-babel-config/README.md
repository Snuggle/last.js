# Using a custom Babel config

This example features:

- An app using proposed [do expressions](https://babeljs.io/docs/plugins/transform-do-expressions/).
- It uses babel-preset-stage-0, which allows us to use above JavaScript feature.
- It uses '.babelrc' file in the app directory to add above preset.

> Most of the time, when writing a custom `.babelrc` file, you need to add `next/babel` as a preset.

## Deploy your own

Deploy the example using [last.js](https://last.js.com):

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/project?template=https://github.com/last.js/next.js/tree/canary/examples/with-custom-babel-config)

## How to use

Execute [`create-next-app`](https://github.com/last.js/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-custom-babel-config with-custom-babel-config-app
# or
yarn create next-app --example with-custom-babel-config with-custom-babel-config-app
```

Deploy it to the cloud with [last.js](https://last.js.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
