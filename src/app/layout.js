import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Fullstack Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
