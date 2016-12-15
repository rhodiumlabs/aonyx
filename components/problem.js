import React from 'react'
import Head from 'next/head'
import {yellow, dark} from '../constants/colors'
import css, {style, merge, after, $} from 'next/css'


export const textCardYellow = css({
  background: yellow,
  padding: '2em',
  height: '100%',

  '& ul': {
    marginTop: '1em',
    listStyleType: 'none'
  },
  '& .icon': {
    display: 'inline-block',
    width: '25px'
  },
  '& h2': {
    fontSize: '27px',
    fontFamily: 'Open Sans',
    color: '#FFF'
  }, 
  '& h3': {
    display: 'inline-block',
    fontSize: '18px',
    marginBottom: '0',
    letterSpacing: '1px',
    fontFamily: 'Work Sans',
    textTransform: 'uppercase',
    color: 'white'
  },
  '& .subtitle': {
    fontSize: '10px',
    color: 'white',
    fontFamily: 'Open Sans',
    textTransform: 'none',
  }
})
const wave = style({
  background: "url(/static/svg/00_wave.svg)",
  width: "200px",
  height: "185px",
  position: "absolute",
  zIndex: "200",
  backgroundRepeat: "no-repeat",
  bottom: "-50%",
  right: "2rem",
})


export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em'}}>
      <div className="row">
        <div className="column column-60">
          <div className={textCardYellow} style={{display: 'flex', alignItems: 'center'}}>
            <p className={'large'}>Nature works in powerful ways, catastrophic events happen. 
  When this unfortunate situation occurs, we rely and trust on specific actors. 
  We ask the question, are they handling the global impact successfully? </p>
          </div>
        </div>
        <div className="column column-30 column-offset-10">
          <div className={textCardYellow}>
            <h3>Hurricane Katrina</h3>
            <h6>third strongest hurricane in the usa</h6>
            <ul style={{listStyleType: 'none'}}>
              <li><i className={'small-icon'} style={{backgroundImage: 'url(/static/svg/01_person.svg)'}}></i> <h3>1836 <span className={'subtitle'}>lives lost</span></h3> </li>
              <li><i className={'small-icon'} style={{backgroundImage: 'url(/static/svg/02_circles.svg)'}}></i> <h3>$150 bn<span className={'subtitle'}>economic impact</span></h3> </li>
              <li><i className={'small-icon'} style={{backgroundImage: 'url(/static/svg/03_house.svg)'}}></i> <h3>$81 bn <span className={'subtitle'}>property damage</span></h3> </li>
            </ul>
            <div className={wave} />
          </div>

        </div>
      </div>
    </section>
)
