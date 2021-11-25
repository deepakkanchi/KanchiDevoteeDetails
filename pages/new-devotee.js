import Head from 'next/head'

import NewDevotee from '../components/NewDevotee'

export default function Home() {
  return (
    <>
      <Head>
        <title>New Devotee</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NewDevotee />

    </>
  )
}
