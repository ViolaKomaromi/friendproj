import React from "react";
import "../../components/ContactButton/contactpage.css";

function Developer({ items }) {
    return (
        <div>
            {items.map((developer) => {
                const { id, img, name, github, email, role } = developer;
                return (
                    <div className="developer-card">
                        <div key={id}>
                            <header>
                                <img src={img} alt="..." />
                                <div className="developer-card-user-headline">
                                    <h5>{name}</h5>
                                    <div>
                                        <p>{github}</p>
                                        <p>{email}</p>
                                        <p>{role}</p>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Developer;
