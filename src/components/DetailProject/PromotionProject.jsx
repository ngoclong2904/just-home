import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import PromotionForm from "../Form/PromotionForm";
import CustomModal from "../ModalHook/CustomModal";
import useModalHook from "../ModalHook/useModalHook";
import TableHook from "../TableHook/TableHook";

const PromotionProject = ({ data }) => {
    const { showModal, modalProps, form } = useModalHook();
    const [dataUpdate, setDataUpdate] = useState();
    const promotionColumns = [
        {
            title: "STT",
            dataIndex: "stt",
            key: "stt",
        },
        {
            title: "Program Name",
            dataIndex: "programName",
            key: "programName",
        },
        {
            title: "Start Date",
            dataIndex: "fromDate",
            key: "fromDate",
            sorter: (a, b) => new Date(a.fromDate) - new Date(b.fromDate),
            render: (fromDate) => moment(fromDate).format("YYYY-MM-DD"),
        },
        {
            title: "End Date",
            dataIndex: "toDate",
            key: "toDate",
            sorter: (a, b) => new Date(a.toDate) - new Date(b.toDate),
            render: (toDate) => moment(toDate).format("YYYY-MM-DD"),
        },
        {
            title: "Rate",
            dataIndex: "rate",
            key: "rate",
            sorter: (a, b) => a.rate - b.rate,
            render: (rate) => `${(rate * 100).toFixed(0)}%`,
        },
        {
            title: "Cash",
            dataIndex: "cash",
            key: "cash",
            sorter: (a, b) => a.cash - b.cash,
            render: (cash) => `${cash.toLocaleString()} VND`,
        },
        {
            title: "Created By",
            dataIndex: "createdBy",
            key: "createdBy",
        },
        {
            title: "Created Date",
            dataIndex: "createdDate",
            key: "createdDate",
            sorter: (a, b) => new Date(a.createdDate) - new Date(b.createdDate),
            render: (createdDate) => moment(createdDate).format("YYYY-MM-DD"),
        },
        {
            title: "Updated By",
            dataIndex: "updatedBy",
            key: "updatedBy",
        },
        {
            title: "Updated Date",
            dataIndex: "updatedDate",
            key: "updatedDate",
            sorter: (a, b) => new Date(a.updatedDate) - new Date(b.updatedDate),
            render: (updatedDate) => moment(updatedDate).format("YYYY-MM-DD"),
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
    return (
        <>
            <Button
                type="primary"
                icon={<PlusOutlined />}
                className="mb-4"
                onClick={showModal}
            >
                ADD NEW
            </Button>
            <TableHook columns={promotionColumns} data={data} />
            <CustomModal
                title="Thêm mới biểu mẫu"
                modalProps={modalProps}
                onCancel={modalProps.onCancel}
                onOk={form.submit}
                className={"flex justify-center items-center"}
            >
                <PromotionForm
                    form={form}
                    initialValues={dataUpdate ? dataUpdate : null}
                />
            </CustomModal>
        </>
    );
};

export default PromotionProject;
