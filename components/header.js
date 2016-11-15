import React from 'react'
import Head from 'next/head'
import CanvasAnim from './canvasAnim';
import css, {style, merge, after, $} from 'next/css'
import { stormy, evening, sunset } from '../constants/colors'

const learnmore = merge({
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: '1em',
  margin: 'auto',
  display: 'inline-block'
}, $(' .test', { background: 'url(static/down-arrow.svg)', width: '40px', height: '40px', margin: 'auto' }))


const heroBar = css({
  textAlign: 'center',
  height: '100vh',
  width: '100%',
  color:'white',
    background: [
      evening,
      `-webkit-linear-gradient(180deg, ${sunset} 0%,${evening}) 100%`,
      `linear-gradient(180deg, ${sunset} 0%,${evening} 100%)`
    ],
  height:'100vh',
});
const heading = merge({
  marginTop: '35vh',
  display: 'inline-block',
  marginBottom: '5em',
  color:'white',
  textAlign: 'center',
  position: 'relative',

},
  $(' h1', {fontFamily: 'Poiret One', fontSize: '6em', lineHeight:'1em',borderBottom:'1px solid rgba(255, 177, 197, 0.42)', marginBottom:'0.2em'}),
  $(' h2', {fontFamily: 'Poiret One', textTransform: 'uppercase', color: 'white', fontSize: '2.0em', lineHeight:'1em', margin:'0'}),
)

export default () => (
    <section>
      <CanvasAnim />
      <div className={`header ${heroBar} `}>
        <div>
          <section className="container">
           
            <div className={`${heading}`}>
              <h1>AONYX</h1>
              <h2>public service as a service</h2>
            </div>

          </section>

        </div>
         <div style={{position: 'absolute', bottom: '50px', width: '100%'}}> <div className={learnmore}> LEARN MORE <div className="test"> </div></div></div>
      </div>
    </section>
)