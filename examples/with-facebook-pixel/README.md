## Example app using Facebook Pixel

This example shows how to use Next.js along with Facebook Pixel. A custom [\_document](https://nextjs.org/docs/advanced-features/custom-document) is used to inject [base code](https://developers.facebook.com/docs/facebook-pixel/implementation/?locale=en_US). A [\_app](https://nextjs.org/docs/advanced-features/custom-app) is used to track route changes and send page views to Facebook Pixel.

## Deploy your own

Deploy the example using [last.js](https://last.js.com):

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/project?template=https://github.com/last.js/next.js/tree/canary/examples/with-facebook-pixel)

## How to use

Execute [`create-next-app`](https://github.com/last.js/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-facebook-pixel with-facebook-pixel-app
# or
yarn create next-app --example with-facebook-pixel with-facebook-pixel-app
```

Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Set the `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` variable in `.env.local` to match your facebook app's pixel ID.

Deploy it to the cloud with [last.js](https://last.js.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
