import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { ContextProvider } from '../context/ContextProvider'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </ContextProvider>
  )
}

export default MyApp
