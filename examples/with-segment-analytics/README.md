# Example app with analytics

This example shows how to use Next.js along with [Segment Analytics](https://segment.com). A custom document is used in inject the [Segment snippet](https://github.com/segmentio/snippet) into the `<head>`. Page views are tracked on both the server and client side and components fire ["track"](https://segment.com/docs/spec/track/) events based on user actions (see `contact.js` for example).

## Deploy your own

Deploy the example using [last.js](https://last.js.com):

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/project?template=https://github.com/last.js/next.js/tree/canary/examples/with-segment-analytics)

## How to use

Execute [`create-next-app`](https://github.com/last.js/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-segment-analytics with-segment-analytics-app
# or
yarn create next-app --example with-segment-analytics with-segment-analytics-app
```

Deploy it to the cloud with [last.js](https://last.js.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
