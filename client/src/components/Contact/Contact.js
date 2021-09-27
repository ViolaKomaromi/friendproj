import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import image from './rocket.png';
const Footer = () => {
  return (
    <div className='container contact-form'>
      <div className='contact-image'>
        <img src={image} alt='rocket_contact' />
      </div>
      <form method='post'>
        <h3>Drop Us a Message</h3>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <input
                type='text'
                name='txtName'
                className='form-control'
                placeholder='Your Name *'
                value=''
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='txtEmail'
                className='form-control'
                placeholder='Your Email *'
                value=''
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='txtPhone'
                className='form-control'
                placeholder='Your Phone Number *'
                value=''
              />
            </div>
            <div className='form-group'>
              <input
                type='submit'
                name='btnSubmit'
                className='btnContact'
                value='Send Message'
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group'>
              <textarea
                name='txtMsg'
                className='form-control'
                placeholder='Your Message *'
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Footer;
