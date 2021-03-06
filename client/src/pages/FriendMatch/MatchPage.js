import React from "react";
import RandomCard from "./RandomCard";
import axios from "../../util/axios";

import "../../components/Match/matchpage.css";
import Filters from "./Filters";
import Friends from "./Friends";
import items from "../../data/data";
import CultureTips from "../../components/Match/CultureTips";
import Jokes from "../../components/Match/Jokes";
import { Filter } from "react-bootstrap-icons";

import { useState } from "react";
import Navbar from "../../components/MainNav/Navbar";

function MatchPage() {
    const [friends, setFriends] = useState(items);
    // const [filter, setFilter] = useState([]);
    const [showResult, setShowResult] = useState(null);



    const filterItems = (category) => {
        if (category === "all") {
            setFriends(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setFriends(newItems);
    };

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
        <>
            <div className="match_page">
                <Navbar />
                <header className="matchHeader">
                    <Filters filterItems={filterItems} random={random} />
                    <div className="culture_jokes_btns">
                        <CultureTips />
                        <Jokes />
                    </div>
                </header>
                <div className="result-list">
                
                {showResult != null ? <h3 className="match-page-title"> Your Match</h3>: <p></p>}

                    <div className="result-list-cards ">

                        {showResult != null ? <RandomCard randomMatch={showResult} /> : <p></p>}
                    </div>
                    <h3 className="match-page-title">Your future friend(s)</h3>
                    <div className="result-list-cards">
                        <Friends items={friends} />

                    </div>


                </div>
            </div>
        </>
    );
}

export default MatchPage;


