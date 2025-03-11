import React from "react";
import useLoginState from "../hooks/useLoginState";

const Profile = () => {
    const { logout } = useLoginState();

    return (
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <button onClick={logout} style={{cursor: "pointer"}}>Выйти</button>
        </div>
    );
};

export default Profile;
