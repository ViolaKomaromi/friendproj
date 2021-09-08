import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
// import "./ProfileSettings.css";



const Profile = (props) => {
  
  const url = 'https://restcountries.eu/rest/v2/all';
  // eslint-disable-next-line no-unused-vars
  const [countries, setCountries] = useState([])
  

  const fetchCountryData = async () =>{
    const res = await fetch(url)
    const countries = await res.json()
    setCountries(countries)
    console.log(countries)
  }
  useEffect(() => {
    fetchCountryData()
  }, [])
  
  const [user, setUser] = useState({});
  const [image, setImage] = useState({preview: false, raw: ""})

  //to handle changes on other form elements
  const changeHandler = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  //to handle changes on the input:file
  const fileHandler = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      })
    }
  }


  //on submit of the form
  const submitHandler = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('email',user.email);
    fd.append('username',user.username);
    fd.append('password', user.password);
    fd.append('file', image.raw, image.preview)

    axios({
      method: 'POST',
      url: '/Profile/message',
      baseURL: 'http://localhost:4001',
      data: fd,
      headers: {
        "Content-Type": "multipart/formdata"
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <div className="container rounded text-center mt-3 col-md-7 col-sm-10 col-xs-12">
      <div className="bg-light border p-md-5 p-sm-2 p-xs-1 rounded">
        <h4 className="text-dark mb-5 mt-3">
          User  Form
          <hr />
        </h4>

        <form
          className="form m-5"
          onSubmit={submitHandler}
          encType="multipart/form-data"

        >
          {/* upload Image */}
          <label htmlFor="upload-button" className="float-left mb-3">
            {/* image preview */}
            {image.preview ? (
              <img
                src={image.preview}
                alt="profile-pic"
                className="rounded-circle ml-3"
                style={{
                  width: "100px",
                  height: "100px",
                  boxShadow: "3px 3px 6px 2px #173F5F",
                }}
              />
            ) : (
              <span
                style={{ float: "left" }}
                className="ml-3 mb-4 d-flex flex-direction-column align-items-start"
              >
                <span className="text-dark col-3">
                  <FaUserCircle
                    style={{ fontSize: "xxx-large", float: "left" }}
                  />
                </span>
                <br />
                <h6 className="text-secondary col-7">Upload photo</h6>
              </span>
            )}
          </label>

          <input
            type="file"
            name="userImg"
            style={{ display: "none" }}
            id="upload-button"
            onChange={fileHandler}
          />
          <br />

          <form className='form-inline'>
                          <label
                            className='my-1 mr-2'
                            htmlFor='inlineFormCustomSelectPref'
                            onSubmit={submitHandler}
                          >
                            Gender
                          </label>
                          <select
                            className='custom-select my-1 mr-sm-2'
                            id='inlineFormCustomSelectPref'
                          >
                            <option selected>Choose...</option>
                            <option value='1'>Male</option>
                            <option value='2'>Female</option>
                            <option value='3'>Other</option>
                          </select>
                        </form>

                        <form className='form-inline'>
                                <label
                                  className='my-1 mr-2'
                                  htmlFor='inlineFormCustomSelectPref'
                                  onSubmit={submitHandler}
                                >
                                  Age
                                </label>
                                <select
                                  className='custom-select my-1 mr-sm-2'
                                  id='inlineFormCustomSelectPref'
                                >
                                  <option selected>Choose...</option>
                                  <option value='1'>25</option>
                                  <option value='2'>26</option>
                                  <option value='3'>27</option>
                                </select>
                              </form>


                              <form className='form-inline'>
                                <label
                                  className='my-1 mr-2'
                                  htmlFor='inlineFormCustomSelectPref'
                                  onSubmit={submitHandler}
                                >
                                  City
                                </label>
                                {/* <select
                                  className='custom-select my-1 mr-sm-2'
                                  id='inlineFormCustomSelectPref'
                                >
                                  <option selected>Choose...</option>
                                  <option value='1'>Hamburg</option>
                                  <option value='2'>Duesseldorf</option>
                                  <option value='3'>Munich</option>
                                </select> */}
                                <select id="countrySelect" size="1" onChange="makeSubmenu(this.value)">
                                  <option value="" disabled selected>Choose State</option>
                                  <option>Hamburg</option>
                                  <option>Duesseldorf</option>
                                  <option>Munich</option>
                                  </select>
                                  <select id="citySelect" size="1" >
                                  <option value="" disabled selected>Choose City</option>
                                  <option></option>
                                  </select>
                                  <button>show selected</button>
                              </form>

                              <div className='card mt-3'>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                  <form className='form-inline'>
                    <label
                      className='my-1 mr-2'
                      htmlFor='inlineFormCustomSelectPref'
                      onSubmit={submitHandler}
                    >
                      My Passion is
                    </label>
                    <select
                      className='custom-select my-1 mr-sm-2'
                      id='inlineFormCustomSelectPref'
                    >
                      <option selected>Choose...</option>
                      <option value='1'>Painting</option>
                      <option value='2'>Surfing</option>
                      <option value='3'>Dancing</option>
                    </select>
                  </form>
                  <form className='form-inline'>
                    <label
                      className='my-1 mr-2'
                      htmlFor='inlineFormCustomSelectPref'
                      onSubmit={submitHandler}
                    >
                      I like drinking
                    </label>
                    <select className="selectpicker" data-live-search="true">
                      <option data-tokens="ketchup mustard">Hot Dog, Fries and a Soda</option>
                      <option data-tokens="mustard">Burger, Shake and a Smile</option>
                      <option data-tokens="frosting">Sugar, Spice and all things nice</option>
                    </select>

                    <form className='form-inline'>
                      <label
                        className='my-1 mr-2'
                        htmlFor='inlineFormCustomSelectPref'
                        onSubmit={submitHandler}
                      >
                        I like eating
                      </label>
                      <select
                        className='custom-select my-1 mr-sm-2'
                        id='inlineFormCustomSelectPref'
                      >
                        <option selected>Choose...</option>
                        <option value='1'>German, Greek, Turkish</option>
                        <option value='2'>Indian, Chineese, African</option>
                        <option value='3'>Mexican, Caribbean, Italian</option>
                      </select>
                    </form>
                    <form className='form-inline'>
                      <label
                        className='my-1 mr-2'
                        htmlFor='inlineFormCustomSelectPref'
                        onSubmit={submitHandler}
                      >
                        I like to
                      </label>
                      <select
                        className='custom-select my-1 mr-sm-2'
                        id='inlineFormCustomSelectPref'
                      >
                        <option selected>Choose...</option>
                        <option value='1'>Watch movies</option>
                        <option value='2'>Go ice skating</option>
                        <option value='3'>Play video games</option>
                      </select>
                    </form>
                  </form>
                </li>
              </ul>
            </div>
            <form >
            <input
            type='Fisrt Name'
            className='form-control'
            placeholder='John'
            onChange={changeHandler}
            />
            <input
            type='Last Name'
            className='form-control'
            placeholder='Doe'
            onChange={changeHandler}
            />

            <input
            type='email'
            className='form-control'
            id='inputEmail4'
            placeholder='jdoe@gmail.com'
            onChange={changeHandler}
            />

            <input
            type='Address'
            className='form-control'
            id='inputAddress'
            placeholder='1234 Main St'
            onChange={changeHandler}
            />

            <input
            type='City'
            className='form-control'
            id='inputCity'
            onChange={changeHandler}
            />

            <input
                type='password'
                className='form-control'
                id='inputPassword4'
                placeholder='Please enter a valid password'
                onChange={changeHandler}
                />
            </form>

          <input
            type="submit"
            value="Register"
            className="btn btn-primary col-6 mt-3"
            
          />
        </form>
      </div>
      <div className="col-5 bg-info bg-img"></div>
    </div>
  );
};


export default Profile;
