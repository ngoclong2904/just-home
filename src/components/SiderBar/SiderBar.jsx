import React from "react";
import { BiUser } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SiderBar = () => {
    return (
        <div className="flex flex-col w-1/6 bg-white p-4 border-r">
            <h2 className="text-lg font-semibold mb-4">Profile</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-black flex items-center gap-2 bg-[rgba(0,0,0,.2)] py-3 rounded-md px-2 transition-all duration-200"
                                    : "text-black flex items-center gap-2 hover:bg-[rgba(0,0,0,.2)] py-3 rounded-md px-2 transition-all duration-200"
                            }
                        >
                            <BiUser />
                            General
                        </NavLink>
                    </li>
                    <li className="mt-4">
                        <NavLink
                            to="/payment"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-black flex items-center gap-2 bg-[rgba(0,0,0,.2)] py-3 rounded-md px-2 transition-all duration-200"
                                    : "text-black flex items-center gap-2 hover:bg-[rgba(0,0,0,.2)] py-3 rounded-md px-2 transition-all duration-200"
                            }
                        >
                            <BsGear />
                            Tiến độ thanh toán
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SiderBar;
