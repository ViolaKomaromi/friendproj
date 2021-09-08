import React from 'react';
import logo from './54a170c2dd0895dd408b4592.jpeg';

const PageNotFound = () => {
  return (
    <div id='wrapper'>
      {/* <img src='https://i.imgur.com/qIufhof.png' /> */}
      <img src={logo} alt='Admin' className='rounded-circle' width='300' />
      <div id='info'>
        <h3>This page could not be found</h3>
      </div>
    </div>
  );
};

export default PageNotFound;
