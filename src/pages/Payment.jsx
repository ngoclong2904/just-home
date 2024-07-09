import React, { useState } from "react";
import { Table, Input, Button, Select } from "antd";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsBoundingBoxCircles } from "react-icons/bs";

const { Option } = Select;

const Payment = () => {
    const [searchText, setSearchText] = useState("");
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const columns = [
        {
            title: "Mã số",
            dataIndex: "id",
            key: "id",
            sorter: (a, b) => a.id.localeCompare(b.id),
        },
        {
            title: "Name Real Estate",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "The amount paid",
            dataIndex: "amountPaid",
            key: "amountPaid",
        },
        {
            title: "Start time",
            dataIndex: "startTime",
            key: "startTime",
        },
        {
            title: "End time",
            dataIndex: "endTime",
            key: "endTime",
        },
        {
            title: "Thanh Toán định kì",
            key: "paymentDetails",
            render: (text, record) => (
                <div className="flex space-x-2">
                    <AiOutlineCloseSquare size={30} />
                    <AiOutlineCloseSquare size={30} />
                    <BsBoundingBoxCircles size={30} />
                </div>
            ),
        },
        {
            title: "Chủ đầu tư",
            dataIndex: "investor",
            key: "investor",
            render: (text) => (
                <p className="p-2 rounded-md bg-[rgba(0,0,0,.2)] text-xs font-semibold">
                    {text}
                </p>
            ),
        },
    ];

    const data = [
        {
            key: "1",
            id: "01",
            name: "Golden Point Đồng Hòa",
            amountPaid: "100.000.000/2.000.000.000",
            startTime: "2024-05-20 09:01:00",
            endTime: "2020-05-23 09:07:10",
            investor: "Nguyen Van A",
        },
        {
            key: "2",
            id: "02",
            name: "Peninsula Đà Nẵng",
            amountPaid: "500.000.000/3.500.000.000",
            startTime: "2023-04-23 09:02:10",
            endTime: "2023-04-23 09:08:10",
            investor: "Nguyen Van M",
        },
    ];

    return (
        <div className="p-8 mt-20">
            <div className="mb-10 pb-2 border-b border-[#999]">
                <p className="font-bold text-xl text-black mb-2">Thanh toán</p>
                <p className="font-light text-sm text-[#333]">
                    Thanh toán theo tiến độ của dự án
                </p>
            </div>
            <div className="flex justify-between mb-4">
                <Button type="primary" icon={<PlusCircleOutlined />}>
                    Tạo công việc
                </Button>
                <div className="flex">
                    <div className="flex items-center gap-2 shadow-lg p-2 rounded-md mr-2 shadow-[rgba(0,0,0,.2)]">
                        <span className="text-black text-xs w-20 text-end">
                            Sắp Xếp
                        </span>
                        <Select defaultValue="Mã số" className="mr-4">
                            <Option value="id">Mã số</Option>
                            <Option value="name">Name</Option>
                        </Select>
                    </div>
                    <Input
                        placeholder="Tìm kiếm"
                        prefix={<SearchOutlined />}
                        value={searchText}
                        onChange={handleSearch}
                        className="shadow-lg p-2 rounded-md mr-2 shadow-[rgba(0,0,0,.2)]"
                    />
                </div>
            </div>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    );
};

export default Payment;
