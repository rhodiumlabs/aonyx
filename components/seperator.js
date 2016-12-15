import React from 'react'
import Head from 'next/head'
import CanvasAnim from './canvasAnim';
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark, pink} from '../constants/colors'




const seperator = css({
  '& .bar': {
    backgroundColor: pink, 
    height: '2px', 
    width: '100%'
  },
  '& .text': {
    width:'200px', 
    color: pink,  
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    backgroundColor:'white', 
    display: 'block', 
    margin: 'auto',
    textAlign: 'center',
    width: '250px', 
    transform: 'translateY(-50%)'
  }
})

export default (props) => (
    <div className={'container '+ seperator} style={{marginTop:'10em', marginBottom: '10em'}}>
      <div className={'bar'} />
      <div className={'text'}>{props.title}</div>
      
    </div>
)