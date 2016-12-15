import React from 'react'
import {textCard} from './mission'
import {textCardYellow} from './problem'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark,blue} from '../constants/colors'


const smalltext = style({
    display: 'inline-block',
    fontSize: '18px',
    fontFamily: 'Open Sans',
    textAlign: 'center',
    color: 'white',
    padding: '2em'
})


export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em'}}>
      <div className="row">
        
        <div className="column column-30">
        
        </div>
        <div className="column column-60 column-offset-10">
          <div className={textCardYellow}>
            <p className={smalltext}>
              Trusted actors and legacy models result in the little to no adoption of useful, newly available technologies. 
The systems in place need to take advantage of a software first perspective— including instant person to person contact, 
    live updates on data and the newest information. 
            </p>
          </div>
        </div>
      </div>
    </section>
)
