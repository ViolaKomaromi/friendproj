import React, { useEffect } from "react";
// import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../util/axios";

function ResultCard({ name }) {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [birthday, setBirthday] = useState("");
    const [location, setLocation] = useState("");
    const [native, setNative] = useState("");

    const history = useHistory();

    const random = useEffect(() => {}, []);

    return (
        <>
            <div className="card" style={{ width: "20rem" }}>
                <header>
                    <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt="..."
                    />
                    <div className="card-user-headline">
                        <h5>{name}</h5>
                        <div>
                            <p>24</p>
                            <p>Berlin</p>
                        </div>
                    </div>
                </header>

                <div className="card-body">
                    <p className="card-text">Rerum qui et. Est delectus neque eaque ullam voluptatem impedit sint.</p>
                </div>
                <footer>
                    {/* <Icon.PlusCircleFill size={30} className="card-footer-btn" /> */}
                    {/* <Icon.ChatLeftTextFill size={30} className="card-footer-btn" /> */}
                </footer>
            </div>
        </>
    );
}

export default ResultCard;
