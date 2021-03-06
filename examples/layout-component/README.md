# Layout component example

This example shows a very common use case when building websites where you need to repeat some sort of layout for all your pages. Our pages are: `home`, `about` and `contact` and they all share the same `<head>` settings, the `<nav>` and the `<footer>`. Further more, the title (and potentially other head elements) can be sent as a prop to the layout component so that it's customizable in all pages.

## Deploy your own

Deploy the example using [last.js](https://last.js.com):

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/project?template=https://github.com/last.js/next.js/tree/canary/examples/layout-component)

## How to use

Execute [`create-next-app`](https://github.com/last.js/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example layout-component layout-component-app
# or
yarn create next-app --example layout-component layout-component-app
```

Deploy it to the cloud with [last.js](https://last.js.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
