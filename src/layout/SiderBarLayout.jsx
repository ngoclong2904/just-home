import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import SiderBar from "../components/SiderBar/SiderBar";

const SiderBarLayout = () => {
    return (
        <div className="flex">
            <div className="flex-1 min-h-screen flex flex-col text-white">
                <Nav background={"black"} pos={"fixed"} />
                <div className="flex-1 flex mt-6">
                    <SiderBar />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default SiderBarLayout;
