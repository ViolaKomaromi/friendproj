import React from "react";
import "../../components/Match/matchpage.css";
import * as Icon from "react-bootstrap-icons";

function Friends({ items }) {

    return (

        <div className="result-list-cards">
            {items.map((friend) => {
                const { id, title, img, desc} = friend;

                return (
                    <div className="card" style={{ width: "20rem" }} key={id}>
                        <header>
                            <img src={img} alt="..." />
                            <div className="card-user-headline">
                                <h5>{title}</h5>
                                <div>
                                    <p>24</p>
                                    <p>Berlin</p>
                                </div>
                            </div>
                        </header>

                        <div className="card-body">
                            <p className="card-text">{desc}</p>
                        </div>
                        <footer>
                            <Icon.PlusCircleFill size={30} className="card-footer-btn" />
                            <Icon.ChatLeftTextFill size={30} className="card-footer-btn" />
                        </footer>
                    </div>
                );
            })}
        </div>
    );
}

export default Friends;


