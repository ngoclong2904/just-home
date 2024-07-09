import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { receiptData } from "../utils/data";
import { useNavigate } from "react-router-dom";

const ReceiptCard = () => {
    const {
        amount,
        refNumber,
        paymentTime,
        paymentMethod,
        senderName,
        adminFee,
    } = receiptData;
    const navigater = useNavigate();
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden  min-h-screen flex flex-col justify-center border">
            <div className="p-4 text-center">
                <CheckCircleOutlined className="text-green-500 text-6xl" />
                <div className="mt-4 text-xl font-bold">Payment Success!</div>
                <div className="text-3xl font-bold mt-2">{amount}</div>
            </div>
            <div className="p-4">
                <div className="flex justify-between">
                    <span className="text-gray-500">Ref Number</span>
                    <span>{refNumber}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="text-gray-500">Payment Time</span>
                    <span>{paymentTime}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="text-gray-500">Payment Method</span>
                    <span className="font-bold">{paymentMethod}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="text-gray-500">Sender Name</span>
                    <span>{senderName}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="text-gray-500">Amount</span>
                    <span>{amount}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="text-gray-500">Admin Fee</span>
                    <span>{adminFee}</span>
                </div>
            </div>
            <div
                className="bg-black text-white text-center p-4 cursor-pointer"
                onClick={() => navigater("/profile")}
            >
                Finish
            </div>
        </div>
    );
};

export default ReceiptCard;
