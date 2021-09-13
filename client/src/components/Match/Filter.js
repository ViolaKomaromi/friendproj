
import "./matchpage.css";
import axios from "../../util/axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Filter() {
    const [native, setNative] = useState("");

    const random = async (e) => {
        e.preventDefault();

        var newRandom = {

            native: native
        };

        try {
            var res = await axios.post("/random", newRandom);
            if (res.status == 200) {
                console.log("there is your match 🟢");
               
            }
        } catch (error) {
            console.log("Error happened", error);
        }
    }


    return (
        <div className="filterComponent">
            <div className="filterText">
                <h3>Filter by:</h3>
                <p>Find people based on what you like</p>
            </div>
            <div>
                <button>Filter 1</button>
                <button>Filter 2</button>
                <button>Filter 3</button>
                <button>Filter 4</button>
            </div>
            <h3>Random</h3>
            <button onSubmit={(e) => {
                random(e)
            }}
            value={native}
            onClick={(e) => setNative(e.target.value)}
            >Random</button>
        </div>
    );
}

export default Filter;
