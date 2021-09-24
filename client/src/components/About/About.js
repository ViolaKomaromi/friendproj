import React from 'react';
import image from '../About/friends_2.jpeg';

const AboutMe = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={image} alt='author...' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-heading'>About FriendJa</h1>
          <p>
            Hello! We are the 'Chips' Sauce Team' the Makers of FriendJa.com. We
            are Full-Stack Web Developers. Technologies we use is MERN(MongoDB,
            Express, ReactJS and NodeJS). We create responsive websites that are
            displayed on all devices desktops and smartphones. Of course, before
            we begin developing any webapp, Landing Page, Business Website or
            E-commerce, we need to have a ready-made project layout (sketch).
            And we're ready to do this for you, before we start developing your
            website, we will discuss all the details of your niche with you, we
            will conduct a survey of your competitors and make a list of their
            advantages and weaknesses. All this is necessary to give your
            customers something that your competitors do not provide, or to
            present it too, but better! After the website is finished and ready
            to deploy and sell a product or service. It is essential that your
            potential clients know about you. We will create an advertising
            campaign for you in Google Adwords and Facebook!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
