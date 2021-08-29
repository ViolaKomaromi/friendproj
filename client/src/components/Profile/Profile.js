import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../Profile/profilephotoplaceholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export const Profile = () => {
  return (
    <div className='container'>
      <div className='main-body'>
        <ul class='profile-header-tab nav nav-tabs'>
          <li class='nav-item'>
            <a href='#profile-post' class='nav-link' data-toggle='tab'>
              FRIENDJA
            </a>
          </li>
          <li class='nav-item'>
            <a href='#profile-post' class='nav-link' data-toggle='tab'>
              SEARCH
            </a>
          </li>
          <li class='nav-item'>
            <a href='#profile-about' class='nav-link' data-toggle='tab'>
              ABOUT
            </a>
          </li>
          <li class='nav-item'>
            <a href='#profile-photos' class='nav-link' data-toggle='tab'>
              PHOTOS
            </a>
          </li>
          <li class='nav-item'>
            <a href='#profile-videos' class='nav-link' data-toggle='tab'>
              CONTACT
            </a>
          </li>
          <li class='nav-item'>
            <a
              href='#profile-friends'
              class='nav-link active show'
              data-toggle='tab'
            >
              FRIENDS
            </a>
          </li>
        </ul>
      </div>

      <div className='row gutters-sm'>
        <div className='col-md-4 mb-3'>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex flex-column align-items-center text-center'>
                <img
                  src={logo}
                  alt='Admin'
                  className='rounded-circle'
                  width='150'
                />
                <FontAwesomeIcon icon={faUpload} />
                <div className='mt-3'>
                  <h4>Harald Schmidt </h4>
                  <p className='text-secondary mb-1'>Journalist</p>
                  <p className='text-secondary mb-1'>29</p>
                  <p className='text-muted font-size-sm'>
                    Hamburg, Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='card mt-3'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Full Name:</h6>
                </div>
                <div class='col-sm-9 text-secondary'>Harald Schmidt</div>
                <span className='text-secondary'></span>
              </li>
              <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Age:</h6>
                </div>
                <div class='col-sm-9 text-secondary'>29</div>
              </li>
              <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Nationality:</h6>
                </div>
                <div class='col-sm-9 text-secondary'>Germany</div>
              </li>
              <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Location:</h6>
                </div>

                <div class='col-sm-9 text-secondary'>Hamburg, DE</div>
              </li>
              <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Occupation:</h6>
                </div>

                <div class='col-sm-9 text-secondary'>Journalist</div>
              </li>
              <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Hobbys:</h6>
                </div>
                <div class='col-sm-9 text-secondary'>Gardening</div>
              </li>
            </ul>
          </div>
          <a href='#' class='btn btn-xs btn-primary mb-2'>
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
