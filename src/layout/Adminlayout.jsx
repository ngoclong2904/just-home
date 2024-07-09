import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import SiderAdmin from "./SidebarAdmin";
import NavAdmin from "../components/Nav/NavAdmin";

const Adminlayout = () => {
    return (
        <div className="min-h-screen flex text-black">
            <SiderAdmin />
            <div className="flex-1">
                <NavAdmin />
                <Outlet />
            </div>
        </div>
    );
};

export default Adminlayout;
