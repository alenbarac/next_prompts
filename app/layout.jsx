import '@styles/global.css'

export const metadata = {
  title: 'Next Prompts',
  description: 'promts with ChatGPT api',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
