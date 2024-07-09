import { Button } from "antd";
import React from "react";
import TableHook from "../TableHook/TableHook";
import useModalHook from "../ModalHook/useModalHook";
import CustomModal from "../ModalHook/CustomModal";
import AddPaymentScheduleForm from "../Form/AddPaymentScheduleForm";

const paymentScheduleColumns = [
    {
        title: "Đợt",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "K/C đợt",
        dataIndex: "period",
        key: "period",
    },
    {
        title: "Option",
        dataIndex: "option",
        key: "option",
    },
    {
        title: "Ngày TT",
        dataIndex: "paymentDate",
        key: "paymentDate",
        sorter: (a, b) => new Date(a.paymentDate) - new Date(b.paymentDate),
    },
    {
        title: "Kiểu TT",
        dataIndex: "paymentType",
        key: "paymentType",
    },
    {
        title: "Tỷ lệ TT",
        dataIndex: "paymentRate",
        key: "paymentRate",
    },
    {
        title: "Tỷ lệ VAT",
        dataIndex: "vatRate",
        key: "vatRate",
    },
    {
        title: "Tỷ lệ PBT",
        dataIndex: "pbtRate",
        key: "pbtRate",
    },
    {
        title: "Số tiền",
        dataIndex: "amount",
        key: "amount",
    },
    {
        title: "Diễn giải",
        dataIndex: "description",
        key: "description",
    },
];
const PaymentProject = ({ data }) => {
    const { showModal, modalProps, form } = useModalHook();

    return (
        <>
            <Button type="primary" className="mb-4" onClick={showModal}>
                ADD NEW
            </Button>
            <TableHook columns={paymentScheduleColumns} data={data} />
            <CustomModal
                title="Add Payment Schedule"
                modalProps={modalProps}
                onCancel={modalProps.onCancel}
                onOk={form.submit}
                className={"flex justify-center items-center"}
            >
                <AddPaymentScheduleForm form={form} />
            </CustomModal>
        </>
    );
};

export default PaymentProject;
