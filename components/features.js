import React from 'react'
import Head from 'next/head'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark, blue} from '../constants/colors'


export const sectionHeaders = css({
  '& p': {
    fontSize: '11px',
    fontFamily: 'Open Sans',
    width: '90%',
    margin: 'auto',
    textAlign: 'center',
    paddingBottom: '4em',
    color: 'rgba(255,255,255,0.8)'
  },
  '& h3': {
      marginTop: '5em !important',
    marginBottom: '2em !important', 
    textAlign: 'center'
  }
})



export const icon = style({
  width: "100%",
  height: "100px",
  zIndex: "200",
  backgroundRepeat: "no-repeat",
  backgroundPosition: '50% 50%',
  backgroundSize: '20%',
})




export default () => (
    <section className={'container '+ sectionHeaders} style={{marginTop:'5em', marginBottom: '5em', padding: '0 0'}}>
      <div className="row">
        <div className="column column-33" style={{background: blue}}>
          <div>
            <h3>Incident Reports</h3>
            <div className={icon} style={{backgroundImage: "url(/static/svg/12_computers.svg)", backgroundSize:'50%'}} />
            <h4>Collaboration made simple</h4>
            <p>Shared data and better transparency between all stakeholders, on the trusted network.
              Event details are documented using cryptographic methods, resulting in a tamper-proof record of 
              relevant information for higher quality policies and faster claim payout.
            </p>
          </div>
        </div>
        <div className="column column-33" style={{background: yellow}}>
          <div>
            <h3>Video Anomalies</h3>
            <div className={icon} style={{backgroundImage: "url(/static/svg/13_play.svg)"}} />
            <h4>Fast, smart movement</h4>
            <p>Catastrophic events trigger payments to parties, vendors and private assistance for those in need. 
              When an event occurs, Aonyx accesses policyholders data to determine and activate payouts.</p>
          </div>
        </div>
        <div className="column column-33" style={{background: blue}}>
          <div>
            <h3>Smart Cities</h3>
            <div className={icon} style={{backgroundImage: "url(/static/svg/14_prop.svg)"}} />
            <h4>Internet of things</h4>
            <p>Using an intelligent sensor network, Aonyx will prompt emergency services 
           during right circumstances to save time and resources. 
            From WiFi drones to connected weather sensors, they can give the most up to date data to citizens, 
             government offices and insurance companies when it is most needed.
          </p>
          </div>
        </div>
      </div>
    </section>
)
