import React from "react";
import "./matchpage.css";

function Filter() {
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
        </div>
    );
}

export default Filter;
