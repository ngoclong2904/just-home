import { Button, Form, Input, DatePicker } from "antd";
import React, { useEffect } from "react";
import moment from "moment";

const DocumentForm = ({ form, initialValues }) => {
    useEffect(() => {
        form.setFieldsValue({
            ...initialValues,
        });
    }, [initialValues, form]);

    return (
        <Form
            form={form}
            layout="vertical"
            name="addDocumentForm"
            className="w-[800px]"
        >
            <Form.Item
                name="symbol"
                label="Kí hiệu"
                rules={[
                    {
                        required: true,
                        message: "Please input the document symbol!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="name"
                label="Tên Tài liệu"
                rules={[
                    {
                        required: true,
                        message: "Please input the document name!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="explanation"
                label="Diễn giải"
                rules={[
                    {
                        required: true,
                        message: "Please input the explanation!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="employee"
                label="Nhân viên"
                rules={[
                    {
                        required: true,
                        message: "Please input the employee name!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </Form>
    );
};

export default DocumentForm;
