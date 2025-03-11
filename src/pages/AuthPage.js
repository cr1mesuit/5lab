import React, { useCallback } from "react";
import LoginForm from "../components/LoginForm";
import useLoginState from "../hooks/useLoginState";

const AuthPage = () => {
    const { login } = useLoginState();

    const handleLogin = useCallback(({ username, password }) => {
        login(username, password);
    }, [login]);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
};

export default AuthPage;
