import React from 'react'
import './Banner.css';
import bannerimg from "../Assets/banner-img.jpeg";
const Banner = () => {
    return (
        <div id='main-banner'>
            {/* <img id='banner-bg' className='banner-bg' src={bannerimg} alt="" /> */}
            <div id='banner-text'> 
            <div id='about'>
            About <br></br>
            Us
            </div>
            <div id='about-desc'>
                
            <p>The biggest cultural club of the institute which provides a platform to the students to explore all the areas of dramatics like stage plays, street plays, mono-acts and mimes.
            </p>
            <p>
                Apart from acting we also work on areas like scripting, music, instruments etc. which is an integral part of drama.
            </p> 
            <p>
            We have something to offer to everybody and this is the reason our family keeps growing every year and we attain new heights.
            </p> 
            
            </div>
            </div>
        </div>
    )
}

export default Banner
