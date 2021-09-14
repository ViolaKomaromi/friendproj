import React from "react";
import * as Icon from "react-bootstrap-icons";

function CultureTips() {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn culture_btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <Icon.ChatLeftQuoteFill size={30} />
                <div>
                    <p>Cultural Tips</p>
                </div>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">Here's a cultural tip</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CultureTips;
