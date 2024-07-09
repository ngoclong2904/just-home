import { Button, Tag } from "antd";
import React from "react";
import TableHook from "../TableHook/TableHook";
const historyColumns = [
    {
        title: "STT",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Ngày thao tác",
        dataIndex: "date",
        key: "date",
        sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
        title: "Nhân viên",
        dataIndex: "employee",
        key: "employee",
        sorter: (a, b) => a.employee.localeCompare(b.employee),
    },
    {
        title: "Đã duyệt",
        dataIndex: "status",
        key: "status",
        render: (status) => (
            <Tag color={status === "Active" ? "green" : "red"}>
                {status.toUpperCase()}
            </Tag>
        ),
    },
    {
        title: "Diễn giải",
        dataIndex: "description",
        key: "description",
    },
];
const HistoryProject = ({ data }) => {
    return (
        <>
            <TableHook columns={historyColumns} data={data} />
        </>
    );
};

export default HistoryProject;
