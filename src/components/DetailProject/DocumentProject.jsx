import { Button } from "antd";
import moment from "moment";
import React, { useState } from "react";
import useModalHook from "../ModalHook/useModalHook";
import CustomModal from "../ModalHook/CustomModal";
import TableHook from "../TableHook/TableHook";
import DocumentForm from "../Form/DocumentForm";
import { BiEditAlt } from "react-icons/bi";

const DocumentProject = ({ data }) => {
    const { showModal, modalProps, form } = useModalHook();
    const [dataUpdate, setDataUpdate] = useState();
    const documentColumns = [
        {
            title: "Kí hiệu",
            dataIndex: "symbol",
            key: "symbol",
        },
        {
            title: "Tên Tài liệu",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: "Diễn giải",
            dataIndex: "explanation",
            key: "explanation",
        },
        {
            title: "Nhân viên",
            dataIndex: "employee",
            key: "employee",
            sorter: (a, b) => a.employee.localeCompare(b.employee),
        },
        {
            title: "Ngày cập nhật",
            dataIndex: "updateDate",
            key: "updateDate",
            sorter: (a, b) =>
                moment(a.updateDate, "DD/MM/YYYY").unix() -
                moment(b.updateDate, "DD/MM/YYYY").unix(),
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
            <Button type="primary" className="mb-4" onClick={showModal}>
                ADD NEW
            </Button>
            <TableHook columns={documentColumns} data={data} />
            <CustomModal
                title="Thêm mới tài liệu"
                modalProps={modalProps}
                onCancel={modalProps.onCancel}
                onOk={form.submit}
                className={"flex justify-center items-center"}
            >
                <DocumentForm
                    form={form}
                    initialValues={dataUpdate ? dataUpdate : null}
                />
            </CustomModal>
        </>
    );
};

export default DocumentProject;
