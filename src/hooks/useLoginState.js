import { useState, useEffect } from "react";

const useLoginState = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    const [username, setUsername] = useState(() => {
        return localStorage.getItem("username") || "";
    });

    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn);
        localStorage.setItem("username", username);
    }, [isLoggedIn, username]);

    const login = (enteredUsername, password) => {
        if (enteredUsername === "admin" && password === "admin") {
            setUsername(enteredUsername);
            setIsLoggedIn(true);
            alert('logged in!');
            window.location.reload()
        } else {
            alert("Неверный логин или пароль");
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUsername(undefined);
        window.location.reload()
    };

    return { isLoggedIn, login, logout, username };
};

export default useLoginState;
