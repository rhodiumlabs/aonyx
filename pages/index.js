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

const divider = css({
    width: '100%',
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

const learnmore = merge({
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: '1em',
  margin: 'auto',
  display: 'inline-block'
}, $(' .test', { background: 'url(static/down-arrow.svg)', width: '40px', height: '40px', margin: 'auto' }))
export default () => (
  <Page>
    <Animation />
    <header className={`header ${heroBar} `}>
      <div>
        <section className="container">
         
          <div className={`${heading}`}>
            <h1>AONYX</h1>
            <h2>envision a world better prepared</h2>
          </div>

        </section>

      </div>
       <div style={{position: 'absolute', bottom: '50px', width: '100%'}}> <div className={learnmore}> LEARN MORE <div className="test"> </div></div></div>
    </header>
    <section className={section4}>
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom.svg)"}}></div>
        <div className="container">
          <div className="row">
            <div className="column column-75">
              <h1 style={{fontSize:'3.5em', fontWeight: '100',textTransform:'uppercase', margin: '2.4em 0em 2em 0em'}}>
                <b>Aonyx</b> is a works on a catastrophic scale.
              </h1>
            </div>
            <div className="column">
            </div>
          </div>
            <div className="row">
              <div className="column">
                <h5> Nature works in powerful ways, catastrophic events happen, and we rely on certain actors to successfully handle the impact. </h5>
              </div>
              <div className="column">
                <h5>what if the public and private sectors had a system to save lives, allocate time and rebuild from disasters? </h5>
              </div>
            </div>
          </div>
      </section>
      <section className={section1} >
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom2.svg)"}}></div>
        <div className="container">
          <div className="row" style={{marginTop:'15em'}}>
            <div className="column">
            <h2>Who do we trust when these events happen?</h2>
            </div>
          </div>
          <div className="row" style={{marginTop:'2em'}}>
            <div className="column">
              <div className="row">
                <div className="column">
                  
                  <h5>Public Institutions, Governmental Processes, Private Organizations, Reinsurance and Insurance Companies </h5>
                  <p>{`In a 1.1 trillion dollar industry in the USA alone, the complexity of reinsurance, 
                      insurance, governmental and public organizations are the result of how important
                      and resource consuming public safety has become. During catastrophic events, like  
                      earthquakes, tsunamis and hurricanes, we trust these actors to supply resources 
                      when disastrous events happen.`}</p>
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
                  <h2>The Future of Public Services as a Service </h2>
                  
          </div>


          <div className={`column ${style({ textAlign: 'left'})}`}>
                  <h4>At the core of Aonyx is using blockchain technologies, 
                  that is a online distributed ledger, messaging passing and storage. 
                  It provides a user-friendly interface that is both trustworthy and transparent 
                  to all stakeholders.</h4>
                  <p></p>
                  <p>{
                    `The advantage of a blockchain ledger is the verification and immutability (permanence) 
                     of data on the network.  Each stakeholder independently records information 
                     and it is distributed across computers around the world, rather than stored 
                     on one central authority. The point being the Blockchain records are locally 
                     decentralized in a peer to peer (P2P) network, but still constitute a logically 
                     centralized immutable set. Used alongside smart contacts, Aonyx… can allow 
                     business logic and workflows to be built into a distributed ledger and 
                     Capable of updating the ledger (e.g., making payments) based on pre-defined conditions`}</p>
                </div>
          </div>
        </div>
      </section>
      <section className={section2}>
        <div className="container">
          <div className="row">
              <div className="column">
              
                  <h2 style={{textTransform: 'uppercase'}}>Insurance and Reinsurance </h2>
                </div>
          </div>
          <div className="row">
              <div className="column-75 column" style={{margin: '2em 0em 2em 0em'}}>
                  <h5>{
                    `The side-effects that follow from deploying Aonyx in a better structure for organizations 
                    that come to action during high impact events. Aonyx can replace human interventions that 
                    are placed throughout the entire risk transfer process, 
                    removing delays and the risks of human error – with a radical 
                    effect on the speed and efficiency of the process.`}</h5>
                </div>
          </div>

          <div className="row">
            <div className="column">
              <img src="static/line-graph.svg" width="100"/>
              <h5>Collaboration Made Simple </h5>
              <p>Smart contracts and blockchain applications 
              allows for data sharing and improved transparency 
              between all stakeholders. Insurance policies and 
              associated claim information is on a trusted distributed 
              network, therefore the encrypted information, 
              and smart contracts ensures the data can be validated 
              by any authorized participant on the network. 
              Event details are documented using cryptographic methods, 
              resulting in a tamper-proof record of all relevant information 
              for the creation of higher quality policies and faster claim payout.

</p>
            </div>
            <div className="column">
              <img src="static/networking.svg" width="100"/>
              <h5>Anticipate  with Better Analysis</h5>
              <p>Made for the underwriters, brokers and actuaries to improve transparency 
                and accurately store information for future risk analysis including: 
                assets, claims and portfolio data. Organizations can use the accumulated
                data to develop better risk analysis of future CAT events, and 
                the implications that come with it. As the event data is securely recorded, 
                and constantly updated by other stakeholders, policies and claims are higher 
                quality and cover those affected more efficiently. .</p>
            </div>
            <div className="column">
              <img src="static/nodes.svg" width="100"/>
              <h5>Third Impacte</h5>
              <p>Cost saving, finances, etc</p>
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
