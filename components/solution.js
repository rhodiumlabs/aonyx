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
            <p className="large">Aonyx is a new protocol for risk transfer. We are combining 
	    theoretical and crowdsourced statistical approaches to create a novel hybrid approach 
	    to better understand and price risk.</p>
          </div>

        </div>
        <div className="column column-30 column-offset-10">
          <div className={textCard}>
            <h5>AT THE CORE</h5>
            <p> We are combining classic actuarial methods with 
	    state of the art deep learning techniques
	    to build smarter and more precise risk transfer rails.
            </p>
          </div>
        </div>
      </div>
    </section>
)
