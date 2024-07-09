import React from "react";
import { Form, Input, DatePicker, Select, Button, Radio } from "antd";
import CustomModal from "../ModalHook/CustomModal";
import TableHook from "../TableHook/TableHook";
import useModalHook from "../ModalHook/useModalHook";
import UpdatePaymentDateForm from "./UpdatePaymentDateForm";

const { Option } = Select;

const AddPaymentScheduleForm = ({ form }) => {
    const { showModal, modalProps } = useModalHook();

    const paymentOptions = [
        {
            key: "1",
            type: "Thanh toán 3 lần",
            discount: "5%",
            amount: "2.220.000.000",
            default: false,
        },
        {
            key: "2",
            type: "Thanh toán 5 lần",
            discount: "7%",
            amount: "1.890.900.000",
            default: false,
        },
        {
            key: "3",
            type: "Thanh toán 10 lần",
            discount: "6%",
            amount: "1.510.000.000",
            default: false,
        },
    ];

    const paymentScheduleData = [
        {
            key: "1",
            installment: 1,
            period: "0",
            option: "Ngày",
            paymentDate: "29/01/2023",
            paymentType: "Tổng giá trị",
            paymentRate: "10%",
            vatRate: "1%",
            pbtRate: "100%",
            amount: "500.000.000",
            description: "Ngày kí hợp đồng",
        },
        {
            key: "2",
            installment: 2,
            period: "30",
            option: "Ngày",
            paymentDate: "03/02/2023",
            paymentType: "Tổng giá trị",
            paymentRate: "30%",
            vatRate: "3%",
            pbtRate: "0%",
            amount: "1.000.000.000",
            description: "30 ngày sau khi ký hợp đồng",
        },
        {
            key: "3",
            installment: 3,
            period: "30",
            option: "Ngày",
            paymentDate: "05/02/2023",
            paymentType: "Tổng giá trị",
            paymentRate: "20%",
            vatRate: "5%",
            pbtRate: "0%",
            amount: "300.000.000",
            description: "60 ngày sau khi ký hợp đồng",
        },
        {
            key: "4",
            installment: 4,
            period: "30",
            option: "Ngày",
            paymentDate: "15/02/2023",
            paymentType: "Tổng giá trị",
            paymentRate: "20%",
            vatRate: "2%",
            pbtRate: "0%",
            amount: "200.000.000",
            description: "90 ngày sau khi ký hợp đồng",
        },
        {
            key: "5",
            installment: 5,
            period: "30",
            option: "Ngày",
            paymentDate: "03/03/2023",
            paymentType: "Tổng giá trị",
            paymentRate: "20%",
            vatRate: "3%",
            pbtRate: "0%",
            amount: "700.000.000",
            description: "Sau khi có thông báo làm sổ đỏ",
        },
    ];

    const paymentColumns = [
        { title: "Trường hợp", dataIndex: "type", key: "type" },
        { title: "Chiết khấu", dataIndex: "discount", key: "discount" },
        { title: "Số tiền", dataIndex: "amount", key: "amount" },
        { title: "Mặc định", key: "default", render: () => <Radio /> },
    ];

    const scheduleColumns = [
        { title: "Đợt", dataIndex: "installment", key: "installment" },
        { title: "K/C đợt", dataIndex: "period", key: "period" },
        { title: "Option", dataIndex: "option", key: "option" },
        { title: "Ngày TT", dataIndex: "paymentDate", key: "paymentDate" },
        { title: "Kiểu TT", dataIndex: "paymentType", key: "paymentType" },
        { title: "Tỷ lệ TT", dataIndex: "paymentRate", key: "paymentRate" },
        { title: "Tỷ lệ VAT", dataIndex: "vatRate", key: "vatRate" },
        { title: "Tỷ lệ PBT", dataIndex: "pbtRate", key: "pbtRate" },
        { title: "Số tiền", dataIndex: "amount", key: "amount" },
        {
            title: "Diễn giải",
            dataIndex: "description",
            key: "description",
        },
    ];

    return (
        <>
            <Form form={form} className="w-[1000px]">
                <TableHook data={paymentOptions} columns={paymentColumns} />
                <TableHook
                    data={paymentScheduleData}
                    columns={scheduleColumns}
                />
            </Form>
            <div className="form-actions flex justify-center gap-10 items-center  ">
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
                <UpdatePaymentDateForm />
            </div>
        </>
    );
};
export default AddPaymentScheduleForm;
