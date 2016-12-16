import React from 'react'
import Head from 'next/head'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark, blue} from '../constants/colors'
import {sectionHeaders, icon} from './features'



export default () => (
    <section className={'container ' + sectionHeaders} style={{marginTop:'5em', marginBottom: '5em', padding: '0 0'}}>
      <div className="row">
        <div className="column column-33" style={{background: blue}}>
          <div>
            <h3></h3>

            <h4>Anticipate with better analysis</h4>
            <div className={icon} style={{backgroundImage: "url(/static/svg/15_analysis.svg)", backgroundSize:'50%'}} />
            <p>Curate and log accurate catastrophic event data for future risk analysis. 
  to cover those affected more efficiently and protect against long term implications.</p>
          </div>
        </div>
        <div className="column column-33" style={{background: yellow}}>
          <div>
            <h3></h3>
            <h4>Rebuilding Lives</h4>
            <div className={icon} style={{backgroundImage: "url(/static/svg/16_rebuilding.svg)"}} />
            <p>Repetitive, time consuming work is automated, allowing  public and governmental organizations   
  to focus on more sophisticated processes, and the hedge against continuous effects of catastrophic events. </p>
          </div>
        </div>
        <div className="column column-33" style={{background: blue}}>
          <div>
            <h3></h3>
            <h4>Seamless Transportation</h4>
            <div className={icon} style={{backgroundImage: "url(/static/svg/17_seamless.svg)"}} />
            <p>Routing for the safest and fastest path for drivers to go. From public emergency services working off of the most up to date weather and traffic needs. 
    to safe, reliable public transportation. Well directed traffic will keep roads efficient and safe.</p>
          </div>
        </div>
      </div>
    </section>
)
