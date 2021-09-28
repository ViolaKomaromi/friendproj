import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container'>
        <div className='row text-center text-xs-center text-sm-left text-md-left'></div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5'>
            <ul className='list-unstyled list-inline social text-center'>
              <li className='list-inline-item'>
                <a href='/'>
                  <i className='fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='/'>
                  <i className='fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='/'>
                  <i className='fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='/'>
                  <i className='fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x'></i>
                </a>
              </li>

              <li className='list-inline-item'>
                <a href='/' target='/'>
                  <i className='fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='/' target='/'>
                  <i className='fa fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white'>
            <p className='h6'>Copyright &copy; 2021 Chips'n Sauce</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
