import React from "react";
import "../../components/ContactButton/contactpage.css";

function Developer({ items }) {
    return (
        <div className="contact-list-cards ">
            {items.map((developer) => {
                const { id, img, name, github, email } = developer;
                return (
                    <div className="developer-card" key={id}>
                        <header>
                            <img src={img} alt="..." />
                            <div className="developer-card-user-headline">
                                <h5>{name}</h5>
                                <div>
                                    <p>{github}</p>
                                    <p>{email}</p>
                                </div>
                            </div>
                        </header>
                    </div>
                );
            })}
        </div>
    );
}

export default Developer;
