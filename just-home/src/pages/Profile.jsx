import React from "react";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { BiCamera } from "react-icons/bi";

const Profile = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="flex flex-col flex-1 p-8">
            <div className="text-black p-8">
                <h2 className="text-xl font-semibold mb-2">
                    Quản lý tài khoản
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                    Quản lý thông tin tài khoản chung của bạn
                </p>
                <Form
                    form={form}
                    name="profile"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="space-y-6"
                >
                    <div className="flex items-center justify-start mb-6">
                        <div className="flex flex-col items-center">
                            <p className="text-sm text-gray-500 mb-2">
                                Ảnh đại diện
                            </p>
                            <div className="p-10 rounded-full border-dashed border border-slate-500">
                                <BiCamera size={24} />
                            </div>
                        </div>
                        <Upload className="ml-12">
                            <Button icon={<UploadOutlined />}>Tải ảnh</Button>
                        </Upload>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <Form.Item
                            name="username"
                            label="Tên tài khoản"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập tên tài khoản",
                                },
                            ]}
                        >
                            <Input placeholder="Duong Pham" />
                        </Form.Item>
                        <Form.Item
                            name="fullname"
                            label="Họ và tên"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập họ và tên",
                                },
                            ]}
                        >
                            <Input placeholder="Pham Tien Duong" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email Address"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập email",
                                },
                                {
                                    type: "email",
                                    message: "Email không hợp lệ",
                                },
                            ]}
                        >
                            <Input placeholder="Duongmake3@gmail.com" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập mật khẩu",
                                },
                            ]}
                        >
                            <Input.Password placeholder="@1" />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Số điện thoại chính"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập số điện thoại",
                                },
                                {
                                    pattern: /^\d+$/,
                                    message: "Số điện thoại không hợp lệ",
                                },
                            ]}
                        >
                            <Input placeholder="0913123123" />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label="Địa chỉ"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập địa chỉ",
                                },
                            ]}
                        >
                            <Input placeholder="Thành phố Hồ Chí Minh" />
                        </Form.Item>
                    </div>
                    <div className="flex justify-end">
                        <Button type="primary" htmlType="submit">
                            Lưu
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Profile;
