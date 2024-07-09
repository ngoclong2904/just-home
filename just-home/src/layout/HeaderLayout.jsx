import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const HeaderLayout = () => {
    return (
        <div className="flex">
            <div className="flex-1 min-h-screen flex flex-col text-white">
                <Nav background={"black"} />
                <div className="flex-1 flex">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default HeaderLayout;
