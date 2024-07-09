import {
    CaretDownOutlined,
    UserOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { BiBell, BiLogOut, BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { RiEnglishInput } from "react-icons/ri";
import { HiTranslate } from "react-icons/hi"; // Icon for Vietnamese language

const { SubMenu } = Menu;

const NavAdmin = () => {
    const navigator = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState("english");

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        // Add logic here to change language in your application
    };

    const menu = (
        <Menu>
            <Menu.Item
                key="profile"
                icon={<BiUser />}
                onClick={() => navigator("/profile")}
            >
                Profile
            </Menu.Item>
            <Menu.Item key="logout" icon={<BiLogOut />} onClick={() => {}}>
                Logout
            </Menu.Item>
        </Menu>
    );

    const languageMenu = (
        <Menu>
            <Menu.Item
                key="english"
                onClick={() => handleLanguageChange("english")}
            >
                English
            </Menu.Item>
            <Menu.Item
                key="vietnamese"
                onClick={() => handleLanguageChange("vietnamese")}
            >
                Tiếng Việt
            </Menu.Item>
        </Menu>
    );

    return (
        <Header className="shadow w-full text-black bg-white h-20 flex flex-col justify-center">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center w-72 bg-[#e0e0e0] rounded-full px-2 shadow-md shadow-[rgba(0,0,0,.8)]">
                    <SearchOutlined className="text-gray-500" />
                    <input
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none mx-4 h-10"
                    />
                </div>
                <div className="flex items-center gap-6">
                    <Dropdown
                        overlay={languageMenu}
                        placement="bottomRight"
                        arrow
                    >
                        <Button className="bg-transparent p-0 border-none flex items-center">
                            {selectedLanguage === "english" ? (
                                <>
                                    <span className="ml-1">English</span>
                                </>
                            ) : (
                                <>
                                    <span className="ml-1">Tiếng Việt</span>
                                </>
                            )}
                            <CaretDownOutlined className="ml-1" />
                        </Button>
                    </Dropdown>
                    <div className="flex items-center">
                        <BiBell className="mr-2" size={24} />
                    </div>
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Button className="bg-transparent p-0 border-none  m-0">
                            <UserOutlined
                                className="p-2 rounded-full border"
                                size={24}
                            />
                        </Button>
                    </Dropdown>
                </div>
            </div>
        </Header>
    );
};

export default NavAdmin;
