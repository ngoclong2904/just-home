import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import PromotionForm from "../Form/PromotionForm";
import CustomModal from "../ModalHook/CustomModal";
import useModalHook from "../ModalHook/useModalHook";
import TableHook from "../TableHook/TableHook";
import EmployeeForm from "../Form/EmployeeForm";

const EmployeeProject = ({ data }) => {
    const { showModal, modalProps, form } = useModalHook();
    const [dataUpdate, setDataUpdate] = useState();
    const employeeColumns = [
        {
            title: "STT",
            dataIndex: "id",
            key: "id",
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Họ và tên",
            dataIndex: "fullName",
            key: "fullName",
            sorter: (a, b) => a.fullName.localeCompare(b.fullName),
        },
        {
            title: "Ngày sinh",
            dataIndex: "dob",
            key: "dob",
            render: (dob) => moment(dob).format("DD/MM/YYYY"),
            sorter: (a, b) => moment(a.dob).unix() - moment(b.dob).unix(),
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
            sorter: (a, b) => a.address.localeCompare(b.address),
        },
        {
            title: "Ngày tạo",
            dataIndex: "createdDate",
            key: "createdDate",
            render: (createdDate) => moment(createdDate).format("DD/MM/YYYY"),
            sorter: (a, b) =>
                moment(a.createdDate).unix() - moment(b.createdDate).unix(),
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
            <TableHook columns={employeeColumns} data={data} />
            <CustomModal
                title="Thêm mới employee"
                modalProps={modalProps}
                onCancel={modalProps.onCancel}
                onOk={form.submit}
                className={"flex justify-center items-center"}
            >
                <EmployeeForm
                    form={form}
                    initialValues={dataUpdate ? dataUpdate : null}
                />
            </CustomModal>
        </>
    );
};

export default EmployeeProject;
