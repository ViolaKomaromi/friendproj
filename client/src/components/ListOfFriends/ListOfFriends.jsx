import React from "react";
import "./ListOfFriends.css";
import * as Icon from "react-bootstrap-icons";


const ListOfFriends = ({ id, full_name, location, image, friendcount }) => {
    return (
        <div>
            <section className="imagebox w3-button">
                <div>
                    <img src={`${image}`} alt={full_name} className="frlist-image" />
                </div>
                <div className="fr-imagetext">
                    <h3 className="friends_full_name">{full_name}</h3>
                    <p className="location-friendlist">{location}</p>
                </div>
                <div className="friendcount-box">
                    <h4 className="friendcount">{friendcount}</h4>
                </div>
                <div>
                <Icon.ChatLeftTextFill size={30} className="card-footer-btn " />
                <br />
                    <Icon.XOctagonFill size={30} className="card-footer-btn " />
                </div>
            </section>
        </div>
    );
};
export default ListOfFriends;