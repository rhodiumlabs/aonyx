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
            How would insurance <br/> 
            work we invented<br/>
            it today?
          </div>
        </div>
        <div className="column column-60 column-offset-10">
          <div className={textCardYellow}>
            <p className={'large'}>
               We believe that the risk transfer industry must adopt software first principles in order to build more efficient risk mitigation.
            </p>
          </div>
        </div>
      </div>
    </section>
)
