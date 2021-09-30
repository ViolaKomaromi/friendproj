import { useState } from "react";
import Joke from "./Joke";
import "./jokescard.css";
import jokeitems from "./JokesData";

function JokesCard() {
    const [jokesdata, setJokesdata] = useState(jokeitems);
    return (
        <div className="joke-list">
            {/* <h4></h4> */}
            {/* <Joke jokeitems={jokesdata}/> */}
        </div>
    );
}

export default JokesCard;