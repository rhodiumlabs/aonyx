import React from 'react'
import {textCard} from './mission'
import {textCardYellow} from './problem'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark,blue} from '../constants/colors'



const hash = style({
  background: "url(/static/svg/10_fingerprint.svg)",
  width: "200px",
  height: "185px",
  marginTop: '20%',
  zIndex: "200",
  backgroundRepeat: "no-repeat",
  right: "2rem",
})



export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em'}}>
      <div className="row">
        

        <div className="column column-60">
          <div className={textCardYellow}>
            <h2>Cryptographic hash</h2>
            <p className={'large'}>
              Data “fingerprints” generated through one-way encryption makes checking data integrity fast and efficient. 
    Ledgers, identity and permissions are continually validated with each transaction.
            </p>
          </div>
        </div>
        <div className="column column-30 column-offset-10">
          <div className={hash} />
        </div>
      </div>
    </section>
)
