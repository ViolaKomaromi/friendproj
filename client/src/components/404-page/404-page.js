import React from 'react';
import image from './54a170c2dd0895dd408b4592.jpeg';
import './404.css';

const PageNotFound = () => {
  return (
    <div class='container'>
      <div class='row'>
        <div class='col-md-12'>
          <div class='error-template'>
            <img src={image} alt='Admin' />
            {/* <img src='https://i.imgur.com/qIufhof.png' /> */}
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div class='error-details'>
              Sorry, an error has occured, Requested page not found!
            </div>
            <div class='error-actions'>
              <a
                href='http://www.jquery2dotnet.com'
                class='btn btn-primary btn-lg'
              >
                <span class='glyphicon glyphicon-home'></span>
                Take Me Home{' '}
              </a>
              <a
                href='http://www.jquery2dotnet.com'
                class='btn btn-default btn-lg'
              >
                <span class='glyphicon glyphicon-envelope'></span> Contact
                Support{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div id='wrapper'>
    //   {/* <img src='https://i.imgur.com/qIufhof.png' /> */}

    //   <img src={image} alt='Admin' />
    //   <div id='info'>
    //     <h2>404</h2>
    //     <h3>Oops, this page does not exist</h3>
    //   </div>
    // </div>
  );
};

export default PageNotFound;
