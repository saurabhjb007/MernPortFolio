import React from 'react';
import './Hero.css';
import profile_img from '../../assets/saurabh_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const resumeLink = 'https://my-resume-one-sigma.vercel.app/';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Saurabh Sharma,</span> Mern Stack Developer based in India.</h1>
      <p> I am an aspiring MERN Stack Developer from Nagpur, Maharashtra, with a
      passion for building dynamic and responsive web applications.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">My resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
