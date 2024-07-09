import React from "react";
import { Modal } from "antd";

const CustomModal = ({ title, children, modalProps, className, width }) => {
    return (
        <Modal
            title={title}
            {...modalProps}
            className={className}
            width={width}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;
