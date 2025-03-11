import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import Profile from "./Profile";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header style={{padding: "5px", background: "#00AB84", color: "white", textAlign: "center"}}>
            <h1>Лабораторные работы</h1>
            <button onClick={toggleTheme} style={{ marginTop: "10px", position: "absolute", right: "10px", top: "30px", cursor: "pointer" }}>
                {theme === "light" ? "Ночь" : "День"}
            </button>
            <Profile />
        </header>
    );
};

export default Header;