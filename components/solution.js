import React from 'react'
import {textCard} from './mission'
import {textCardYellow} from './problem'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark,blue} from '../constants/colors'





export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em'}}>
      <div className="row">
        
        <div className="column column-60">
          <div className={textCardYellow} style={{display: 'flex', alignItems: 'center'}}>
            <p className="large">Aonyx is the system that enables public and 
    private sectors to work together to save lives, distribute resources and rebuild together. .</p>
          </div>

        </div>
        <div className="column column-30 column-offset-10">
          <div className={textCard}>
            <h5>AT THE CORE</h5>
            <p>
              Aonyx utilizes blockchain technologies: from smart contracts, cryptographic hashes, 
    messaging passing, and immutable storage. 
    It provides the user-friendly interface that is both trustworthy and transparent to all stakeholders. 
            </p>
          </div>
        </div>
      </div>
    </section>
)
