import React from "react";
import useLoginState from "../hooks/useLoginState";

const Profile = () => {
    const { username, logout } = useLoginState();

    return (
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <span>{username}</span>
            <button onClick={logout} style={{cursor: "pointer"}}>Выйти</button>
        </div>
    );
};

export default Profile;
