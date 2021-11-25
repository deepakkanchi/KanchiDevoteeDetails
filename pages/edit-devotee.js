import Head from 'next/head'

import EditDevotee from '../components/EditDevotee'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edit Devotee</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <EditDevotee />

    </>
  )
}
