import React, { useState } from "react";
import { Modal, Form } from "antd";

const useModalHook = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields()
            .then((values) => {
                form.resetFields();
                console.log("Form values:", values);
                setIsModalVisible(false);
            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const modalProps = {
        visible: isModalVisible,
        onOk: handleOk,
        onCancel: handleCancel,
        okText: "Add",
        cancelText: "Back",
    };

    return { showModal, modalProps, form };
};

export default useModalHook;
