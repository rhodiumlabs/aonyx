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
            <p className="large"> Aonyx completely reinvents what it means to analyze risk. 
                                   We are building a technology-first reinsurnace company, 
                                    that enables public and private sectors to work together during catestrophic events.</p>
          </div>

        </div>
        <div className="column column-30 column-offset-10">
          <div className={textCard}>
            <h5>AT THE CORE</h5>
            <p> Innovating from the protocol all the way up to the interface. 
    Companies ensuring basic needs, risk and survival, should built to last, but also develop agility to 
    remain on par with emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
)
