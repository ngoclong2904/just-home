import React, { useState } from "react";
import { Modal, Button } from "antd";

const Notification = ({
    header,
    title,
    subHeader,
    showModal,
    finish,
    Cancel,
}) => {
    const handleOk = () => {
        finish();
    };

    const handleCancel = () => {
        Cancel();
    };

    return (
        <Modal
            visible={showModal}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            centered
            closable={false}
            bodyStyle={{ padding: 0 }}
            className="text-center"
        >
            <div className="bg-red-800 text-white p-6 flex items-center flex-col text-center">
                <div className="mb-4">
                    <p className="text-lg font-bold">{header}</p>
                    <p className="text-sm">{subHeader}</p>
                </div>
                <Button
                    type="primary"
                    onClick={handleOk}
                    className="bg-teal-300 border-teal-300 text-black hover:bg-teal-400 hover:border-teal-400"
                >
                    {title}
                </Button>
            </div>
        </Modal>
    );
};

export default Notification;
