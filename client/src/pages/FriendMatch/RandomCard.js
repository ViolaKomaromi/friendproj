
import React from "react";
import * as Icon from "react-bootstrap-icons";
import img from '../../data/data';
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


        <div className="card" style={{ width: "15rem" }}>
            <header>
                <img src={img} alt="..." />
                <div className="card-user-headline">
                    <h5>{randomMatch.fullname}</h5>
                    <div>
                        <p>{randomMatch.birthday }</p>
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


    )
}

export default RandomCard;