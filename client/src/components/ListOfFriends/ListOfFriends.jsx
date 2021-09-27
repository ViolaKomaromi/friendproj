import React from "react";
import "./ListOfFriends.css";
import * as Icon from "react-bootstrap-icons";


const ListOfFriends = ({ id, full_name, location, image }) => {
    return (
        <div>
            <section className="imagebox w3-button">
                <div>
                    <img src={`${image}`} alt={full_name} className="image" />
                </div>
                <div className="imagetext">
                    <h3 className="full_name">{full_name}</h3>
                    <p className="location-friendlist">{location}</p>
                    
                    
                </div>
                <div>
                <Icon.ChatLeftTextFill size={30} className="card-footer-btn" />
                <br />
                    <Icon.XOctagonFill size={30} className="card-footer-btn" />
                </div>
            </section>
        </div>
    );
};
export default ListOfFriends;