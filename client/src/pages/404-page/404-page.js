import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import image from './54a170c2dd0895dd408b4592.jpeg';
//import './404.css';

const PageNotFound = () => {
  return (
    // <div className='container'>
    //   <div className='row justify-content-center'>
    //     <div className='col-md-12 col-sm-12'>
    //       <img src={image} alt='Admin' />
    //       <div
    //         className='card shadow-lg border-0 rounded-lg mt-5 mx-auto'
    //         // style='width: 30rem;'
    //       >
    //         <h3 className='card-header display-1 text-muted text-center'>
    //           404
    //         </h3>

    //         <span className='card-subtitle mb-2 text-muted text-center'>
    //           Page Could Not Be Found
    //         </span>

    //         <div className='card-body mx-auto'>
    //           <a
    //             type='button'
    //             href='/'
    //             className='btn btn-sm btn-primary text-white'
    //           >
    //             Back To Home
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='container'>
      <img src={image} alt='Admin' />
      <div className='row'>
        <div className='col-md-12'>
          <div className='error-template'>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className='error-details'>
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className='error-actions'>
              <a href='/' className='btn btn-primary btn-lg'>
                <span className='glyphicon glyphicon-home'></span>
                Take Me Home{' '}
              </a>
              <a href='/' className='btn btn-primary btn-lg'>
                <span className='glyphicon glyphicon-envelope'></span> Contact
                Support{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
