import React, { useState } from "react";
import ListOfFriends from "../../components/ListOfFriends/ListOfFriends";
import data from "../../MOCK_DATA(2).json";
import "./FriendListPage.css";
import Navbar from "../../components/MainNav/Navbar";

function FriendList() {
    const [value, setValue] = useState(data);

    return (
        <>
        <div className="frlist-bg">
            <div className="match_page">
                <Navbar/>
            </div>
            <div>
                {value.length === 0 && <h1>Nobody in your friends list!?</h1>}
            <div className="container-friendlist">
                <h2 className='frlist-title'>My Friends List</h2>
                <div>
                    {value.map((item) => {
                        return <ListOfFriends {...item} key={item.id} />;
                    })}
                </div>
                <div className="btn2_section">
                    <button type="button" className="btn2" onclick={() => setValue([])}>
                    Rearrange
                    </button>
                    <br/>
                    <button type="button" className="btn2" onclick={() => setValue([])}>
                    Unfriend All
                    </button>
                    </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default FriendList;