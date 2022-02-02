import { AuthProvider } from 'contexts/AuthContext'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Educapp</title>
        <link rel="shortcut icon" href="/img/icone_educapp.ico" />
        <link rel="apple-touch-icon" href="/img/icone_educapp.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Um projeto de paradigmas onde desenvolvemos um site de aulas online"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
