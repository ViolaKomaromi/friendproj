import "./matchpage.css";
import axios from "../../util/axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import passion from "../../image/drum.png";
import drink from "../../image/beer.png";
import food from "../../image/sausage.png";
import activity from "../../image/tent.png";
import randomButton from "../../image/lobster.png";

function Filter() {
    const [native, setNative] = useState("");

    // 1. Create some state for the returned match
    // 2. Update that state with the res.data object from your request to the random endpoint
    // 3. Render the state into your ResultCard / ResultList component
    // 4. Handle the request for  native speakers /random?native=native and /random non native speakers

    const random = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.get("/random");
          
                console.log("there is your match 🟢");
                console.log(res.data);

            
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
                <button>
                    <img src={drink} alt="" />
                    <p>Drink</p>
                </button>
                <button>
                    <img src={passion} alt="" />
                    <p>Passion</p>
                </button>
                <button>
                    <img src={food} alt="" />
                    <p>Food</p>
                </button>
                <button>
                    <img src={activity} alt="" />
                    <p>Activity</p>
                </button>
                <button onClick={random}>
                    <img src={randomButton} alt="" />
                    <p>Random</p>
                </button>
            </div>
            
        </div>
    );
}

export default Filter;
