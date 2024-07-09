import React, { useState } from "react";
import { Button, Table, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import useModalHook from "../ModalHook/useModalHook";
import CustomModal from "../ModalHook/CustomModal";
import TableHook from "../TableHook/TableHook";
import TemplateForm from "../Form/TemplateForm";
import { BiEditAlt } from "react-icons/bi";

const TemplateProject = ({ data }) => {
    const { showModal, modalProps, form } = useModalHook();
    const [dataUpdate, setDataUpdate] = useState();
    const templateColumns = [
        {
            title: "STT",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Tên biểu mẫu",
            dataIndex: "templateName",
            key: "templateName",
        },
        {
            title: "Loại biểu mẫu",
            dataIndex: "templateType",
            key: "templateType",
            sorter: (a, b) => a.templateType.localeCompare(b.templateType),
        },
        {
            title: "Diễn giải",
            dataIndex: "explanation",
            key: "explanation",
        },
        {
            title: "Khóa",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Tag color={status === "Active" ? "green" : "red"}>
                    {status}
                </Tag>
            ),
        },
        {
            title: "Nhân viên",
            dataIndex: "employee",
            key: "employee",
        },
        {
            title: "Thời gian",
            dataIndex: "time",
            key: "time",
            sorter: (a, b) =>
                moment(a.time, "DD/MM/YYYY").unix() -
                moment(b.time, "DD/MM/YYYY").unix(),
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
            <TableHook columns={templateColumns} data={data} />
            <CustomModal
                title="Thêm mới biểu mẫu"
                modalProps={modalProps}
                onCancel={modalProps.onCancel}
                onOk={form.submit}
                className={"flex justify-center items-center"}
            >
                <TemplateForm
                    form={form}
                    initialValues={dataUpdate ? dataUpdate : null}
                />
            </CustomModal>
        </>
    );
};

export default TemplateProject;
