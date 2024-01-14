import React from "react";
import "../css/main.scss";
import { Routes, Route } from "react-router-dom";
import { AccountPage } from "../pages/Account";
import { HomePage } from "../pages/Home";

export const MainWrapper = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/account" element={<AccountPage />} />
            </Routes>
        </main>
    );
};
