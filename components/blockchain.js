import React from 'react'
import {textCard} from './mission'
import {textCardYellow} from './problem'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark,blue} from '../constants/colors'

const blockchainContainer = style({
  background: blue,
  padding: '2em 2em',
  marginTop:'5em', 
  marginBottom: '5em'
})

const smallHeader = style({
    display: 'inline-block',
    fontSize: '18px',
    marginBottom: '0',
    letterSpacing: '1px',
    fontFamily: 'Work Sans',
    textTransform: 'uppercase',
    color: 'white'
})

const smallTtext = style({
    display: 'inline-block',
    fontSize: '18px',
    fontFamily: 'Open Sans',
    textAlign: 'center',
    color: 'white',
    padding: '2em'
})

export default () => (
    <section className={'container'}> <div className={'row'}>
    <div className={'container '+ blockchainContainer} >
      <div className="row" style={{textAlign: 'center'}}>
        <div className={"column "}>
          <h2 style={{padding: '2em'}}>BLOCKCHAIN</h2>
        </div>
      </div>
      <div className={"row "}>
        
        <div className={"column "}>
          <h4><i className="small-icon" style={{backgroundImage:'url(/static/svg/06_x.svg)', margin: '0 1em -0.9em 0'}}></i> centralized ledger</h4>
          <div style={{backgroundImage: "url('/static/svg/08_centralized.svg')", width:'400px',backgroundRepeat:'no-repeat', margin: 'auto', marginTop: '4em', height: '500px', backgroundPosition: '50%'}}>
            
          </div>
        </div>
        <div className={"column"}>
          <h4><i className="small-icon" style={{backgroundImage:'url(/static/svg/07_check.svg)', margin: '0 1em -0.9em 0'}}></i> blockchain ledger</h4>
          <div style={{backgroundImage: "url('/static/svg/09_decentralized.svg')", width:'400px',backgroundRepeat:'no-repeat', margin: 'auto', marginTop: '4em', height: '500px', backgroundPosition: '50%'}}>
          </div>
        </div>
      </div>
      <div className={'row'}>
        <div className={"column"}>
        <p className={smallTtext}>The advantage of a blockchain ledger is the verification and immutability of data on the network.  
        Each stakeholder independently records information and it is distributed across computers around the world, 
        rather than stored on one central authority. The point being the Blockchain records are locally decentralized 
        in a peer to peer (P2P) network, but still constitute a logically centralized immutable set.</p>
        </div>
      </div>
    </div>
    </div></section>
)
