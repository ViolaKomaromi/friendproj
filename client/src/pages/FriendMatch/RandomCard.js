
import React from "react";
import * as Icon from "react-bootstrap-icons";



function RandomCard({ randomMatch }) {



    return (
        <div className="result-list-cards">
            
              
                    <div className="card" style={{ width: "20rem" }}>
                        <header>
                            <img src={randomMatch.img} alt="..." />
                            <div className="card-user-headline">
                                <h5>{randomMatch.username}</h5>
                                <div>
                                    <p>{randomMatch.date}</p>
                                    <p>{randomMatch.location}</p>
                                </div>
                            </div>
                        </header>

                        <div className="card-body">
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium natus earum! Eligendi dolore architecto facere nobis. Culpa, repudiandae enim?</p>
                        </div>
                        <footer>
                            <Icon.PlusCircleFill size={30} className="card-footer-btn" />
                            <Icon.ChatLeftTextFill size={30} className="card-footer-btn" />
                        </footer>
                    </div>
                
           
        </div>
    );
}

export default RandomCard;