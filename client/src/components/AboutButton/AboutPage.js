import React from 'react';
import { useHistory } from 'react-router';

function AboutPage() {
  const history = useHistory();
  const onClickAbout = () => {
    history.push('/about');
  };
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        onClick={onClickAbout}
        type='button'
        className='btn  nav-btn'
        data-bs-toggle='modal'
        data-bs-target='/about'
      >
        About
      </button>

      {/* <!-- Modal --> */}
      <div
        className='modal fade'
        id='aboutModal'
        tabIndex='-1'
        aria-labelledby='aboutModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-fullscreen'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='aboutModalLabel'>
                How FriendJa works
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>...</div>
            {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
