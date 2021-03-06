import Head from 'next/head'

import MainPage from '../components/MainPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Devotee Details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MainPage />

    </>
  )
}
