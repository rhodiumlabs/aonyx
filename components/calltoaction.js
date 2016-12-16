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
          <div className={textCardYellow} style={{display: 'flex'}}>
            <p className={'large'} style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
              
    The world works better when we protect our connected future. Together, 
    we can put technology at the forefront of humanity\'s safety and security. 
    
            </p>
          </div>
        </div>
        
        <div className="column column-30  column-offset-10">
          <div className={textCardBlue}>
            <h1>Reimagine the connected future with us.</h1>
            <h4 style={{color: dark, textAlign: 'left'}}>newsletter subscription</h4>
          </div>
        </div>
      </div>
    </section>
)
