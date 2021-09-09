import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "../../util/axios";
// import FormWrapper from "../Wrapers/wraper";
// import mockData from "../../../../backend/MOCK_DATA(2).json";

export default function randomMatch() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        // axios.get('../../../../backend/MOCK_DATA(2).json')
        // .then (res => console.log(res))
        // .catch (err => console.log(err))
        axios
            .get("/random")
            .then((res) => {
                console.log(res);
                setUsername(res.data.username);
            })
            .catch((err) => console.log(err));
    });
    const history = useHistory();

    return (
        <div>
            <Filter />
        </div>
    );
}
