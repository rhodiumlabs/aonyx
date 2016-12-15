import React from 'react'
import Head from 'next/head'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark, blue} from '../constants/colors'


export const textCard = css({
  '& p': {
    fontSize: '16px',
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    color: dark
  }
})

const textCardBlue = css({
  background: blue,
  padding: '2em',
  '& h1': {
    fontSize: '50px',
    fontFamily: 'Work Sans',
    '-webkitTextStroke': `3px ${dark}`,
    textTransform: 'uppercase',
    color: blue
  }
})

const headerCard = style({
    marginTop: '5em !important',
    marginBottom: '2em !important', 
    textAlign: 'center'
})

export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em', padding: '0 0'}}>
      <div className="row">
        <div className="column column-33" style={{background: blue}}>
          <div>
            <h3 className={headerCard}>Reinsurance</h3>
            <h4>Collaboration made simple</h4>
            <p>Shared data and better transparency between all stakeholders, through the use of smart contracts and decentralized 
  applications. Data can be validated by any authorized participant on the network, 
  therefore insurance policies and associated claim information is on a trusted network. 
  Event details are documented using cryptographic methods, resulting in a tamper-proof record of 
  all relevant information for the creation of higher quality policies and faster claim payout.
</p>
          </div>
        </div>
        <div className="column column-33" style={{background: yellow}}>
          <div>
            <h3 className={headerCard}>Peer to peer economy</h3>
            <h4>Fast, smart movement</h4>
            <p>Using decentralized applications and smart contracts  catastrophic events can trigger payments 
  through Aonyx to parties, vendors and private assistance for those in need. 
  When an event occurs that meets predefined conditions, Aonyx  accesses policyholders 
  data sources on the blockchain, then determine and activate payouts to and from contract parties.</p>
          </div>
        </div>
        <div className="column column-33" style={{background: blue}}>
          <div>
            <h3 className={headerCard}>Smart Cities</h3>
            <h4>Internet of things</h4>
            <p>Information capturing devices and smart contracts, Aonyx will be able to  prompt emergency services 
  when needed. By capturing data onto the immutable ledger— 
  this information will save time and resources on when is the right time to act. 
  Imagine WiFi drones, connected weather networks giving the most up to date data to citizens, 
  public workers, government offices and insurance companies when help is needed most.
</p>
          </div>
        </div>
      </div>
    </section>
)
