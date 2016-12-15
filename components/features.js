import React from 'react'
import Head from 'next/head'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark, blue} from '../constants/colors'


export const textCard = css({
  '& p': {
    fontSize: '16px',
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    color: dark
  }
})

const textCardBlue = css({
  background: blue,
  padding: '2em',
  '& h1': {
    fontSize: '50px',
    fontFamily: 'Work Sans',
    '-webkitTextStroke': `3px ${dark}`,
    textTransform: 'uppercase',
    color: blue
  }
})

const headerCard = style({
    marginTop: '5em !important',
    marginBottom: '2em !important', 
    textAlign: 'center'
})

export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em', padding: '0 0'}}>
      <div className="row">
        <div className="column column-33" style={{background: blue}}>
          <div>
            <h3 className={headerCard}>Reinsurance</h3>
            <h4>Internet of things</h4>
            <p>Today, we are here to bring 
            forth the new. Our 
            technology creates new 
            systems to make public and 
            private institutions work 
            together in unison 
            for the betterment of humanity</p>
          </div>
        </div>
        <div className="column column-33" style={{background: yellow}}>
          <div>
            <h3 className={headerCard}>Peer to peer economy</h3>
            <h4>Internet of things</h4>
            <p>Today, we are here to bring 
            forth the new. Our 
            technology creates new 
            systems to make public and 
            private institutions work 
            together in unison 
            for the betterment of humanity</p>
          </div>
        </div>
        <div className="column column-33" style={{background: blue}}>
          <div>
            <h3 className={headerCard}>Smart Cities</h3>
            <h4>Internet of things</h4>
            <p>Today, we are here to bring 
            forth the new. Our 
            technology creates new 
            systems to make public and 
            private institutions work 
            together in unison 
            for the betterment of humanity</p>
          </div>
        </div>
      </div>
    </section>
)