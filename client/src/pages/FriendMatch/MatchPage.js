import React from "react";
import RandomCard from './RandomCard';
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

    const filterItems = (category) => {
        if (category === "all") {
            setFriends(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setFriends(newItems);
    };
    return (
        <>
            <div className="match_page">
                <Navbar/>
                <header className="matchHeader">
                    <Filters filterItems={filterItems} />
                    <div className="culture_jokes_btns">
                        <CultureTips />
                        <Jokes />
                    </div>
                </header>
                <div className="result-list">
                    <h3>Your future friend(s)</h3>
                    <div className="result-list-cards">
                        <Friends items={friends} />

                    </div>
                </div>
              
        
            </div>
        </>
    );
}

export default MatchPage;

{
    /* <div className="result-list">
   
    <div className="result-list-cards">
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
    </div>
</div>; */
}