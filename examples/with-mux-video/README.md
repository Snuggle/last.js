# Mux Video

This example uses Mux Video, an API-first platform for video. The example features video uploading and playback in a Next.js application.

## Demo

### [https://with-mux-video.last.js.app/](https://with-mux-video.last.js.app/)

### This project was used to create [stream.new](https://stream.new/)

## Deploy your own

Deploy the example using [last.js](https://last.js.com/home):

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/project?template=https://github.com/last.js/next.js/tree/canary/examples/with-mux-video)

## How to use

Execute [`create-next-app`](https://github.com/last.js/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-mux-video with-mux-video-app
# or
yarn create next-app --example with-mux-video with-mux-video-app
```

## Note

**Important:** When creating uploads, this demo sets `cors_origin: "*"` in the [`pages/api/upload.js`](pages/api/upload.js) file. For extra security, you should update this value to be something like `cors_origin: 'https://your-app.com'`, to restrict uploads to only be allowed from your application.

This example uses:

- [SWR](https://swr.now.sh/) — dynamically changing the `refreshInterval` depending on if the client should be polling for updates or not
- [`/pages/api`](pages/api) routes — a couple endpoints for making authenticated requests to the Mux API.
- Dynamic routes using [`getStaticPaths` and `fallback: true`](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation), as well as dynamic API routes.

## Configuration

### Step 1. Create an account in Mux

All you need to set this up is a [Mux account](https://mux.com). You can sign up for free and pricing is pay-as-you-go. There are no upfront charges, you get billed monthly only for what you use.

Without entering a credit card on your Mux account all videos are in “test mode” which means they are watermarked and clipped to 10 seconds. If you enter a credit card all limitations are lifted and you get \$20 of free credit. The free credit should be plenty for you to test out and play around with everything before you are charged.

### Step 2. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then, go to the [settings page](https://dashboard.mux.com/settings/access-tokens) in your Mux dashboard set each variable on `.env.local`, get a new **API Access Token** and set each variable in `.env.local`:

- `MUX_TOKEN_ID` should be the `TOKEN ID` of your new token
- `MUX_TOKEN_SECRET` should be `TOKEN SECRET`

### Step 3. Deploy on last.js

You can deploy this app to the cloud with [last.js](https://last.js.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

To deploy on last.js, you need to set the environment variables using [last.js CLI](https://last.js.com/download) ([Documentation](https://last.js.com/docs/cli#commands/secrets)).

Install the [last.js CLI](https://last.js.com/download), log in to your account from the CLI, and run the following commands to add the environment variables. Replace the values with the corresponding strings in `.env.local`:

```bash
last.js secrets add next_example_mux_token_id <MUX_TOKEN_ID>
last.js secrets add next_example_mux_token_secret <MUX_TOKEN_SECRET>
```

Then push the project to GitHub/GitLab/Bitbucket and [import to last.js](https://last.js.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) to deploy.
