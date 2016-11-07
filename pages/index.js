import React from 'react'
import Head from 'next/head'
import Page from '../containers/page'
import css, {style, merge, after, $} from 'next/css'

const stormy = '#494E6B';
const sunset = '#985E6D';
const evening = '#192231';

const heroBar = css({
  textAlign: 'center',
  height: '100vh',
  width: '100%',
  color:'white',
  backgroundSize: 'cover',
  backgroundPositionY: '10%',
  backgroundPositionX: '0%',
  backgroundImage: 'url(/static/hero.jpg)',
  height:'100vh',
  boxShadow:'rgba(46, 49, 68, 0.5) 0px -100vh 50vh inset'
});

const heading = merge({
  marginTop: '35vh',
  display: 'inline-block',
  padding: '0px 20px',
  marginBottom: '5em',
  color:'white',
  fontFamily:'Rajdhani',
  textShadow:'0px 3px 13px #333',
}, $(' h1', {fontSize: '8em', lineHeight:'1em', margin:'0'}))

const sectionStyle = (background = "white", textColor="white", gradient=[evening, stormy]) => 
  merge({
    background: background,
    backgroundSize:'cover',
    padding: '5em 0em',
    color: textColor,
    position: 'relative'
  },
  $(' .container', { zIndex: '2' }),
  gradient ? 
    after({
      position: 'absolute',
      content:'""',
      height:'100%',
      width:'100%',
      top:'0',
      left:'0',
      opacity: '0.9',
      zIndex: 1,
      background: [
        sunset,
        `-webkit-linear-gradient(to right, ${gradient[0]},${gradient[1]})`,
        `linear-gradient(to right, ${gradient[0]},${gradient[1]})`
      ]
    }): {}
  )

const section1 = sectionStyle('url(/static/manhattan.jpg)')
const section2 = sectionStyle('white', 'black', ['white','white'])
const section3 = sectionStyle('url(/static/planet.jpg)', 'white', null)

export default () => (
  <Page>
    <header className={`header ${heroBar} `}>
      <div>
        <section className="container">
          <div className={`${heading}`}>
            <h1>AONYX</h1>
            <h4>public service as a service</h4>
          </div>
          <p>Aonyx is a system built to enable a new kind of economic order.<br/>
          It augments the public service we've come to know by allowing private citizens to take part in helping serve their communities.<br/>
          Stepping in this direction unlocks vast derivative markets that will fuel the next phase of global economic growth and social prosperity for all.</p>
        </section>
      </div>
    </header>
      <section className={section1} >
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="row">
                <div className="column">
                  <h2>Decentralized P2P Marketplace</h2>
                  <h5>Simple idea. Profound implications.</h5>
                  <p {...style({ color: '#AAA'})}>{`At the core of Aonyx lies a decentralized Peer-to-Peer marketplace. 
                    This core infrastructure creates a way for providers and consumers to transact in a trustless network ecosystem. 
                    These actors might be citizens, professionals, service companies, governments, or anything in between. 
                    You can think of it as an Uber without a monopolizing corporation pulling the strings, and with the potential 
                    for anything to be built atop. Transportation is just the beginning.`}</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div style={{backgroundImage:'url(/static/people.svg)', width:'400px', height:'400px'}}></div>
            </div>  
          </div>
        </div>
      </section>
      <section className={section2} >
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="row">
                <div className={`column ${style({ textAlign: 'center'})}`}>
                  <div style={{backgroundImage:'url(/static/subsidies.svg)', width:'200px', height:'200px', display:'inline-block'}}></div>
                  <h2>Rethink Subsidies</h2>
                  <h5>Frictionless, Trustless, Transparent.</h5>
                  <p {...style({ color: '#AAA'})}>{
                    `With Aonyx's DP2P core, a new way to subsidize activities and public services becomes possible. 
                    As supply and demand appers on the marketplace for various services, governments, from municipal to federal, 
                    and even non-governmental actors, can actively perturb the market by offering subsidies for economic activity 
                    that they believe to be in the public's interest. In place of the long-term and wide-scale subsidies that came 
                    before, subsidies in this model can be hyper-granular. From minute-by-minute subsidies in the case of power 
                    outtages or disasters, to location-specific relief in others.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={section3} >
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="row" style={{marginTop:'10em'}}>
                <div style={{backgroundImage:'url(/static/people-connected.svg)', width:'400px', height:'400px'}}></div>
                <div className={`column ${style({ textAlign: 'left'})}`}>
                  <h2>Public-Private Partnerships for the 21st Century</h2>
                  <h5>A great idea taken to the next level.</h5>
                  <p {...style({ color: '#AAA'})}>{
                    `There are many benefits to the traditional Public-Private partnership, but we can do better than the traditional model.
                    Aonyx enables the creation of ad-hoc Public-Private Partnerships as a natural corollary of the DP2P core and dynamic 
                    subisidy mechanisms it enables. Since providers in the netwwork can be anyone from private citizens to private companies, 
                    contractual agreements can happen on-the-fly, and subsidies can appear with hyper-granularity, shortlived or longterm 
                    partnerships will happen without the huge overhead assumed today.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </Page>
)
