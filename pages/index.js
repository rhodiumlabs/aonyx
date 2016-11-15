import React from 'react'
import Head from 'next/head'
import Page from '../containers/page'
import Header from '../components/header'
import css, {style, merge, after, $} from 'next/css'
import { stormy, evening, sunset } from '../constants/colors'



const divider = css({
    width: '100vw',
    height: '12.5vw',
    marginBottom: '10em',
    backgroundSize: 'cover',
    top: '-1',
    position: 'absolute',
    zIndex: 5
})
const sectionStyle = (background = "white", textColor="white", gradient=[evening, stormy]) => 
  merge({
    background: background,
    backgroundSize:'cover',
    padding: '6em 0em 6em 0em',
    color: textColor,
    position: 'relative',
  },
  $(' .container', { zIndex: '2' }),
  $(' h1', { fontFamily: 'Lato', fontSize:'5em' }),
  $(' h2', { fontFamily: 'Lato', fontSize:'4em' }),
  $(' p', { color: textColor }),
  gradient ? 
    after({
      position: 'absolute',
      content:'""',
      height:'100%',
      width:'100%',
      top:'0',
      left:'0',
      opacity: '1.0',
      zIndex: 1,
      background: [
        sunset,
        `-webkit-linear-gradient(180deg, ${gradient[0]} 0%,${gradient[1]}) 100%`,
        `linear-gradient(180deg, ${gradient[0]} 0%,${gradient[1]} 100%)`
      ]
    }): {}
  )

const section1 = sectionStyle('white', 'white', [sunset, evening])
const section2 = sectionStyle('white', 'black', ['white','white'])
const section3 = sectionStyle('url(/static/planet.jpg)', 'white', null)
const section4 = sectionStyle('white', 'black', ['white','white'])


export default () => (
  <Page>
    <Header />
    <section className={section4}>
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom.svg)"}}></div>
        <div className="container">
          <div className="row">
            <div className="column column-75">
              <h1 style={{fontSize:'3.5em', fontWeight: '100',textTransform:'uppercase', margin: '2.4em 0em 2em 0em'}}>
                <b>Aonyx</b> is a system built to enable a new kind of economic order.
              </h1>
            </div>
            <div className="column">
            </div>
          </div>
            <div className="row">
              <div className="column">
                <h5>It augments the public service we've come to know by allowing private citizens to take part in helping serve their communities.</h5>
              </div>
              <div className="column">
                <h5>Stepping in this direction unlocks vast derivative markets that will fuel the next phase of global economic growth and social prosperity for all.</h5>
              </div>
            </div>
          </div>
      </section>
      <section className={section1} >
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom2.svg)"}}></div>
        <div className="container">
          <div className="row" style={{marginTop:'15em'}}>
            <div className="column">
            <h2>Decentralized P2P Marketplace</h2>
            </div>
          </div>
          <div className="row" style={{marginTop:'2em'}}>
            <div className="column">
              <div className="row">
                <div className="column">
                  
                  <h5>Simple idea. Profound implications.</h5>
                  <p>{`At the core of Aonyx lies a decentralized Peer-to-Peer marketplace. 
                    This core infrastructure creates a way for providers and consumers to transact in a trustless network ecosystem. 
                    These actors might be citizens, professionals, service companies, governments, or anything in between. 
                    You can think of it as an Uber without a monopolizing corporation pulling the strings, and with the potential 
                    for anything to be built atop. Transportation is just the beginning.`}</p>
                </div>
              </div>
            </div>
            <div className="column">
              <img src='/static/connected.svg' width='100%' />
            </div>  
          </div>
        </div>

      </section>

      <section className={section2} >
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom.svg)"}}></div>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="row">
                <div className={`column ${style({ textAlign: 'center', marginTop: '10em'})}`}>
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
      <div className={divider} style={{backgroundImage: "url(/static/tri-bottom3.svg)"}}></div>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="row" style={{marginTop:'10em'}}>
                <div style={{backgroundImage:'url(/static/people-connected.svg)', width:'500px', height:'500px', margin:'auto'}}></div>
                
              </div>
            </div>
          </div>
          <div className="row">
          <div className={`column ${style({ textAlign: 'left'})}`}>
                  <h2>Public-Private Partnerships for the 21st Century</h2>
                  
          </div>


          <div className={`column ${style({ textAlign: 'left'})}`}>
                  <h4>A great idea taken to the next level.</h4>
                  <p></p>
                  <p>{
                    `There are many benefits to the traditional Public-Private partnership, but we can do better than the traditional model.
                    Aonyx enables the creation of ad-hoc Public-Private Partnerships as a natural corollary of the DP2P core and dynamic 
                    subisidy mechanisms it enables. Since providers in the netwwork can be anyone from private citizens to private companies, 
                    contractual agreements can happen on-the-fly, and subsidies can appear with hyper-granularity, shortlived or longterm 
                    partnerships will happen without the huge overhead assumed today.`}</p>
                </div>
          </div>
        </div>
      </section>
      <section className={section2}>
        <div className="container">
          <div className="row">
              <div className="column">
              
                  <h2 style={{textTransform: 'uppercase'}}>Restarted global economic growth, fresh investment opportunities.</h2>
                </div>
          </div>
          <div className="row">
              <div className="column-75 column" style={{margin: '2em 0em 2em 0em'}}>
                  <h5>{
                    `The side-effects that follow from deploying Aonyx in a city
                    produce and expose data useful to investors, insurers, and
                    anyone wishing to improve modeling of trade positions.
                    Derivative markets that form to trade against these
                    movements will also allow hedging against exposures that were
                    previously impossible.`}</h5>
                </div>
          </div>

          <div className="row">
            <div className="column">
              <img src="static/line-graph.svg" width="100"/>
              <h5>Price Signaling</h5>
              <p>The market rates that dynamically form for various
            services are exposed in the aggregate. This means they
            are accessible in a granular time-scale, with always
            up-to-date information, and granular locality, exposing
            differences between regions.</p>
            </div>
            <div className="column">
              <img src="static/networking.svg" width="100"/>
              <h5>Derivative Markets</h5>
              <p>The market rates that dynamically form for various
            services are exposed in the aggregate. This means they
            are accessible in a granular time-scale, with always
            up-to-date information, and granular locality, exposing
            differences between regions.</p>
            </div>
            <div className="column">
              <img src="static/nodes.svg" width="100"/>
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

      <section className={section3}>
         <div className="container">
          <div className="row">
            <div className="column">
              <div className="row" >
                <div >
                  <h2>CALL TO ACTION</h2>
                  <h5>Newsletter subscription</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  </Page>
)
