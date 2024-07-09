import React, { useEffect } from "react";
import { Form, Input, DatePicker, InputNumber } from "antd";
import moment from "moment";

const PromotionForm = ({ form, initialValues }) => {
    useEffect(() => {
        if (initialValues) {
            const { fromDate, toDate } = initialValues;

            form.setFieldsValue({
                ...initialValues,
                fromDate: fromDate ? moment(fromDate) : null,
                toDate: toDate ? moment(toDate) : null,
            });
        }
    }, [initialValues, form]);

    return (
        <Form
            form={form}
            layout="vertical"
            name="promotionForm"
            className="w-[800px]"
        >
            <Form.Item
                name="programName"
                label="Tên chương trình"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập tên chương trình!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="giftName"
                label="Tên quà tặng"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập tên quà tặng!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="fromDate"
                label="Từ ngày"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng chọn ngày bắt đầu!",
                    },
                ]}
            >
                <DatePicker className="w-full" format="YYYY-MM-DD" />
            </Form.Item>
            <Form.Item
                name="toDate"
                label="Đến ngày"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng chọn ngày kết thúc!",
                    },
                ]}
            >
                <DatePicker className="w-full" format="YYYY-MM-DD" />
            </Form.Item>
            <Form.Item
                name="rate"
                label="Tỉ lệ"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập tỉ lệ!",
                    },
                ]}
            >
                <InputNumber
                    min={0}
                    step={0.01}
                    style={{ width: "100%" }}
                    formatter={(value) => `${value}%`}
                    parser={(value) => value.replace("%", "")}
                />
            </Form.Item>
            <Form.Item
                name="cash"
                label="Tiền mặt"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập số tiền!",
                    },
                ]}
            >
                <InputNumber
                    min={0}
                    style={{ width: "100%" }}
                    formatter={(value) => `${value} VNĐ`}
                    parser={(value) => value.replace(" VNĐ", "")}
                />
            </Form.Item>
            <Form.Item
                name="explanation"
                label="Diễn giải"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập diễn giải!",
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>
        </Form>
    );
};

export default PromotionForm;
