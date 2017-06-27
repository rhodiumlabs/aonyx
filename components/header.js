import React from 'react'
import Head from 'next/head'
import CanvasAnim from './canvasAnim';
import css, {style, merge, after, $} from 'next/css'
import { yellow, dark} from '../constants/colors'

const learnmore = merge({
  fontFamily: "Avenir Next",
  fontWeight: 300,
  fontSize: '1em',
  margin: 'auto',
  display: 'inline-block'})

const header = style({
  display: 'flex',
  height: '100vh',
  alignItems: 'left',
  textAlign: 'left',
  border: '2em solid white',
  background: 'white'
})
const headerContent = style({
  margin: '2em 2em',
  width: '100%',
})
const title = style({
  fontSize: '100px',
  lineHeight: '90px',
  fontFamily: 'Avenir Next',
  fontWeight: 800,
  marginBottom:0,
  paddingBottom: 0,
  color: 'black'
})

const subtitle = style({
  fontSize: '16px',
  fontStyle: 'normal',
  fontFamily: 'Prestige Elite Std',
  marginTop: 40,
  color: dark
})
const logo = style({
  background: "url(/static/svg/18_logo.svg)",
  width: "200px",
  height: "185px",
  margin: "auto",
  zIndex: "200",
  backgroundRepeat: "no-repeat",
  backgroundPosition: '50% 50%'
})


export default () => (
    <section className={header}>
      <div className={headerContent}>
        <h1 className={title}>AONYX</h1>
        <p className={subtitle}>{`One day a Wolf said to her mate, “A longing has come upon me to eat fresh fish.”`} 
        <br/><br/>  
        {`“I will go and get some for you,” said he and he went down to the river.`} 
        <br/><br/>
        {`There he saw two Otters standing on the bank looking for fish. Soon one of the Otters saw a great fish, and entering the water with a bound, he caught hold of the tail of the fish. But the fish was strong and swam away, dragging the Otter after him. “Come and help me,” the Otter called back to his friend. “This great fish will be enough for both of us!” So the other Otter went into the water. The two together were able to bring the fish to land. “Let us divide the fish into two parts.” “I want the half with the head on,” said one. “You cannot have that half. That is mine,” said the other. “You take the tail.”`} 
        <br/><br/>    
        {`The Wolf heard the Otters and he went up to them. Seeing the Wolf, the Otters said: “Lord of the gray-grass color, this fish was caught by both of us together. We cannot agree about dividing him. Will you divide him for us?”`}
        <br/><br/>
        {`The Wolf cut off the tail and gave it to one, giving the head to the other. He took the large middle part for himself, saying to them, “You can eat the head and the tail without quarreling.” And away he ran with the body of the fish. The Otters stood and looked at each other. They had nothing to say, but each thought to himself that the Wolf had run off with the best of the fish.`}
        <br/><br/>
        {`The Wolf was pleased and said to himself, as he ran toward home, “Now I have fresh fish for my mate.”`}
        <br/><br/>
        {`His mate, seeing him coming, came to meet him, saying: “How did you get fish? You live on land, not in the water.” Then he told her of the quarrel of the Otters. “I took the fish as pay for settling their quarrel,” said he.`}</p>
      </div>
    </section>
)
