import { Button, Form, Input, Upload } from "antd";
import React, { useEffect } from "react";
import { BiUpload } from "react-icons/bi";

const ProjectForm = ({ form, initialValues }) => {
    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);
    return (
        <Form form={form} layout="vertical" name="projectForm">
            <Form.Item
                name="name"
                label="Tên dự án"
                rules={[
                    {
                        required: true,
                        message: "Please input the project name!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="type"
                label="Loại dự án"
                rules={[
                    {
                        required: true,
                        message: "Please input the project type!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[
                    { required: true, message: "Please input the address!" },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="district"
                label="Xã, Huyện"
                rules={[
                    { required: true, message: "Please input the district!" },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="content"
                label="Nội dung"
                rules={[
                    { required: true, message: "Please input the content!" },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="licenseNumber"
                label="Số giấy phép"
                rules={[
                    {
                        required: true,
                        message: "Please input the license number!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="area"
                label="Diện tích khu vực"
                rules={[{ required: true, message: "Please input the area!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="manager"
                label="Nhân viên quản lý"
                rules={[
                    { required: true, message: "Please input the manager!" },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="image"
                label="Image"
                valuePropName="fileList"
                getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e && e.fileList
                }
            >
                <Upload name="image" action="/upload.do" listType="text">
                    <Button icon={<BiUpload />}>Choose Image</Button>
                </Upload>
            </Form.Item>
        </Form>
    );
};

export default ProjectForm;
