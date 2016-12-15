import React from 'react'
import Page from '../containers/page'
import Header from '../components/header'
import Mission from '../components/mission'
import Seperator from '../components/seperator'
import Problem from '../components/problem'
import Solution from '../components/solution'
import Blockchain from '../components/blockchain'
import CurrentModel from '../components/currentmodel'
import Features from '../components/features'
import FeaturesTwo from '../components/features2'
import CryptoHash from '../components/cryptohash'
import Questions from '../components/questions'
import SmartContracts from '../components/smartcontracts'
import CallToAction from '../components/calltoaction'
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
    fontSize: '18px',
    marginBottom: '0',
    letterSpacing: '1px',
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
    <Mission />
    <Seperator title="the problem"/>

    <Problem />
    <CurrentModel />
    <Questions />
    <Seperator title="the solution"/>
    <Solution />
    <Blockchain />
    <CryptoHash />
    <SmartContracts />
    <Features />
    <FeaturesTwo />
    <Seperator title="how aonyx works"/>
    <CallToAction />
  </Page>
)
