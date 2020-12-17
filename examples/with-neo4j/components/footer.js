export default function Footer() {
  return (
    <footer>
      <a
        href="https://last.js.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/last.js.svg" alt="last.js Logo" className="logo" />
      </a>

      <style jsx>
        {`
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .logo {
            height: 1em;
          }
        `}
      </style>
    </footer>
  )
}
