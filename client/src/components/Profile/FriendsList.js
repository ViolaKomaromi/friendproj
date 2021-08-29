import React from 'react';

const FriendsList = () => {
  return (
    <div>
      <div class='container'>
        <div id='content' class='content p-0'>
          <div class='profile-container'>
            <div class='row row-space-20'>
              <div class='col-md-8'>
                <div class='tab-content p-0'>
                  <div class='tab-pane fade active show' id='profile-friends'>
                    <div class='m-b-10'>
                      <b>Friend List (9)</b>
                    </div>

                    <ul class='friend-list clearfix'>
                      <li>
                        <a href='#'>
                          <div class='friend-img'>
                            <img
                              src='https://bootdey.com/img/Content/avatar/avatar2.png'
                              alt=''
                            />
                          </div>
                          <div class='friend-info'>
                            <h4>Uwe Thieme</h4>
                            <p>392 friends</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class='friend-img'>
                            <img
                              src='https://bootdey.com/img/Content/avatar/avatar3.png'
                              alt=''
                            />
                          </div>
                          <div class='friend-info'>
                            <h4>Steffanie Winkel</h4>
                            <p>128 friends</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class='friend-img'>
                            <img
                              src='https://bootdey.com/img/Content/avatar/avatar4.png'
                              alt=''
                            />
                          </div>
                          <div class='friend-info'>
                            <h4>Martin Lanz</h4>
                            <p>12 friends</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class='friend-img'>
                            <img
                              src='https://bootdey.com/img/Content/avatar/avatar5.png'
                              alt=''
                            />
                          </div>
                          <div class='friend-info'>
                            <h4>Sören Kruse</h4>
                            <p>1,923 friends</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class='friend-img'>
                            <img
                              src='https://bootdey.com/img/Content/avatar/avatar6.png'
                              alt=''
                            />
                          </div>
                          <div class='friend-info'>
                            <h4>Claudia Scheffel</h4>
                            <p>893 friends</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class='friend-img'>
                            <img
                              src='https://bootdey.com/img/Content/avatar/avatar7.png'
                              alt=''
                            />
                          </div>
                          <div class='friend-info'>
                            <h4>Kamil Cree</h4>
                            <p>983 friends</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class='friend-img'>
                            <img
                              src='https://bootdey.com/img/Content/avatar/avatar8.png'
                              alt=''
                            />
                          </div>
                          <div class='friend-info'>
                            <h4>Fritjof Inderjit</h4>
                            <p>3,321 friends</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class='friend-img'>
                            <img
                              src='https://bootdey.com/img/Content/avatar/avatar1.png'
                              alt=''
                            />
                          </div>
                          <div class='friend-info'>
                            <h4>Frank Zander</h4>
                            <p>921 friends</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class='friend-img'>
                            <img
                              src='https://bootdey.com/img/Content/avatar/avatar2.png'
                              alt=''
                            />
                          </div>
                          <div class='friend-info'>
                            <h4>Frans Gebhard</h4>
                            <p>944 friends</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <div class='col-md-4 hidden-xs hidden-sm'>
                <ul class='profile-info-list'>
                  <li class='title'>PERSONAL INFORMATION</li>
                  <li>
                    <div class='field'>Occupation:</div>
                    <div class='value'>UXUI / Frontend Developer</div>
                  </li>
                  <li>
                    <div class='field'>Skills:</div>
                    <div class='value'>
                      C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel,
                      Phonegap, Bootstrap, Angular JS, Angular JS, Asp.net
                    </div>
                  </li>
                  <li>
                    <div class='field'>Birth of Date:</div>
                    <div class='value'>1989/11/04</div>
                  </li>
                  <li>
                    <div class='field'>Country:</div>
                    <div class='value'>San Francisco</div>
                  </li>
                  <li>
                    <div class='field'>Address:</div>
                    <div class='value'>
                      <address class='m-b-0'>
                        Twitter, Inc.
                        <br />
                        1355 Market Street, Suite 900
                        <br />
                        San Francisco, CA 94103
                      </address>
                    </div>
                  </li>
                  <li>
                    <div class='field'>Phone No.:</div>
                    <div class='value'>(123) 456-7890</div>
                  </li>
                  <li class='title'>FRIEND LIST (9)</li>
                  <li class='img-list'>
                    <a href='#' class='m-b-5'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar2.png'
                        alt=''
                      />
                    </a>
                    <a href='#' class='m-b-5'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar3.png'
                        alt=''
                      />
                    </a>
                    <a href='#' class='m-b-5'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar4.png'
                        alt=''
                      />
                    </a>
                    <a href='#' class='m-b-5'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar5.png'
                        alt=''
                      />
                    </a>
                    <a href='#' class='m-b-5'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar6.png'
                        alt=''
                      />
                    </a>
                    <a href='#' class='m-b-5'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar7.png'
                        alt=''
                      />
                    </a>
                    <a href='#' class='m-b-5'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar8.png'
                        alt=''
                      />
                    </a>
                    <a href='#' class='m-b-5'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar1.png'
                        alt=''
                      />
                    </a>
                    <a href='#' class='m-b-5'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar2.png'
                        alt=''
                      />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
