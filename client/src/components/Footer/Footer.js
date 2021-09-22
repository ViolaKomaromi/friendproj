import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container'>
        <div className='row text-center text-xs-center text-sm-left text-md-left'>
          <div className='col-xs-12 col-sm-4 col-md-4'>
            {/* <h5>Quick links</h5> */}
            <ul className='list-unstyled quick-links'>
              {/* <li>
                <a href='/'>
                  <i className='fa fa-angle-double-right'></i>Home
                </a>
              </li> */}
              <li>
                <a href='/'>
                  <i className='fa fa-angle-double-right'></i>Press
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fa fa-angle-double-right'></i>Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='col-xs-12 col-sm-4 col-md-4'>
            {/* <h5>Quick links</h5> */}
            <ul className='list-unstyled quick-links'>
              {/* <li>
                <a href='/'>
                  <i className='fa fa-angle-double-right'></i>Matching
                </a>
              </li> */}
              <li>
                <a href='/'>
                  <i className='fa fa-angle-double-right'></i>Terms of Use
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fa fa-angle-double-right'></i>Support
                </a>
              </li>
            </ul>
          </div>
          <div className='col-xs-12 col-sm-4 col-md-4'>
            {/* <h5>Quick links</h5> */}
            <ul className='list-unstyled quick-links'>
              {/* <li>
                <a href='/'>
                  <i className='fa fa-angle-double-right'></i>Press
                </a>
              </li> */}
              <li>
                <a href='/'>
                  <i className='fa fa-angle-double-right'></i>Careers
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fa fa-angle-double-right'></i>FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
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
            {/* <p>
              <u>
                <a href='https://www.nationaltransaction.com/'>
                  National Transaction Corporation
                </a>
              </u>{' '}
              is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned
              subsidiary of U.S. Bancorp, Minneapolis, MN]
            </p> */}
            <p className='h6'>
              Copyright &copy; 2021 Chips'n Sauce
              {/* <a
                className='text-green ml-2'
                href='https://www.friendja.com'
                target='/'
              ></a> */}
            </p>
            {/* <p className='chips'> Chips'n Sauce</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
