import '@/styles/globals.css'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body>{children}</body>
    </html>
  )
}
export const metadata = {
  title: 'Stephan D Ramalho Portfolio',
  description: 'Welcome to my portfolio'
}
