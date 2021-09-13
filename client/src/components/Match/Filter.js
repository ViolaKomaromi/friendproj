import React from "react";
import "./matchpage.css";

import passion from "../../image/drum.png";
import drink from "../../image/beer.png";
import food from "../../image/sausage.png";
import activity from "../../image/tent.png";
import random from "../../image/lobster.png";

function Filter() {
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
                <button>
                    <img src={random} alt="" />
                    <p>Random</p>
                </button>
            </div>
        </div>
    );
}

export default Filter;
