import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const DefaultLayout = () => {
    return (
        <div className="min-h-screen flex flex-col text-white">
            <Nav />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default DefaultLayout;
