import { useState } from "react";
// import "./ContactForm.css";
import axios from "axios";
import "../../components/ContactButton/contactpage.css";
// import Navbar from '../../components/MainNav/Navbar';

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const [data, setData] = useState({});

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        axios({
            method: "POST",
            url: "/contact/message",
            baseURL: "http://localhost:4001",
            data: data,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        setStatus("Submit");
        // alert(data.status);
    };

    // let alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    let alertTrigger = document.getElementById('liveAlertBtn')

    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

        // alertPlaceholder.append(wrapper)
    }

    if (alertTrigger) {
        alertTrigger.addEventListener('click', function () {
            alert('Message sent', 'success')
        })
    }


    return (
        <>
          
            <div className="contact-form-main">
                <h5 className="modal-title contact-title" id="contactModalLabel">
                    Need a bit more? Contact us
                </h5>
                <form className="form contact-form" onSubmit={submitHandler}>
                    <div className="pt-2">
                        <div>
                            <label htmlFor="name" className="form-label">
                                Name:
                            </label>
                            <br />
                            <input type="text" className="form-control" id="name" required placeholder="Enter Your Full Name" onChange={changeHandler} />
                        </div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            <br />
                            Email address
                        </label>
                        <br />
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter Your Email"
                            name="email"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                                changeHandler(e);
                            }}
                        />
                        <br />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <br />
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Message
                        </label>
                        <br />
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={changeHandler}></textarea>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default ContactForm;
