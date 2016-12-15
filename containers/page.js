import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
  render () {
    return <div>
      <Head>
        <title>Aonyx</title>
        <meta charSet="utf-8"/>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:800" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.1.0/milligram.min.css" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Work+Sans:800" rel="stylesheet" />
      </Head>
      <main className={"wrapper "+this.props.className}>
        {this.props.children}
      </main>
    </div>
  }
}