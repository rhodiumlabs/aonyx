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

const textCardBlue = css({
  background: 'white',
  padding: '2em',
  '& h1': {
    fontSize: '50px',
    fontFamily: 'Work Sans',
    '-webkitTextStroke': `3px ${dark}`,
    textTransform: 'uppercase',
    color: 'white'
  }
})

export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em'}}>
      <div className="row">
        <div className="column column-60">
          <div className={textCardYellow}>
            <p className={smalltext}>
              These trusted actors and the current traditional models result in little to no 
              At the core of Aonyx is using blockchain technologies,
              that is a online distributed ledger, messaging passing and storage. 
              It provides a user-friendly interface that is both trustworthy and transparent to all stakeholders.
            </p>
          </div>
        </div>
        
        <div className="column column-30  column-offset-10">
          <div className={textCardBlue}>
            <h1>Call to action!</h1>
            <h4 style={{color: dark, textAlign: 'left'}}>newsletter subscription</h4>
          </div>
        </div>
      </div>
    </section>
)