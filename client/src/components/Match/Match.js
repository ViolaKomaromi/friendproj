import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import CultureTips from "./CultureTips";
import Filter from "./Filter";
import Jokes from "./Jokes";
import ResultsList from "./ResultsList";

import axios from "../../util/axios";
import FormWrapper from "../Wrapers/wraper";


export default function RandomMatch() {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [birthday, setBirthday] = useState("");
    const [location, setLocation] = useState("");
    const [native, setNative] = useState("");
    const [expat, setExpat] = useState("");

    const history = useHistory();


    const random = useEffect(() => {
    
        axios
            .get("/random")
            .then((res) => {
                console.log(res);
                setUsername(res.data.username);
                setBirthday(res.data.birthday);
                setLocation(res.data.location);
                setNative(res.data.native);
                
            })
            .catch((err) => console.log(err));

    }, []);


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

};