import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { ContextProvider } from '../context/ContextProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProvider>
  )
}

export default MyApp
