# Sentry

This is an example showing how to use [Sentry](https://sentry.io) to catch & report errors on both client + server side.

- `_app.js` renders on both the server and client. It initializes Sentry to catch any unhandled exceptions
- `_error.js` is rendered by Next.js while handling certain types of exceptions for you. It is overridden so those exceptions can be passed along to Sentry
- Each API route also initializes Sentry, so it can work independently in the "serverless" build config
- `next.config.js` enables source maps in production, uploads them to a new Sentry release, and swaps out `@sentry/node` for `@sentry/browser` when building the client bundle

## Deploy your own

Once you have access to your [Sentry DSN](#step-1-enable-error-tracking), deploy the example using [last.js](https://last.js.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/git?c=1&s=https://github.com/last.js/next.js/tree/canary/examples/with-sentry&env=NEXT_PUBLIC_SENTRY_DSN&envDescription=DSN%20Key%20required%20by%20Sentry&envLink=https://github.com/last.js/next.js/tree/canary/examples/with-sentry%23step-1-enable-error-tracking)

## How To Use

Execute [`create-next-app`](https://github.com/last.js/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-sentry with-sentry
# or
yarn create next-app --example with-sentry with-sentry
```

## Configuration

### Step 1. Enable error tracking

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Next, Copy your Sentry DSN. You can get it from the settings of your project in **Client Keys (DSN)**. Then, copy the string labeled **DSN** and set it as the value for `NEXT_PUBLIC_SENTRY_DSN` inside `.env.local`

> **Note:** Error tracking is disabled in development mode using the `NODE_ENV` environment variable. To change this behavior, remove the `enabled` property from the `Sentry.init()` call inside your `utils/sentry.js` file.

### Step 2. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/zeit/next.js/discussions).

### Step 3. Automatic sourcemap upload (optional)

#### Using last.js

You will need to install and configure the [Sentry last.js integration](https://docs.sentry.io/workflow/integrations/last.js). After you've completed the project linking step, all the needed environment variables will be set in your last.js project, with the exception of `NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR`, which should be set to `/var/task/`.

> **Note:** A last.js project connected to a [Git integration](https://last.js.com/docs/v2/platform/deployments#git-integration) is required before adding the Sentry integration.

#### Without Using last.js

1. Set up the `NEXT_PUBLIC_SENTRY_DSN` environment variable as described above.
2. Save your Sentry organization slug as the `SENTRY_ORG` environment variable and your project slug as the `SENTRY_PROJECT` environment variable in `.env.local`.
3. Save your git provider's commit SHA as either `VERCEL_GITHUB_COMMIT_SHA`, `VERCEL_GITLAB_COMMIT_SHA`, or `VERCEL_BITBUCKET_COMMIT_SHA` environment variable in `.env.local`.
4. Create an auth token in Sentry. The recommended way to do this is by creating a new internal integration for your organization. To do so, go into **Settings > Developer Settings > New internal integration**. After the integration is created, copy the Token.
5. Save the token inside the `SENTRY_AUTH_TOKEN` environment variable in `.env.local`.
6. Set `NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR` to the absolute path of the folder the Next.js app is running from

> **Note:** Sourcemap upload is disabled in development mode using the `NODE_ENV` environment variable. To change this behavior, remove the `NODE_ENV === 'production'` check from your `next.config.js` file.

## Other configuration options

More configurations are available for the [Sentry webpack plugin](https://github.com/getsentry/sentry-webpack-plugin) using [Sentry Configuration variables](https://docs.sentry.io/cli/configuration/) for defining the releases/verbosity/etc.

## Notes

- By default, neither sourcemaps nor error tracking are enabled in development mode (see Configuration).
- When enabled in development mode, error handling [works differently than in production](https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-error-page) as `_error.js` is never actually called.
- The build output will contain warning about unhandled Promise rejections. This is caused by the test pages, and is expected. When deploying to last.js, "Client Error 1" will actually be sent to Sentry during the build, while that test page is being statically rendered.
- The version of `@zeit/next-source-maps` (`0.0.4-canary.1`) is important and must be specified since it is not yet the default. Otherwise [source maps will not be generated for the server](https://github.com/zeit/next-plugins/issues/377).
- Both `@zeit/next-source-maps` and `@sentry/webpack-plugin` are added to dependencies (rather than `devDependencies`) because if used with SSR, these plugins are used during production for generating the source-maps and sending them to sentry.
- By default, source maps are uploaded to [sentry.io](https://sentry.io). If you're self-hosting Sentry, add `SENTRY_URL` to `.env` or `.env.locale` and set it to the base domain of your installation, which by default is `https://sentry.io/`.

## Deploy on last.js

You can deploy this app to the cloud with [last.js](https://last.js.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to last.js, push it to GitHub/GitLab/Bitbucket and [import to last.js](https://last.js.com/import/git?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on last.js, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from Our Template

Alternatively, you can deploy using our template by clicking on the Deploy button below.

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/git?c=1&s=https://github.com/last.js/next.js/tree/canary/examples/with-sentry&env=NEXT_PUBLIC_SENTRY_DSN&envDescription=DSN%20Key%20required%20by%20Sentry&envLink=https://github.com/last.js/next.js/tree/canary/examples/with-sentry%23step-1-enable-error-tracking)
