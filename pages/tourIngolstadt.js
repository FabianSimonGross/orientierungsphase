import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const TourMap = dynamic(() => import('../components/TourMapIngolstadt'), { ssr: false })

export default function Map () {
  // the page contents are in a separate component
  // because Leaflet can't handle SSR
  return (
    <>
      <Head>
        <title>Virtuelle Stadt- und Campusführung - Campus Ingolstadt</title>
        <meta name="description" content="Eine virtuelle Stadt- und Campusführung für die Erstis an der TH Ingolstadt - Campus Ingolstadt." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TourMap />
    </>
  )
}
