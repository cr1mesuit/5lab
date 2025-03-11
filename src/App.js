import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './components/Content';
import { ThemeProvider } from "./components/ThemeContext";
import useLoginState from "./hooks/useLoginState";
import AuthPage from "./pages/AuthPage";

function App() {
    const [selectedLab, setSelectedLab] = useState('');
    const { isLoggedIn } = useLoginState();

    return (
        <Provider store={store}>
            <ThemeProvider>
                <Router>
                    {isLoggedIn ? (
                        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                            <Navigation />
                            <Header />
                            <div style={{ display: "flex", flexGrow: 1 }}>
                                <Menu />
                                <Routes>
                                    <Route path="/" element={<Content />} />
                                    <Route path="/lab/:labId" element={<Content />} />
                                </Routes>
                            </div>
                            <Footer />
                        </div>
                    ) : (
                        <AuthPage />
                    )}
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
