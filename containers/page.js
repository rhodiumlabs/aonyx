import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
  render () {
    return <div>
      <Head>
        <title>Aonyx</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.1.0/milligram.min.css" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Lato:100,200,300,500,600" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Bungee+Hairline|Poiret+One|Rajdhani|Source+Sans+Pro" rel="stylesheet" />
      </Head>
      <main className="wrapper">
        {this.props.children}
      </main>
    </div>
  }
}