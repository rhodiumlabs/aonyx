
//particle class
class Particle {
    constructor(x, y, ctx) {
      this.x = x;
      this.y = y;
      this.vy = (Math.random() * -1) / 3;
      this.ctx = ctx;
       //size of Particle
      this.radius = 1.5;
    }
    draw() {
        var dist = Math.abs(this.y - window.innerHeight / 2);
        this.ctx.fillStyle = "rgba(255,255,255, 0.5)";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fill();
        this.ctx.closePath();
    }
}




import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.theta = 0;
    this.animate = this.animate.bind(this);
    this.particles = []
  }
  componentDidMount() {
    //Initialise
    this.ctx = this.canvas.getContext("2d");
    this.ctx.scale(2, 2);
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.particles = this.generateParticles(this.ctx);

    window.onresize = () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.clearCanvas(this.ctx);
        this.particles = this.generateParticles(this.ctx);
    }

    this.animate(); 
  }


  generateParticles(ctx) {
    let particleNum = parseInt((window.innerWidth+200)/ 50);
    return [...new Array(particleNum)].map((_, i) => 
        new Particle((i * ((window.innerWidth+200) / particleNum)) - 100, 0, ctx)
    );
  }

  drawLine(ctx, p1, p2) {
    let dx = p1.x - p2.x;
    let dy = p1.y - p2.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= 210 || Math.abs(dx) < 100) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.closePath();
    }
  }

  clearCanvas(ctx) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  animate() {
    this.clearCanvas(this.ctx);
    this.particles.map(p => p.draw());

    //Reposition particles
    this.theta += 0.0025;
    let theta = this.theta;
    let w = window.innerWidth;
    let h = window.innerHeight;
    var x = theta;

    let amplitude = 130;
    let dx = ((Math.PI * 2) / this.particles.length);

    for (var i = 0; i < this.particles.length; i++) {
        let p = this.particles[i];
        if (i % 2 == 0)
            p.y = (Math.sin(2*x) * amplitude) + h / 1.4;
        else
            p.y = (1 - Math.sin(x) * amplitude) + h / 1.4;

        x += dx;

        //make sure the particles don't escape

        if (p.y + p.radius > h) {
            p.y = p.radius;
        } else if (p.y - p.radius < 0) {
            p.y = h - p.radius;
        }
        p.y -= i*5;
        //check distance from current particle to all others
        for (var j = i + 1; j < this.particles.length; j++) {
            var p2 = this.particles[j];
            this.drawLine(this.ctx, p, p2);
        }

    }
    requestAnimFrame(this.animate);
  }

  render () {
    return <canvas style={{position: 'absolute',width: '100%', height: '100vh'}} ref={(r)=> {this.canvas = r}} />
  }
}
