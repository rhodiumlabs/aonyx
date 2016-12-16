import React from 'react'
import {textCard} from './mission'
import {textCardYellow} from './problem'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark,blue} from '../constants/colors'


const contract = style({
  background: "url(/static/svg/11_brain.svg)",
  width: "100%",
  height: "100%",
  zIndex: "200",
  backgroundRepeat: "no-repeat",
  backgroundPosition: '50% 50%',
  backgroundSize: '50%',
})



export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em'}}>
      <div className="row">
        
        <div className="column column-30">
          <div className={contract} />
        </div>
        <div className="column column-60 column-offset-10">
          <div className={textCardYellow} style={{textAlign: 'right'}}>
            <h2>SMART CONTRACTS</h2>
            <p className={'large'}>
              Allows us to automate tasks from business logic to common workflows. 
    It makes updating the ledger more secure and faster based on our predefined conditions.

            </p>
          </div>
        </div>
      </div>
    </section>
)
