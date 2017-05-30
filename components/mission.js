import React from 'react'
import Head from 'next/head'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark, blue} from '../constants/colors'


export const textCard = style({
  marginTop: '2em',
  justifyContent: 'center',
  '& p': {
    fontSize: '16px',
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    color: dark
  }
})

const textCardBlue = style({
  background: blue,
  padding: '2em 2.5em',
  '& h1': {
    fontSize: '50px',
    fontFamily: 'Work Sans',
    fontWeight: 800,
    '-webkitTextStroke': `3px ${dark}`,
    textTransform: 'uppercase',
    color: blue
  }
})



export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em'}}>
      <div className="row">
        <div className="column column-30">
          <div className={textCard}>
            <h5>Our Mission</h5>
            <p>We are inventing
	    planetary scale protocols
	    to power the next generation of 
	    risk transfer infrastructure.
	    </p>
          </div>
        </div>
        <div className="column column-60 column-offset-10 ">
          <div className={textCardBlue}>
            <p className='large' style={{lineHeight: "28px", marginBottom: "0"}}>
              Our world is more digital and networked than ever before yet
	      the way we manage risk is still siloed and arcane.
            </p>
            <h1>Aonyx is the<br/>API for risk transfer</h1>
          </div>

        </div>
      </div>
    </section>
)
