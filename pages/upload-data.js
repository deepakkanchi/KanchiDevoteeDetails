import Head from 'next/head'

import UploadData from '../components/UploadData'

export default function Home() {
  return (
    <>
      <Head>
        <title>Upload Data</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <UploadData />

    </>
  )
}
