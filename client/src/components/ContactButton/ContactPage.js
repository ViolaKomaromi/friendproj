import React from "react";
import ContactForm from "../../pages/contactForm/ContactForm";
import ContactDeveloperCard from "./../../pages/contactForm/ContactDeveloperCard";
import "./contactpage.css";

function ContactPage() {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn nav-btn" data-bs-toggle="modal" data-bs-target="#contactModal">
                Contact
            </button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="contact-content">
                        <div className="closeArea">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="contact-body">
                            <ContactDeveloperCard />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;

// {/* <>
// {/* <!-- Button trigger modal --> */}
// <button type="button" className="btn  nav-btn" data-bs-toggle="modal" data-bs-target="#contactModal">
//     Contact
// </button>
// {/* <!-- Modal --> */}
// <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
//     <div className="modal-dialog modal-fullscreen">
//         <div className="modal-content">
//             <div className="modal-header contact-modal-header">
//                 <h5 className="modal-title" id="contactModalLabel">
//                     Need a bit more? Contact us
//                 </h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body contact-body">
//                 <ContactDeveloperCard />
//                 <ContactForm />
//             </div>
//         </div>
//     </div>
// </div>
// </> */}
