import React from "react";
import * as Icon from "react-bootstrap-icons";
import img from "../../data/data";
import { useState } from "react";
import axios from "../../util/axios";
import "../../components/Match/matchpage.css";
import Friends from "../FriendMatch/Friends";

function RandomCard({ randomMatch }) {
    const [native, setNative] = useState("");
    const [showResult, setShowResult] = useState(null);

    const random = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get("/random");

            console.log("there is your match 🟢");
            console.log(res.data);
            setShowResult(res.data);
        } catch (error) {
            console.log("Error happened", error);
        }
    };

    return (
        <div className="card" style={{ width: "20rem" }}>
            <header>
                <img src={randomMatch.avatar} alt="..." />
                <div className="card-user-headline">
                    <h5>{randomMatch.fullname}</h5>
                    <div>
                        <p>{randomMatch.native}</p>
                        {/* <p>{new Date (randomMatch.birthday).toLocaleDateString() }</p> */}
                        <p>{randomMatch.location}</p>
                    </div>
                </div>
            </header>

            <div className="card-body">
                <p className="card-text">
                When the going gets tough, the tough get going.
                </p>
                <p className="card-text">
                Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.
                </p>
            </div>
            <footer>
                <Icon.PlusCircleFill size={30} className="card-footer-btn" />
                <Icon.ChatLeftTextFill size={30} className="card-footer-btn" />
            </footer>
        </div>
    );
}

export default RandomCard;
