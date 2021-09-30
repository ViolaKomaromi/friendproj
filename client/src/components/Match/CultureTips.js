import React from "react";
import * as Icon from "react-bootstrap-icons";
import "../CultureJokes/jokescard.css"

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
                    <div className="modal-content culturecard">
                        <div className="modal-header">
                            <button type="button" className="btn-close culture_close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body culture-txt">
                        There are more than 23 million words in german language.</div>
                        <br />
                        <br />
                        <div className="modal-body culture-txt">One of the most popular german songs is „99 Luftballons“ by Nena.</div>
                        <br />
                        <br />
                        <div className="modal-body culture-txt">Punctuality is the key to success in Germany - it is considered impolite to not be 5-10 minutes earlier at a meeting.</div>
                        <br />
                        <br />
                        <div className="modal-body culture-txt">If your neighbours see you throwing recyclable glass or paper in the general trash, your relationship with your neighbours could be strained forever. </div>
                        <br />
                        <br />
                        <div className="modal-body culture-txt">
                        Germans love dubbing - replacing original audio dialogue from one language to german. They love dubbing films, radio ads, audiobooks, and learning materials. </div>
                        <div className="modal-body culture-txt">
                        The most beloved type of beer in Germany is Pilsner. </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CultureTips;
