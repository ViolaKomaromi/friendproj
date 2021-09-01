import React from "react";

function ContactPage() {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary nav-btn" data-bs-toggle="modal" data-bs-target="#contactModal">
                Contact
            </button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="contactModalLabel">
                                Need a bit more? Contact us
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">...</div>
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

export default ContactPage;
