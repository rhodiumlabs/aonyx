import React from 'react'
import Head from 'next/head'
import Page from '../containers/page'
import css, {style, merge, after, $} from 'next/css'
import Animation from '../components/canvasAnim'
const stormy = '#494E6B';
const sunset = '#985E6D';
const evening = '#192231';

const heroBar = css({
  textAlign: 'center',
  height: '100vh',
  width: '100%',
  color:'white',
    background: [
        sunset,
        `-webkit-linear-gradient(-30deg, ${sunset} 100%,${evening}) 20%`,
        `linear-gradient(-30deg, ${sunset} 20%,${evening} 100%)`
      ],
  height:'100vh',
});

const heading = merge({
  marginTop: '35vh',
  display: 'inline-block',
  padding: '0em 0em 0em 5em',
  marginBottom: '5em',
  color:'white',
  textAlign: 'left',
  position: 'relative',
  borderLeft: '1px solid #CCC',

},
  after({
    content:'""', 
    position:'absolute', 
    left:'0', 
    bottom: '-20px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    left: '-10px',
    border:' 1px solid white'}),
  $(' h1', {fontFamily: 'Poiret One', fontSize: '6em', lineHeight:'1em', margin:'0'}),
  $(' h2', {fontFamily: 'Lato', fontSize: '4em', lineHeight:'1em', margin:'0'}),
)

const sectionStyle = (background = "white", textColor="white", gradient=[evening, stormy]) => 
  merge({
    background: background,
    backgroundSize:'cover',
    padding: '5em 0em',
    color: textColor,
    position: 'relative'
  },
  $(' .container', { zIndex: '2' }),
  $(' h1', { fontFamily: 'Lato', fontSize:'5em' }),
  $(' h2', { fontFamily: 'Lato', fontSize:'4em' }),
  $(' p', { color: '#AAA' }),
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
        `-webkit-linear-gradient(to right, ${gradient[0]} 0%,${gradient[1]}) 100%`,
        `linear-gradient(to right, ${gradient[0]} 0%,${gradient[1]} 100%)`
      ]
    }): {}
  )

const section1 = sectionStyle('url(/static/manhattan.jpg)')
const section2 = sectionStyle('white', 'black', ['white','white'])
const section3 = sectionStyle('url(/static/planet.jpg)', 'white', null)
const section4 = sectionStyle('url(/static/hero.jpg)', 'white', [stormy, evening])
export default () => (
  <Page>
    <Animation />
    <header className={`header ${heroBar} `}>
      <div>
        <section className="container">
         
          <div className={`${heading}`}>
            <h1>AONYX</h1>
            <h2>public service as a service</h2>
          </div>
        </section>
      </div>
    </header>
    <section className={section4}>
        
        <div className="container">
          <div className="row">
            <div className="column">
              <h1 style={{fontSize:'4.5em', textTransform:'uppercase', margin: '2.4em 0em 2em 0em'}}><b>Aonyx</b> is a system built to enable a new kind of economic order.</h1>
            </div>
          </div>
            <div className="row">
              <div className="column">
                <h2 style={{fontSize: '1.9em'}}>It augments the public service we've come to know by allowing private citizens to take part in helping serve their communities.</h2>
              </div>
              <div className="column">
                <h2 style={{fontSize: '1.9em'}}>Stepping in this direction unlocks vast derivative markets that will fuel the next phase of global economic growth and social prosperity for all.</h2>
              </div>
            </div>
          </div>
      </section>
      <section className={section1} >
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="row">
                <div className="column">
                  <h2>Decentralized P2P Marketplace</h2>
                  <h5>Simple idea. Profound implications.</h5>
                                                  <p >{`At the core of Aonyx lies a decentralized Peer-to-Peer marketplace. 
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
                  <p >{
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
                  <p>{
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
      <section className={section2}>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="row" style={{marginTop:'10em'}}>
                
                <div className={`column ${style({ textAlign: 'left'})}`}>
                  <h5>Unprecedented Data Streams</h5>
                  <h2 style={{textTransform: 'uppercase'}}>Restarted global economic growth, fresh investment opportunities.</h2>
                  <p>{
                    `The side-effects that follow from deploying Aonyx in a city
                    produce and expose data useful to investors, insurers, and
                    anyone wishing to improve modeling of trade positions.
                    Derivative markets that form to trade against these
                    movements will also allow hedging against exposures that were
                    previously impossible.`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <h5>Price Signaling</h5>
              <p>The market rates that dynamically form for various
            services are exposed in the aggregate. This means they
            are accessible in a granular time-scale, with always
            up-to-date information, and granular locality, exposing
            differences between regions.</p>
            </div>
            <div className="column">
              <h5>Derivative Markets</h5>
              <p>The market rates that dynamically form for various
            services are exposed in the aggregate. This means they
            are accessible in a granular time-scale, with always
            up-to-date information, and granular locality, exposing
            differences between regions.</p>
            </div>
            <div className="column">
              <h5>Novel Arbitrage</h5>
              <p>The market rates that dynamically form for various
            services are exposed in the aggregate. This means they
            are accessible in a granular time-scale, with always
            up-to-date information, and granular locality, exposing
            differences between regions.</p>
            </div>
          </div>
        </div>
      </section>

  </Page>
)
