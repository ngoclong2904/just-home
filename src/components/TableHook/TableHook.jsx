import React from "react";
import { Table, Tag, Button, Space } from "antd";

const TableHook = ({ data, columns, onEdit, onDelete }) => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="key"
            pagination={{ pageSize: 10 }}
        />
    );
};

export default TableHook;
