import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserState from '../context/UserState'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Calender Emulation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserState>
        <Component {...pageProps} />
      </UserState>
    </>
  )
}

export default MyApp