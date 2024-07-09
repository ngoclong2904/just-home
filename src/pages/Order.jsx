import React from "react";
import { Form, Input, Button, Select } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Order = () => {
    const navigator = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        navigator("/receipt-card");
    };
    return (
        <div className="min-h-screen flex flex-col justify-center">
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md border">
                <h2 className="text-2xl font-bold mb-6">Card information</h2>
                <Form
                    form={form}
                    name="payment"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        name="cardNumber"
                        label="Card Number"
                        rules={[
                            {
                                required: true,
                                message: "Please input your card number!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<CreditCardOutlined />}
                            placeholder="0000 0000 0000 0000"
                        />
                    </Form.Item>
                    <div className="flex space-x-4">
                        <Form.Item
                            name="expiryDate"
                            label="MM/YY"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input the expiry date!",
                                },
                            ]}
                            className="flex-1"
                        >
                            <Input placeholder="MM/YY" />
                        </Form.Item>
                        <Form.Item
                            name="cvc"
                            label="CVC"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input the CVC!",
                                },
                            ]}
                            className="flex-1"
                        >
                            <Input placeholder="CVC" />
                        </Form.Item>
                    </div>
                    <Form.Item
                        name="cardName"
                        label="Name on card"
                        rules={[
                            {
                                required: true,
                                message: "Please input the name on the card!",
                            },
                        ]}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="country"
                        label="Country or region"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Please select your country or region!",
                            },
                        ]}
                    >
                        <Select placeholder="Country">
                            <Option value="vietnam">Vietnam</Option>
                            <Option value="us">United States</Option>
                            <Option value="uk">United Kingdom</Option>
                            <Option value="france">France</Option>
                            <Option value="germany">Germany</Option>
                            <Option value="japan">Japan</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full py-6 bg-black text-white rounded-lg font-semibold hover:bg-gray-800"
                        >
                            Thanh Toán
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Order;
