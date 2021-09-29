import React from 'react';
import ContactPage from '../../components/ContactButton/ContactPage';
import logo from '../../image/FJ_friendja.png';
import Profile from '../../pages/Profile/Profile-settings';
import './Navbar.css';
import Logout from '../LandingTwo/Logout';
import userIcon from '../../image/tyrolean.png';

export default function Navbar() {
  const logout = () => {
    localStorage.clear();
    localStorage.removeItem('Token');
    window.location.href = '/';
  };

  return (
    <div>
      <nav className='navbar fixed-top navbar-expand-lg navbar-light '>
        <div className='container-fluid '>
          <a className='nav-link active' aria-current='page' href='/'>
            <img className='navbar-img' src={logo} alt='' />
          </a>

          <div id='navbarNavAltMarkup'>
            {/* <div className="collapse navbar-collapse " id="navbarNavAltMarkup"> */}
            <div className='navbar-nav ms-auto'>
              {/* <div className="nav-btns"></div> */}
              <ul className='navbar-nav'>
                <li className='nav-item dropdown'>
                  <a
                    // className="nav-link dropdown-toggle"
                    href='#'
                    id='navbarDropdownMenuLink'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <img className='nav-profile' src={userIcon} />
                  </a>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdownMenuLink'
                  >
                    <li>
                      <a className='dropdown-item' href='/random'>
                        Home
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='/profile'>
                        Profile
                      </a>
                    </li>

                    <li>
                      <a className='dropdown-item' href='/friendlist'>
                        Friend List
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='/mailbox'>
                        Inbox
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='/about'>
                        About FriendJa
                      </a>
                    </li>
                    

                    <li>
                      <a className='dropdown-item' onClick={logout} href='/'>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
