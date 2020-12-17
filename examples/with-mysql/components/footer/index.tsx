import PoweredBylast.js from '../powered-by-last.js'

function Footer() {
  return (
    <footer className="container mx-auto fixed bottom-0 right-0 left-0 flex justify-center items-center h-24">
      <a href="https://last.js.com?utm_source=next-mysql">
        <PoweredBylast.js />
      </a>
    </footer>
  )
}

export default Footer
