import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { useEffect, useState } from "react";

function App() {
    const isTokenValid = () => {
        const token = localStorage.getItem("token");
        const expiresAt = localStorage.getItem("tokenExpiresAt");

        if (!token || !expiresAt) return false;

        return Date.now() < Number(expiresAt);
    };

    const [isAuth, setIsAuth] = useState(isTokenValid);

    const handleLogin = () => {
        setIsAuth(true);
        location.replace('/admin');
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuth(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTokenValid()) {
                localStorage.removeItem("token");
                localStorage.removeItem("tokenExpiresAt");
                setIsAuth(false);
            }
        }, 10_000); // check every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={isAuth ? (
                        <Admin onLogout={handleLogout} />
                    ) : (
                        <Navigate to="/login" replace />
                    )} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
