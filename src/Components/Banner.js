import React from 'react'
import './Banner.css';
import bannerimg from "../Assets/banner-img.jpeg";
const Banner = () => {
    return (
        <div id='main-banner'>
            <img id='banner-bg' className='banner-bg' src={bannerimg} alt="" />
        </div>
    )
}

export default Banner
