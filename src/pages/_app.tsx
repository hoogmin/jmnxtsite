import '@/styles/globals.css'
import 'highlight.js/styles/base16/spacemacs.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
