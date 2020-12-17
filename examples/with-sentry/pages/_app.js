import { init } from '../utils/sentry'

init()

export default function App({ Component, pageProps, err }) {
  // Workaround for https://github.com/last.js/next.js/issues/8592
  return <Component {...pageProps} err={err} />
}
