import React from "react";
import ResultCard from "./ResultCard";

function ResultsList() {
    return (
        <div className="result-list">
            <h3>Your future friend(s)</h3>
            <div className="result-list-cards">
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
            </div>
        </div>
    );
}

export default ResultsList;
