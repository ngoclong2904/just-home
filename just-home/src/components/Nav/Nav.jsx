import React from "react";
import { Layout, Menu, Button, Dropdown } from "antd";
import {
    PhoneOutlined,
    UserOutlined,
    CaretDownOutlined,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOut, BiUser } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

const { SubMenu } = Menu;
const Nav = ({ background, pos }) => {
    const navigator = useNavigate();
    const isLogger = true;
    const menu = (
        <Menu>
            <Menu.Item
                key="profile"
                icon={<BiUser />}
                onClick={() => navigator("/profile")}
            >
                Profile
            </Menu.Item>
            <Menu.Item
                key="payment"
                icon={<MdPayment />}
                onClick={() => navigator("/payment")}
            >
                Payment
            </Menu.Item>
            <Button type="dashed" icon={<BiLogOut />}>
                Logout
            </Button>
        </Menu>
    );
    return (
        <Header
            className="shadow  w-full z-10"
            style={{
                backgroundColor: background ? background : "transparent",
                position: pos ? pos : "absolute",
            }}
        >
            <div className="flex justify-between items-center">
                <Link to="/" className="text-lg font-bold flex items-center">
                    <img src={logo} alt="Logo" className="h-8 mr-4" />
                </Link>
                <Menu
                    defaultActiveFirst={true}
                    mode="horizontal"
                    className="flex-1 bg-transparent text-white justify-center"
                >
                    <SubMenu
                        key="home"
                        title={
                            <span>
                                Trang Chủ <CaretDownOutlined />
                            </span>
                        }
                        className="text-white"
                    >
                        <Menu.Item key="home:1">Home 1</Menu.Item>
                        <Menu.Item key="home:2">Home 2</Menu.Item>
                        <Menu.Item key="home:3">Home 3</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="projects"
                        title={
                            <span>
                                Dự Án <CaretDownOutlined />
                            </span>
                        }
                        className="text-white"
                    >
                        <Menu.Item key="projects:1">Project 1</Menu.Item>
                        <Menu.Item key="projects:2">Project 2</Menu.Item>
                        <Menu.Item key="projects:3">Project 3</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="info"
                        title={
                            <span>
                                Tin Tức <CaretDownOutlined />
                            </span>
                        }
                        className="text-white"
                    >
                        <Menu.Item key="info:1">Info 1</Menu.Item>
                        <Menu.Item key="info:2">Info 2</Menu.Item>
                        <Menu.Item key="info:3">Info 3</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="events"
                        title={
                            <span>
                                Sự Kiện <CaretDownOutlined />
                            </span>
                        }
                        className="text-white"
                    >
                        <Menu.Item key="events:1">Event 1</Menu.Item>
                        <Menu.Item key="events:2">Event 2</Menu.Item>
                        <Menu.Item key="events:3">Event 3</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="advice"
                        title={
                            <span>
                                Tư Vấn <CaretDownOutlined />
                            </span>
                        }
                        className="text-white"
                    >
                        <Menu.Item key="advice:1">Advice 1</Menu.Item>
                        <Menu.Item key="advice:2">Advice 2</Menu.Item>
                        <Menu.Item key="advice:3">Advice 3</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="contact"
                        title={
                            <span>
                                Liên Hệ <CaretDownOutlined />
                            </span>
                        }
                        className="text-white"
                    >
                        <Menu.Item key="contact:1">Contact 1</Menu.Item>
                        <Menu.Item key="contact:2">Contact 2</Menu.Item>
                        <Menu.Item key="contact:3">Contact 3</Menu.Item>
                    </SubMenu>
                </Menu>
                {isLogger === true ? (
                    <div className="flex items-center justify-between gap-4 text-white">
                        <div className="flex items-center">
                            <PhoneOutlined className="mr-2" />
                            +66 635 88866
                        </div>
                        <div className="flex flex-1 justify-end">
                            <Dropdown
                                overlay={menu}
                                placement="bottomRight"
                                arrow
                            >
                                <Button className="bg-transparent p-0 border-none text-white m-0">
                                    <UserOutlined className="p-2 rounded-full border" />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center text-white">
                        <PhoneOutlined className="mr-2" />
                        +66 635 88866
                        <Button
                            type="link"
                            icon={
                                <UserOutlined className="p-2 rounded-full border" />
                            }
                            className="ml-4 text-white"
                        >
                            Login
                        </Button>
                    </div>
                )}
            </div>
        </Header>
    );
};

export default Nav;
