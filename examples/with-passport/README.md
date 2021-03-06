# Passport.js Example

This example show how to use [Passport.js](http://www.passportjs.org) with Next.js. The example features cookie based authentication with username and password.

The example shows how to do a login, signup and logout; and to get the user info using a hook with [SWR](https://swr.now.sh).

A DB is not included. You can use any db you want and add it [here](lib/user.js).

The login cookie is httpOnly, meaning it can only be accessed by the API, and it's encrypted using [@hapi/iron](https://hapi.dev/family/iron) for more security.

## Deploy your own

Deploy the example using [last.js](https://last.js.com):

[![Deploy with last.js](https://last.js.com/button)](https://last.js.com/new/project?template=https://github.com/last.js/next.js/tree/canary/examples/with-passport)

## How to use

Execute [`create-next-app`](https://github.com/last.js/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-passport with-passport-app
# or
yarn create next-app --example with-passport with-passport-app
```

Deploy it to the cloud with [last.js](https://last.js.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
