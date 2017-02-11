import React from 'react'
import {textCard} from './mission'
import {textCardYellow} from './problem'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark,blue} from '../constants/colors'


const person = style({
  background: "url(/static/svg/05_person.svg)",
  width: "250px",
  height: "400px",
  position: "absolute",
  zIndex: "200",
  backgroundRepeat: "no-repeat",
  left: "6rem",
  marginTop: "-7em",
  fontFamily: 'Work Sans',
  padding: "1em",
  fontSize: "19px",
  textAlign: "center",
  color: dark,
  textTransform: "uppercase"
})


export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em'}}>
      <div className="row">
        
        <div className="column column-30">
          <div className={person}>
            Why are we <br/> 
            trusting them <br/>
            when they <br/>
            cannot keep up?
          </div>
        </div>
        <div className="column column-60 column-offset-10">
          <div className={textCardYellow}>
            <p className={'large'}>
               For any innovative industry, there is a requirement to have a software first understanding of communication, data and security.
               It is assumed that legacy algorithms are the most efficient risk analysis tool.
               This results in a poor understanding of computational advantages, putting the risk industry at a disadvantage in our new era.
            </p>
          </div>
        </div>
      </div>
    </section>
)
