import React from 'react';
import './Hero.css';
import heroimage from '../Assets/test-image.jpg'
import herologo from '../Assets/og-logo.png'
import herologo1 from '../Assets/text-og-logo.png'
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
      {<img id='hero-bg' className='parallax hero-bg' data-speedx="0.1" data-speedy="0.05" src={heroimage} alt="" />}
      {<img id='hero-logo' className='parallax hero-logo' data-speedx="0.16" data-speedy="0.08" src={herologo} alt="" />}
      {<img id='hero-logo1' className='parallax hero-logo1' data-speedx="0.2" data-speedy="0.1" src={herologo1} alt="" />}

    </div>
  )
}

export default Hero
