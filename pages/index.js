import React from 'react'
import Head from 'next/head'
import Page from '../containers/page'
import Header from '../components/header'
import css, {style, merge, after, $} from 'next/css'
import { stormy, evening, sunset } from '../constants/colors'



const divider = css({
    width: '100%',
    height: '12.5vw',
    backgroundSize: 'cover',
    top: '-1',
    position: 'absolute',
    zIndex: 5
})
const topDivider = css({
  paddingTop: '4em !important'
})
const bottomDivider = css({
  paddingBottom: '3em !important'
})
const sectionStyle = (background = "white", textColor="white", gradient=[evening, stormy]) => 
  merge({
    background: background,
    backgroundSize:'cover',
    padding: '12em 0em 12em 0em',
    color: textColor,
    position: 'relative',
  },
  $(' .container', { zIndex: '2' }),
  $(' h5', { fontFamily: 'Lato', textTransform:'uppercase', fontWeight:'300'}),
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

const heroText = css({fontWeight: '400', textTransform:'uppercase', marginBottom: '1em', fontFamily:'Lato'});

export default () => (
  <Page>
    <Header />
    <section className={`${section4} ${bottomDivider}`}>
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom.svg)"}}></div>
        <div className={`container ${topDivider}`}>
          <div className="row">
            <div className="column column-75" >
              <h1 className={heroText}>
                <b>Aonyx</b> is a system built to enable a new kind of economic order.
              </h1>
            </div>
            <div className="column">
            </div>
          </div>
            <div className="row">
              <div className="column">
                <p>It augments the public service we've come to know by allowing private citizens to take part in helping serve their communities.</p>
              </div>
              <div className="column">
                <p>Stepping in this direction unlocks vast derivative markets that will fuel the next phase of global economic growth and social prosperity for all.</p>
              </div>
            </div>
          </div>
      </section>
      <section className={`${section1} ${bottomDivider}`} >
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom2.svg)"}}></div>
        <div className={`container ${topDivider} ${bottomDivider}`}>
          <div className="row" >
            <div className="column">
            <h1 className={heroText}>Decentralized P2P Marketplace</h1>
            </div>
          </div>
          <div className="row" >
            <div className="column">
              <div className="row">
                <div className="column" style={{marginTop:'3em'}}>
                  
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

      <section className={`${section2} ${bottomDivider}`} >
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom.svg)"}}></div>
        <div className={`container ${topDivider}`}>
          <div className="row">
            <div className="column">
              <div className="row">
                <div className={`column ${style({ textAlign: 'center'})}`}>
                  <div style={{backgroundImage:'url(/static/subsidies.svg)', width:'200px', height:'200px', display:'inline-block'}}></div>
                  <h1 className={heroText} >Rethink Subsidies</h1>
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
        <div className={`container ${topDivider}`}>
          <div className="row">
          <div className={`column  ${style({ textAlign: 'center'})}`}>
                  <h1 className={heroText} >Public-Private Partnerships <br/> for the 21<sup>st</sup> Century</h1>
                                <div className="row" >
                <div style={{backgroundImage:'url(/static/people-connected.svg)', width:'500px', height:'500px', margin:'auto'}}></div>
                
              </div>
                  <h5>A great idea taken to the next level.</h5>
                  <p>
                    There are many benefits to the traditional Public-Private partnership, but we can do better than the traditional model.
                    Aonyx enables the creation of ad-hoc Public-Private Partnerships as a natural corollary of the DP2P core and dynamic 
                    subisidy mechanisms it enables. Since providers in the netwwork can be anyone from private citizens to private companies, 
                    contractual agreements can happen on-the-fly, and subsidies can appear with hyper-granularity, shortlived or longterm 
                    partnerships will happen without the huge overhead assumed today.
                  </p>
                </div>
          </div>
        </div>
      </section>
      <section className={section2}>
        <div className="container">
          <div className="row">
              <div className="column">
                  <h1 className={heroText}>Restarted global economic growth, fresh investment opportunities.</h1>
                </div>
          </div>
          <div className="row">
              <div className="column-75 column" style={{margin: '2em 0em 2em 0em'}}>
                  <p>
                    The side-effects that follow from deploying Aonyx in a city
                    produce and expose data useful to investors, insurers, and
                    anyone wishing to improve modeling of trade positions.
                    Derivative markets that form to trade against these
                    movements will also allow hedging against exposures that were
                    previously impossible.
                  </p>
                </div>
          </div>

          <div className="row">
            <div className="column">
              <img src="static/line-graph.svg" width="100"/>
              <h5>Price Signaling</h5>
              <p>
                The market rates that dynamically form for various
                services are exposed in the aggregate. This means they
                are accessible in a granular time-scale, with always
                up-to-date information, and granular locality, exposing
                differences between regions.
              </p>
            </div>
            <div className="column">
              <img src="static/networking.svg" width="100"/>
              <h5>Derivative Markets</h5>
              <p>
                The market rates that dynamically form for various
                services are exposed in the aggregate. This means they
                are accessible in a granular time-scale, with always
                up-to-date information, and granular locality, exposing
                differences between regions.
              </p>
            </div>
            <div className="column">
              <img src="static/nodes.svg" width="100"/>
              <h5>Novel Arbitrage</h5>
              <p>The market rates that dynamically form for various
                services are exposed in the aggregate. This means they
                are accessible in a granular time-scale, with always
                up-to-date information, and granular locality, exposing
                differences between regions.
              </p>
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
