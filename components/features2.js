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
            <h4>Anticipate with better analysis</h4>
            <p>Improved transparency and the most accurate information for future risk analysis. 
  Organizations use the accumulated data to develop accurate  risk of future catastrophic events, and the long term  implications. 
  As the event data is securely recorded, and constantly updated by other network participants; policies and claims are higher 
  quality and cover those affected more efficiently.</p>
          </div>
        </div>
        <div className="column column-33" style={{background: yellow}}>
          <div>
            <h3 className={headerCard}>Peer to peer economy</h3>
            <h4>Rebuilding Lives</h4>
            <p>By implementing these new technologies; repetitive, time consuming work is automated.  
  The public offices  can create a  well designed incentive program to encourage private organizations, 
  NGOs and citizens to work during a public emergency. This allows public and governmental organizations on   
  to focus on better, more sophisticated processes, and the long term effects of a catastrophic event. </p>
          </div>
        </div>
        <div className="column column-33" style={{background: blue}}>
          <div>
            <h3 className={headerCard}>Smart Cities</h3>
            <h4>Seamless Transportation</h4>
            <p>Rather than listening to the radio for weather and traffic conditions, your GPS will 
  automatically route the safest and fastest path for drivers to go, public emergency services will 
  be working off of the most up to date weather and traffic needs. Safe, reliable public transportation, 
  on time snow removal and well directed traffic to keep the roads efficient.</p>
          </div>
        </div>
      </div>
    </section>
)
