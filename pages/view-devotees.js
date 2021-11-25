import Head from 'next/head'

import ViewDevotees from '../components/ViewDevotees'

export default function Home() {
  return (
    <>
      <Head>
        <title>View Devotees</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ViewDevotees />

    </>
  )
}
