import React from "react";
import * as Icon from "react-bootstrap-icons";

function CultureTips() {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn culture_btn" data-bs-toggle="modal" data-bs-target="#cultureModal">
                <Icon.ChatLeftQuoteFill size={30} />
                <div>
                    <p>Cultural Tips</p>
                </div>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="cultureModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">There are more than 23 million words in german language</div>
                        <div className="modal-body">Punctuality is the key to success in Germany - it is considered impolite to not be 5-10 minutes earlier at a meeting</div>
                        <div className="modal-body">If your neighbours see you throwing recyclable glass or paper in the general trash, your relationship with your neighbours could be forever strained</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CultureTips;
