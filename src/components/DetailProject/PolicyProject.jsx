// src/components/PolicyProject.js
import { Button } from "antd";
import moment from "moment";
import React, { useState } from "react";
import AddPolicyForm from "../Form/AddPolicyForm";
import CustomModal from "../ModalHook/CustomModal";
import useModalHook from "../ModalHook/useModalHook";
import TableHook from "../TableHook/TableHook";
import { BiEditAlt } from "react-icons/bi";

const PolicyProject = ({ data }) => {
    const policyColumns = [
        {
            title: "Số hiệu",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Ngày BD",
            dataIndex: "startDate",
            key: "startDate",
            sorter: (a, b) =>
                moment(a.startDate, "DD/MM/YYYY").unix() -
                moment(b.startDate, "DD/MM/YYYY").unix(),
        },
        {
            title: "Ngày KT",
            dataIndex: "endDate",
            key: "endDate",
            sorter: (a, b) =>
                moment(a.endDate, "DD/MM/YYYY").unix() -
                moment(b.endDate, "DD/MM/YYYY").unix(),
        },
        {
            title: "Loại chính sách",
            dataIndex: "policyType",
            key: "policyType",
            sorter: (a, b) => a.policyType.localeCompare(b.policyType),
        },
        {
            title: "Số lượng",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Điều kiện",
            dataIndex: "condition",
            key: "condition",
        },
        {
            title: "Chiết khấu/Lãi suất",
            dataIndex: "discountRate",
            key: "discountRate",
        },
        {
            title: "Tiền thưởng/Phạt",
            dataIndex: "bonusPenalty",
            key: "bonusPenalty",
        },
        {
            title: "Diễn giải",
            dataIndex: "explanation",
            key: "explanation",
        },
        {
            title: "Người nhập",
            dataIndex: "inputter",
            key: "inputter",
            sorter: (a, b) => a.inputter.localeCompare(b.inputter),
        },
        {
            title: "Hành động",
            dataIndex: "action",
            key: "action",
            render: (text, record) => {
                return (
                    <Button
                        onClick={() => {
                            setDataUpdate(record);
                            showModal();
                        }}
                    >
                        <BiEditAlt />
                    </Button>
                );
            },
        },
    ];
    const { showModal, modalProps, form } = useModalHook();
    const [dataUpdate, setDataUpdate] = useState({});
    return (
        <>
            <Button type="primary" className="mb-4" onClick={showModal}>
                ADD NEW
            </Button>
            <TableHook columns={policyColumns} data={data} />
            <CustomModal
                title="Thêm mới chính sách bán hàng"
                modalProps={modalProps}
                onCancel={modalProps.onCancel}
                onOk={form.submit}
                className={"flex justify-center items-center"}
            >
                <AddPolicyForm
                    form={form}
                    initialValues={dataUpdate ? dataUpdate : null}
                />
            </CustomModal>
        </>
    );
};

export default PolicyProject;
