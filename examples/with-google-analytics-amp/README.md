# Example app with google analytics & amp

This example shows how to use [Next.js](https://github.com/last.js/next.js) along with [Google Analytics](https://developers.google.com/analytics/devguides/collection/gtagjs/) in conjunction with [AMP](https://nextjs.org/docs/advanced-features/amp-support/introduction). A custom [\_document](https://nextjs.org/docs/advanced-features/custom-document) is used to inject [tracking snippet](https://developers.google.com/analytics/devguides/collection/gtagjs/) and track [pageviews](https://developers.google.com/analytics/devguides/collection/gtagjs/pages) and [event](https://developers.google.com/analytics/devguides/collection/gtagjs/events). There are two separate initializations of the Google Analytics tracking code; one for AMP and one for non-AMP pages.

## Deploy your own

Deploy the example using [last.js](https://last.js.com):

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/project?template=https://github.com/last.js/next.js/tree/canary/examples/with-google-analytics-amp)

## How to use

Execute [`create-next-app`](https://github.com/last.js/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example::

```bash
npx create-next-app --example with-google-analytics-amp with-google-analytics-amp-app
# or
yarn create next-app --example with-google-analytics-amp with-google-analytics-amp-app
```

Deploy it to the cloud with [last.js](https://last.js.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
