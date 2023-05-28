import React from 'react';
import './Hero.css';
import heroimage from '../Assets/test-image.jpg';
import herolayer1 from '../Assets/Layer1.png';
import herolayer2 from '../Assets/Layer2.png';
import herolayer3 from '../Assets/Layer3.png';
import herolayer4 from '../Assets/Layer4.png';
import herolayer5 from '../Assets/Layer5.png';
import herolayer6 from '../Assets/Layer6.png';
const Hero = () => {

  const parallax_el = document.querySelectorAll(".parallax");
  let xValue = 0, yValue = 0;

  window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach(el => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;


      el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
    translateY(calc(-50% + ${yValue * speedy}px))`;
    })
  })

  return (
    <div id='main-hero'>
      <img id='hero-bg' className='parallax hero-bg' data-speedx="0.025" data-speedy="0.025" src={heroimage} alt="" />
      <img id='hero-layer1' className='parallax layers hero-layer1' data-speedx="0.11" data-speedy="0.11" src={herolayer1} alt="" />
      <img id='hero-layer2' className='parallax layers hero-layer2' data-speedx="0.09" data-speedy="0.09" src={herolayer2} alt="" />
      <img id='hero-layer3' className='parallax layers hero-layer3' data-speedx="0.075" data-speedy="0.075" src={herolayer3} alt="" />
      <img id='hero-layer4' className='parallax layers hero-layer4' data-speedx="0.07" data-speedy="0.07" src={herolayer4} alt="" />
      <img id='hero-layer5' className='parallax layers hero-layer5' data-speedx="0.06" data-speedy="0.06" src={herolayer5} alt="" />
      <img id='hero-layer6' className='parallax layers hero-layer6' data-speedx="0.08" data-speedy="0.08" src={herolayer6} alt="" />

    </div>
  )
}

export default Hero