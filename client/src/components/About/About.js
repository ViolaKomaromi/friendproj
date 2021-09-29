import React from 'react';
import Navbar from '../MainNav/Navbar';
import image from '../About/friends_2.jpeg';
import image1 from '../About/image1.png';
import image2 from '../About/image2.png';
import image3 from '../About/image3.png';
import image4 from '../About/image4.png';
import image5 from '../About/image5.png';
import image6 from '../About/image6.png';

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
            Are you new in Germany and haven't really found many friends yet? Do
            you want to learn some more facts about german culture? Do you want
            to be part of a new way of making friends? Then you have found the
            perfect Application! At FriendJa you can register yourself as an
            expat or as a local and start browsing through our website of many
            other lovely people, all looking to find some new friends. After
            logging in, you can bookmark a person and contact them by sending
            them a message. To help you with filtering through our database, you
            can read about tips and cultural facts about germans. Here you can
            see how the website looks like after you have signed in.
            {/* Hello! We are the 'Chips' Sauce Team' the Makers of FriendJa.com. We
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
            campaign for you in Google Adwords and Facebook! */}
          </p>

          <div class='row'>
            <div class='col-lg-4 col-md-12 mb-4 mb-lg-0'>
              <img
                src={image1}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={image2}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />
            </div>

            <div class='col-lg-4 mb-4 mb-lg-0'>
              <img
                src={image3}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={image4}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />
            </div>

            <div class='col-lg-4 mb-4 mb-lg-0'>
              <img
                src={image5}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={image6}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default AboutMe;
