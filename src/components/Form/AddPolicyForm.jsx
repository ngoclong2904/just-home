// src/components/Form/AddPolicyForm.js
import { Button, Form, Input, DatePicker, Upload } from "antd";
import React, { useEffect } from "react";
import { BiUpload } from "react-icons/bi";
import moment from "moment";

const AddPolicyForm = ({ form, initialValues }) => {
    useEffect(() => {
        form.setFieldsValue({
            ...initialValues,
            startDate: initialValues?.startDate
                ? moment(initialValues.startDate)
                : null,
            endDate: initialValues?.endDate
                ? moment(initialValues.endDate)
                : null,
        });
    }, [initialValues, form]);

    return (
        <Form
            form={form}
            layout="vertical"
            name="addPolicyForm"
            className="w-[800px]"
        >
            <Form.Item
                name="policyId"
                label="Số hiệu"
                rules={[
                    { required: true, message: "Please input the policy ID!" },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="startDate"
                label="Ngày bắt đầu"
                rules={[
                    {
                        required: true,
                        message: "Please select the start date!",
                    },
                ]}
            >
                <DatePicker format="DD/MM/YYYY" className="w-full" />
            </Form.Item>
            <Form.Item
                name="endDate"
                label="Ngày kết thúc"
                rules={[
                    { required: true, message: "Please select the end date!" },
                ]}
            >
                <DatePicker format="DD/MM/YYYY" className="w-full" />
            </Form.Item>
            <Form.Item
                name="policyType"
                label="Loại chính sách"
                rules={[
                    {
                        required: true,
                        message: "Please input the policy type!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="quantity"
                label="Số lượng"
                rules={[
                    { required: true, message: "Please input the quantity!" },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="condition"
                label="Điều kiện"
                rules={[
                    { required: true, message: "Please input the condition!" },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="discountRate"
                label="Chiết khấu/Lãi suất"
                rules={[
                    {
                        required: true,
                        message: "Please input the discount rate!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="bonusPenalty"
                label="Tiền thưởng/Phạt"
                rules={[
                    {
                        required: true,
                        message: "Please input the bonus/penalty!",
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
                name="inputter"
                label="Người nhập"
                rules={[
                    { required: true, message: "Please input the inputter!" },
                ]}
            >
                <Input />
            </Form.Item>
        </Form>
    );
};

export default AddPolicyForm;
