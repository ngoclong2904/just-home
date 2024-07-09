import { Button, Form, Input, DatePicker, Checkbox } from "antd";
import React, { useEffect } from "react";
import moment from "moment";

const TemplateForm = ({ form, initialValues }) => {
    useEffect(() => {
        form.setFieldsValue({
            ...initialValues,
            time: initialValues?.time ? moment(initialValues.time) : null,
            status: initialValues?.status === "Active",
        });
    }, [initialValues, form]);

    return (
        <Form
            form={form}
            layout="vertical"
            name="addTemplateForm"
            className="w-[800px]"
        >
            <Form.Item
                name="templateName"
                label="Tên biểu mẫu"
                rules={[
                    {
                        required: true,
                        message: "Please input the template name!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="templateType"
                label="Loại biểu mẫu"
                rules={[
                    {
                        required: true,
                        message: "Please input the template type!",
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
                name="status"
                valuePropName="checked"
                label="Tùy chọn :"
                rules={[
                    { required: true, message: "Please select the status!" },
                ]}
            >
                <Checkbox>Khóa biểu mẫu</Checkbox>
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
            <Form.Item
                name="time"
                label="Thời gian"
                rules={[{ required: true, message: "Please select the time!" }]}
            >
                <DatePicker format="DD/MM/YYYY" className="w-full" />
            </Form.Item>
        </Form>
    );
};

export default TemplateForm;
