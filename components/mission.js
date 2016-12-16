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
            <p>Today, we are here to bring 
            forth the new. Our 
            technology creates new 
            systems to make public and 
            private institutions work 
            together in unison 
            for the betterment of humanity</p>
          </div>
        </div>
        <div className="column column-60 column-offset-10 ">
          <div className={textCardBlue}>
            <p className='large' style={{lineHeight: "28px", marginBottom: "0"}}>
              We all deserve protection from loss, security from unanticipated risk, and
              dominion over our data. 
            </p>
            <h1>Aonyx is here to <br/>make this a reality.</h1>
          </div>

        </div>
      </div>
    </section>
)
