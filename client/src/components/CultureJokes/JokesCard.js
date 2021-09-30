import { useState } from "react";
import Joke from "./Joke";
import "./jokescard.css";
import jokeitems from "./JokesData";
import jokeone from '../../image/joke1.jpg';
import joketwo from '../../image/joke2.jpg';
import jokethree from '../../image/joke3.jpg';
import jokefour from '../../image/joke4.jpeg';
import jokefive from '../../image/joke5.jpg';


function JokesCard() {
    const [jokesdata, setJokesdata] = useState(jokeitems);


    return (
                <>
              <div className="containerJoke"> 
        <div className="joke-list">
           
             
                <div className="row row-cols-2">
                    <div className="col imgJoke"> <img src={jokeone} alt="" /></div>
                    <div className="col imgJoke"> <img src={joketwo} alt="" /></div>
                    <div className="col imgJoke"> <img src={jokethree} alt="" /></div>
                    <div className="col imgJoke"> <img src={jokefour} alt="" /></div>
                    <div className="col imgJoke"> <img src={jokefive} alt="" /></div>
                   
                </div>
            </div>

           
           
        </div>
        </>
    );
}

export default JokesCard;