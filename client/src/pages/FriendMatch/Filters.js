import React from "react";
import axios from "../../util/axios";
import { useState } from "react";
import RandomCard from './RandomCard';

import "../../components/Match/matchpage.css";
import passion from "../../image/drum.png";
import drink from "../../image/beer.png";
import food from "../../image/sausage.png";
import activity from "../../image/tent.png";
import randomButton from "../../image/lobster.png";
import Logout from '../../components/LandingTwo/Logout';
import { Filter } from "react-bootstrap-icons";
import MatchPage from './MatchPage';

function Filters({ filterItems }) {

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
        <div className="filterComponent">
            <div className="filterText">
                <h3 className="filterText-title">Filter by:</h3>
                <p>
                    Find people based <br /> on what you like
                </p>
            </div>
            <div className="filter_btns">
                <button onClick={() => filterItems("breakfast")}>
                    <img src={drink} alt="" />
                    <p>Drink</p>
                </button>
                <button onClick={() => filterItems("lunch")}>
                    <img src={passion} alt="" />
                    <p>Passion</p>
                </button>
                <button onClick={() => filterItems("shakes")}>
                    <img src={food} alt="" />
                    <p>Food</p>
                </button>
                <button onClick={() => filterItems("dinner")}>
                    <img src={activity} alt="" />
                    <p>Activity</p>
                </button>
                {/* <button onClick={() => filterItems("all")}>
                    <img src={randomButton} alt="" />
                    <p>Match Me</p>
                </button> */}

                <button onClick={random}>
                    <img src={randomButton} alt="" />
                    <p>Match Me</p>
                </button>
            </div>
            <Logout />
            
            {showResult != null ? <RandomCard randomMatch={showResult}/> : <p></p>}
        </div>
    );
}

export default Filters;


/* <div>
<button onClick={() => filterItems("all")}>all</button>
<button onClick={() => filterItems("breakfast")}>Breakfast</button>
</div> */
