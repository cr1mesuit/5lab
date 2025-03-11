import { useState, useEffect } from "react";

const useLoginState = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn);
    }, [isLoggedIn]);

    const login = (username, password) => {
        if (username === "admin" && password === "admin") {
            setIsLoggedIn(true);
            alert('logged in!');
            window.location.reload()
        } else {
            alert("Неверный логин или пароль");
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        window.location.reload()
    };

    return { isLoggedIn, login, logout };
};

export default useLoginState;
