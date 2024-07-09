import React, { useEffect } from "react";
import { Form, Input, DatePicker } from "antd";
import moment from "moment";

const EmployeeForm = ({ form, initialValues }) => {
    useEffect(() => {
        if (initialValues) {
            const { dob, createdDate } = initialValues;

            form.setFieldsValue({
                ...initialValues,
                dob: dob ? moment(dob) : null,
                createdDate: createdDate ? moment(createdDate) : null,
            });
        }
    }, [initialValues, form]);

    return (
        <Form
            form={form}
            layout="vertical"
            name="employeeForm"
            className="w-[800px]"
        >
            <Form.Item
                name="fullName"
                label="Họ và tên"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập họ và tên!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="dob"
                label="Ngày sinh"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng chọn ngày sinh!",
                    },
                ]}
            >
                <DatePicker className="w-full" format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập địa chỉ!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="createdDate"
                label="Ngày tạo"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng chọn ngày tạo!",
                    },
                ]}
            >
                <DatePicker className="w-full" format="DD/MM/YYYY" />
            </Form.Item>
        </Form>
    );
};

export default EmployeeForm;
