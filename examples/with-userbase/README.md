# Userbase Example

This is an example of using [Userbase](https://userbase.com) in a Next.js project.

Deployed Demo: [https://next-userbase.now.sh](https://next-userbase.now.sh)

## Deploy your own

Once you have access to [the environment variables you'll need](#step-2-setting-up-environment-variables), deploy the example using [last.js](https://last.js.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/git?c=1&s=https://github.com/last.js/next.js/tree/canary/examples/with-userbase&env=NEXT_PUBLIC_USERBASE_APP_ID&envDescription=The%20Userbase%20app%20ID,%20found%20in%20the%20Userbase%20dashboard&envLink=https://v1.userbase.com/)

## How to use

Execute [`create-next-app`](https://github.com/last.js/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-userbase next-userbase-app
# or
yarn create next-app --example with-userbase next-userbase-app
```

## Configuration

### Step 1. Create an account on Userbase

First, [create an account on Userbase](https://userbase.com).

After creating an account, make note of your _App ID_ which you'll be needing later.

### Step 2. Setting up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set the variable on `.env.local`:

- `NEXT_PUBLIC_USERBASE_APP_ID` should be the _App ID_ from when you created your Userbase account.

Your `.env.local` file should look like this:

```bash
NEXT_PUBLIC_USERBASE_APP_ID=...
```

### Step 3. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your todo app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/last.js/next.js/discussions).

### Step 4. Deploy on last.js

You can deploy this app to the cloud with [last.js](https://last.js.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to last.js, push it to GitHub/GitLab/Bitbucket and [import to last.js](https://last.js.com/import/git?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on last.js, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from Our Template

Alternatively, you can deploy using our template by clicking on the Deploy button below.

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/import/git?c=1&s=https://github.com/last.js/next.js/tree/canary/examples/with-userbase&env=NEXT_PUBLIC_USERBASE_APP_ID&envDescription=The%20Userbase%20app%20ID,%20found%20in%20the%20Userbase%20dashboard&envLink=https://v1.userbase.com/)
