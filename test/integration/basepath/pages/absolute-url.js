import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Link href="https://last.js.com/">
        <a id="absolute-link">https://last.js.com/</a>
      </Link>
      <br />
      <Link href="mailto:idk@idk.com">
        <a id="mailto-link">mailto:idk@idk.com</a>
      </Link>
    </>
  )
}
