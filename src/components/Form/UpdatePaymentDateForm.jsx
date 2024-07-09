import React from "react";
import { Button, Input, Form } from "antd";
import useModalHook from "../ModalHook/useModalHook";
import CustomModal from "../ModalHook/CustomModal";

const UpdatePaymentDateForm = () => {
    const { showModal, modalProps, form } = useModalHook();

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Update ngày TT
            </Button>
            <CustomModal title="Update ngày TT" modalProps={modalProps}>
                <Form form={form}>
                    <Form.Item
                        name="date"
                        rules={[
                            {
                                required: true,
                                message: "Please input the date!",
                            },
                        ]}
                    >
                        <Input placeholder="Ngày đề xuất" />
                    </Form.Item>
                    <Form.Item
                        name="reason"
                        rules={[
                            {
                                required: true,
                                message: "Please input the reason!",
                            },
                        ]}
                    >
                        <Input placeholder="Ghi chú hoặc lí do" />
                    </Form.Item>
                </Form>
                <div className="form-actions flex gap-6">
                    <Button
                        onClick={modalProps.onCancel}
                        className="bg-red-600 text-white min-w-32"
                    >
                        Back
                    </Button>
                    <Button
                        type="primary"
                        onClick={modalProps.onOk}
                        className="bg-green-600  min-w-32"
                    >
                        Lưu
                    </Button>
                </div>
            </CustomModal>
        </>
    );
};

export default UpdatePaymentDateForm;
