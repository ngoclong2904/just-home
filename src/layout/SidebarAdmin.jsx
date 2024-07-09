import React from "react";
import { GrProjects, GrSchedule } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { TbDiscount, TbTruckReturn } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import logoBlack from "../assets/logoBlack.png";
import { GiProgression, GiWorld } from "react-icons/gi";
import { BiHome, BiNote } from "react-icons/bi";
import { CgFormatBold } from "react-icons/cg";
const data = [
    {
        content: "DASHBOARD",
        link: "admin-dasboard",
        icon: <GiWorld size={24} />,
    },
    {
        content: "DỰ ÁN",
        link: "admin-projects",
        icon: <BiNote size={24} />,
    },
    {
        content: "ĐỢI MỞ BÁN",
        link: "admin-pre-order",
        icon: <BiHome size={24} />,
    },
    {
        content: "LỊCH THANH TOÁN",
        link: "admin-payment-schedule",
        icon: <GrSchedule size={24} />,
    },
    {
        content: "THAY ĐỔI TIẾN ĐỘ",
        link: "admin-progress",
        icon: <GiProgression size={24} />,
    },
    {
        content: "BIỂU MẪU",
        link: "admin-form",
        icon: <CgFormatBold size={24} />,
    },
    {
        content: "KHUYẾN MÃI",
        link: "admin-promotion",
        icon: <TbDiscount size={24} />,
    },
];

const SidebarAdmin = () => {
    return (
        <div className="border-r border-black p-4 flex flex-col">
            <div>
                <img
                    className="w-32 object-contain"
                    src={logoBlack}
                    alt="Icon"
                />
                <div className="flex flex-col mt-8 gap-4">
                    {data?.length
                        ? data.map((item, index) => (
                              <NavLink
                                  key={index}
                                  to={`/${item.link}`}
                                  className={({ isActive }) =>
                                      isActive
                                          ? "flex items-center text-blue-600 font-bold p-2 rounded-lg"
                                          : "flex items-center text-black p-2 rounded-lg"
                                  }
                              >
                                  {item.icon}
                                  <span className="ml-2 font-semibold">
                                      {item.content}
                                  </span>
                              </NavLink>
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
};

export default SidebarAdmin;
