import React from 'react'
import Page from '../containers/page'
import Header from '../components/header'
import css, {style, merge, after, $} from 'next/css'
import {blue, dark} from '../constants/colors'

export const bodyHeaders = style({
  '& h3': {
    margin: 'auto',
    fontSize: '15px',
    letterSpacing: '1px',
    fontFamily: 'Work Sans',
    textTransform: 'uppercase',
    color: '#FFF'
  }, 
  '& h2': {
    margin: 'auto',
    fontSize: '24px',
    marginBottom: '0',
    letterSpacing: '5px',
    fontFamily: 'Work Sans',
    textTransform: 'uppercase',
    color: 'white'
  },
  '& h6': {
    fontSize: '10px',
    color: 'white',
    fontFamily: 'Open Sans',
    textTransform: 'none',
    fontStyle: 'italic'
  },
  '& h4': {
    fontSize: '16px',
    fontFamily: 'Open Sans',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  '& h5': {
    fontSize: '16px',
    fontFamily: 'Work Sans',
    color: dark
  },
  '& p.large': {
    fontSize: '24px',
    fontFamily: 'Open Sans',
    color: '#FFF'
  },
  '& .small-icon': {
    width: '40px',
    height: '35px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    display: 'inline-block'
  }
})

export default () => (
  <Page className={bodyHeaders}>
    <Header />
  </Page>
)
