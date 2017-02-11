import React from 'react'
import Head from 'next/head'
import CanvasAnim from './canvasAnim';
import css, {style, merge, after, $} from 'next/css'
import { yellow, dark} from '../constants/colors'

const learnmore = merge({
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: '1em',
  margin: 'auto',
  display: 'inline-block'})

const header = style({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  textAlign: 'center',
  border: '2em solid white',
  background: yellow
})
const headerContent = style({
  margin: '2em 2em',
  width: '100%',
})
const title = style({
  fontSize: '90px',
  lineHeight: '80px',
  fontFamily: 'Work Sans',
  fontWeight: 800,
  marginBottom:0,
  paddingBottom: 0,
  color: 'white'
})

const subtitle = style({
  fontSize: '16px',
  fontStyle: 'italic',
  fontFamily: 'Open Sans',
  textDecoration: 'italic',
  color: dark
})
const logo = style({
  background: "url(/static/svg/18_logo.svg)",
  width: "200px",
  height: "185px",
  margin: "auto",
  zIndex: "200",
  backgroundRepeat: "no-repeat",
  backgroundPosition: '50% 50%'
})


export default () => (
    <section className={header}>
      <div className={headerContent}>
        <h1 className={title}>AONYX</h1>
        <h4 style={{color: dark}}>protecting the connected future</h4>
        <div className={logo} ></div>
      </div>
    </section>
)
