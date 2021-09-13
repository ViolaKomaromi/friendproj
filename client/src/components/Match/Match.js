import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "../../util/axios";
import CultureTips from "./CultureTips";
import Filter from "./Filter";
import Jokes from "./Jokes";
import ResultsList from "./ResultsList";
// import FormWrapper from "../Wrapers/wraper";
// import mockData from "../../../../backend/MOCK_DATA(2).json";

export default function randomMatch() {
    // const [username, setUsername] = useState("");

    // useEffect(() => {
    //     // axios.get('../../../../backend/MOCK_DATA(2).json')
    //     // .then (res => console.log(res))
    //     // .catch (err => console.log(err))
    //     axios
    //         .get("/random")
    //         .then((res) => {
    //             console.log(res);
    //             setUsername(res.data.username);
    //         })
    //         .catch((err) => console.log(err));
    // });
    // const history = useHistory();

    return (
        <div className="match_page">
            <header className="matchHeader">
                <Filter />
                <div className="culture_jokes_btns">
                    <CultureTips />
                    <Jokes />
                </div>
            </header>
            <ResultsList />
        </div>
    );
}
