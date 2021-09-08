import { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit")
  const [data, setData] = useState({});

  const changeHandler = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    axios({
      method: 'POST',
      url: '/contact/message',
      baseURL: 'http://localhost:4001',
      data: data
    }).then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
    setStatus("Submit");
    // alert(data.status);
  }

  return (
    <div className="form-container  border-primary d-flex justify-content-center">
      <form className="form" onSubmit={submitHandler}>
        <div className="pt-2">
        <div>
        <label htmlFor="name" className="form-label">Name:</label><br />
        <input type="text"
        className="form-control"
         id="name" 
         required placeholder="Enter Your Full Name" 
         
         onChange={changeHandler} />
        </div>
          <label htmlFor="exampleFormControlInput1" className="form-label"><br />
            Email address
          </label><br />
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Email"
            name="email"
            aria-describedby="emailHelp"
            onChange={(e) => { changeHandler(e) }}
          /><br />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div><br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label><br />
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
            onChange={changeHandler}
          ></textarea>
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" value="Submit" className="btn btn-primary tada shake">{status}</button>
        </div>
      </form>
    </div>
  );
}


export default ContactForm;

