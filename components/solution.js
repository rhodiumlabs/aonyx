import React from 'react'
import {textCard} from './mission'
import {textCardYellow} from './problem'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark,blue} from '../constants/colors'





export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em'}}>
      <div className="row">
        
        <div className="column column-60">
          <div className={textCardYellow}>
            <p className="large">We all deserve to live in a world where our peers, governments and companies are prepared for the worst </p>
          </div>

        </div>
        <div className="column column-30 column-offset-10">
          <div className={textCard}>
            <h5>AT THE CORE</h5>
            <p>
              At the core of Aonyx is using blockchain technologies,
              that is a online distributed ledger, messaging passing and storage. 
              It provides a user-friendly interface that is both trustworthy and transparent to all stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
)