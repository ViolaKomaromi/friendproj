import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import CultureTips from "../../components/Match/CultureTips";
import Filter from "../../components/Match/Filter";
import Jokes from "../../components/Match/Jokes";
import ResultsList from "../../components/Match/ResultsList";

import axios from "../../util/axios";
import FormWrapper from "../../components/Wrappers/wrapper";
import MatchPage from "../FriendMatch/MatchPage";


export default function RandomMatch() {
  

    const history = useHistory();

    const random = useEffect(() => { }, []);

    return (
       
        <>
               
            <MatchPage />
        </>
    );
}
