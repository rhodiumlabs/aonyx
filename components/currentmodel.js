import React from 'react'
import {textCard} from './mission'
import {textCardYellow} from './problem'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark,blue} from '../constants/colors'




const block = style({
  background: "url('/static/svg/04_block.svg')",
  width: "50%",
  margin: 'auto',
  height: '50px',
  paddingBottom: '2em',
  backgroundRepeat: 'no-repeat'
})
const header = style({
  padding: "1em",
  textAlign: "center"
})
export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em', padding: '0 3rem'}}>
      <div className="row" style={{background: blue, paddingTop: '2em'}}>
        <h2 className={header}>The current model</h2>
      </div>
      <div className="row" style={{background: blue, paddingBottom: '4em'}}>
        <div className="column column-50 column-offset-10" style={{position:'relative', marginTop:'2em'}}>
         
          <div className="row">
            <div className="column">
              <div className={block} />
            </div>
            <div className="column">
              <div className={block} />
            </div>
            <div className="column">
              <div className={block} />
            </div>
            <div className="column">
              <div className={block} />
            </div>
          </div>
          <div className="row">
            <h3 style={{background: blue,zIndex: '2', padding: '1em 2em'}}>Traditional actors</h3>
          </div>
          <div className="row">
            <div className="column">
              <h6 style={{color: dark, textAlign: 'center'}}>public<br/> institutions</h6>
            </div>
            <div className="column">
              <h6 style={{color: dark, textAlign: 'center'}}>government<br/> processes</h6>
            </div>
            <div className="column">
              <h6 style={{color: dark, textAlign: 'center'}}>private <br/> organizations</h6>
            </div>
            <div className="column">
                <h6 style={{color: dark, textAlign: 'center'}}>reinsurance<br/> and insurance</h6>
            </div>
          </div>
           <div style={{
            width: '100%',
            height: '40px',
            position: 'absolute',
            left: '0',
            top: '35px',
            border: '1px solid white',
            borderTop: '0'
          }}></div>

        </div>
        <div className="column column-30 column-offset-10"  style={{position:'relative'}}>
           <div style={{
            fontSize: '50px',
            position: 'absolute',
            top: '23%',
            color: 'rgba(0,0,0,0)',
            fontFamily: 'Work Sans',
            left: '-17%',
            '-webkitTextStroke': `3px white`
          }}>=</div>
          <div>
            <p className={'large'}>saturated</p>
            <p className={'large'}>bureaucratic</p>
            <p className={'large'}>politicized</p>
          </div>
        </div>
      </div>
    </section>
)