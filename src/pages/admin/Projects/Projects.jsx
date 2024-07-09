import { PlusOutlined } from "@ant-design/icons";
import { Button, Dropdown, Form, Input, Menu, Tag, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import CustomModal from "../../../components/ModalHook/CustomModal";
import useModalHook from "../../../components/ModalHook/useModalHook";
import TableHook from "../../../components/TableHook/TableHook";
import { BiUpload } from "react-icons/bi";
import ProjectForm from "../../../components/Form/ProjectForm";
import { useNavigate } from "react-router-dom";

const mockData = [
    {
        id: "1",
        date: "29/01/2023",
        name: "Hancorp Plaza",
        type: "Căn hộ chung cư",
        address:
            "Đường Trần Đăng Ninh, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội.",
        staff: "Lý Kiến Bình",
        status: "Active",
    },
    {
        id: "2",
        date: "03/02/2023",
        name: "Đông Dương Residence",
        type: "Căn hộ cao cấp",
        address: "Đường Quốc lộ 32, Xã Đức Thượng, Huyện Hoài Đức, Hà Nội.",
        staff: "Bảo Thành Danh",
        status: "Inactive",
    },
    {
        id: "3",
        date: "05/02/2023",
        name: "Khu đô thị Sun Group Hà Nam",
        type: "Khu đô thị",
        address: "Thành phố Hà Nam",
        staff: "Mộc Hồng Nga",
        status: "Active",
    },
    {
        id: "4",
        date: "15/02/2023",
        name: "Nam Ô Discovery",
        type: "Căn hộ cao cấp",
        address:
            "Đường Nguyễn Tất Thành, Phường Hòa Hiệp Nam, Quận Liên Chiểu, Đà Nẵng.",
        staff: "Kim Huyền Linh",
        status: "Active",
    },
    {
        id: "5",
        date: "03/03/2023",
        name: "Lam Hạ Center Point",
        type: "Căn hộ cao cấp",
        address: "Phường Lam Hạ, Thành phố Phủ Lý, Hà Nam.",
        staff: "Thái Nhã Trang",
        status: "Inactive",
    },
    {
        id: "6",
        date: "08/03/2023",
        name: "The Beverly - Vinhomes Ocean Park",
        type: "Khu đô thị chung cư",
        address:
            "Khu đô thị Vinhomes Ocean Park, Xã Đa Tốn, Huyện Gia Lâm, Hà Nội.",
        staff: "Kiều Tuấn Đức",
        status: "Active",
    },
    {
        id: "7",
        date: "24/04/2023",
        name: "Osaka Garden",
        type: "Căn hộ cao cấp",
        address: "Đường Lê Công Thanh, Thành phố Phủ Lý, Hà Nam.",
        staff: "Cai Tân Dũng",
        status: "Active",
    },
    {
        id: "8",
        date: "27/04/2023",
        name: "Hoàng Nam Uyên Hưng",
        type: "Căn hộ chung cư",
        address: "Đường Tố Hữu, Phường Uyên Hưng, Thị xã Tân Uyên, Bình Dương.",
        staff: "Dương Duy Minh",
        status: "Active",
    },
    {
        id: "9",
        date: "07/05/2023",
        name: "Phú Mỹ Estates",
        type: "Căn hộ chung cư",
        address: "Đường Huỳnh Hữu Chánh, Thị xã Phú Mỹ, Bà Rịa Vũng Tàu.",
        staff: "Anh Xuân Thái",
        status: "Inactive",
    },
    {
        id: "10",
        date: "17/05/2023",
        name: "The Stellar Town",
        type: "Căn hộ cao cấp",
        address:
            "Đường Hạ Long, Phường Hạ Long, Thành phố Hạ Long, Quảng Ninh.",
        staff: "Kim Bảo Trâm",
        status: "Active",
    },
    {
        id: "11",
        date: "26/06/2023",
        name: "Regal Residence Luxury",
        type: "Căn hộ cao cấp",
        address: "Đường Võ Nguyên Giáp, Quận Sơn Trà, Đà Nẵng.",
        staff: "Anh Hạnh Linh",
        status: "Active",
    },
    {
        id: "12",
        date: "29/07/2023",
        name: "Peninsula Đà Nẵng",
        type: "Căn hộ chung cư",
        address: "Đường Hoàng Sa, Quận Sơn Trà, Đà Nẵng.",
        staff: "Nhân Xuân Nhi",
        status: "Inactive",
    },
    {
        id: "13",
        date: "05/08/2023",
        name: "Hội An Legacy",
        type: "Căn hộ chung cư",
        address: "Đường 28/3, Phường Cẩm Phô, Thành phố Hội An, Quảng Nam.",
        staff: "Diễm Thiên Đức",
        status: "Inactive",
    },
    {
        id: "14",
        date: "19/09/2023",
        name: "Sun Symphony Residence",
        type: "Căn hộ chung cư",
        address:
            "Đường Trần Đại Nghĩa, Phường Ngũ Hành Sơn, Quận Sơn Trà, Đà Nẵng.",
        staff: "Kiều Quốc Điền",
        status: "Active",
    },
    {
        id: "15",
        date: "11/10/2023",
        name: "Đà Nẵng Gold Tower",
        type: "Căn hộ chung cư",
        address:
            "Đường Phạm Hùng, Phường Hòa Cường Nam, Quận Hải Châu, Đà Nẵng.",
        staff: "Đắc Tiến Thành",
        status: "Active",
    },
    {
        id: "16",
        date: "14/11/2023",
        name: "The Glory City",
        type: "Khu đô thị",
        address: "Số 3 Lê Lợi, Phường Lý Thái Tổ, Quận Hoàn Kiếm, Hà Nội.",
        staff: "Trần Thiên Giang",
        status: "Inactive",
    },
    {
        id: "17",
        date: "23/12/2023",
        name: "Golden Point Đông Hòa",
        type: "Căn hộ cao cấp",
        address: "Đường Bùi Viện, Quận Kiến An, Hải Phòng.",
        staff: "Lê Yến Đan",
        status: "Active",
    },
];

const Projects = () => {
    const [data, setData] = useState(mockData);
    const [editingRecord, setEditingRecord] = useState(null);
    const { showModal, modalProps, form } = useModalHook();
    const navigator = useNavigate();
    useEffect(() => {
        // Fetch data from API if necessary
        // setData(apiData);
    }, []);
    const handleEdit = (record) => {
        setEditingRecord(record);
        showModal();
    };

    const handleDelete = (record) => {
        console.log("Delete:", record);
        // Implement the delete functionality if needed
    };
    const columns = [
        {
            title: "STT",
            dataIndex: "id",
            key: "id",
            sorter: (a, b) => a.key - b.key,
        },
        {
            title: "Ngày đăng",
            dataIndex: "date",
            key: "date",
            sorter: (a, b) =>
                new Date(a.date.split("/").reverse().join("-")) -
                new Date(b.date.split("/").reverse().join("-")),
        },
        {
            title: "Tên dự án",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Loại dự án",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Staff",
            dataIndex: "staff",
            key: "staff",
        },
        {
            title: "Đã duyệt",
            key: "status",
            dataIndex: "status",
            render: (status) => (
                <Tag color={status === "Active" ? "green" : "red"}>
                    {status.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Dropdown overlay={menu(record)} trigger={["hover"]}>
                    <IoEllipsisHorizontal
                        style={{ fontSize: "24px", cursor: "pointer" }}
                    />
                </Dropdown>
            ),
        },
    ];
    const menu = (record) => (
        <Menu>
            <Menu.Item
                onClick={() => navigator(`/admin-projects/list/${record.id}`)}
            >
                List Product
            </Menu.Item>
            <Menu.Item
                onClick={() => navigator(`/admin-projects/${record.id}`)}
            >
                Detail
            </Menu.Item>
            <Menu.Item onClick={() => handleEdit(record)}>Edit</Menu.Item>
            <Menu.Item onClick={() => handleDelete(record)}>Delete</Menu.Item>
        </Menu>
    );
    // user submit form
    const handleOk = () => {
        form.validateFields()
            .then((values) => {
                form.resetFields();
                const updatedData = data.map((item) =>
                    item.key === editingRecord.key
                        ? { ...item, ...values }
                        : item
                );
                setData(updatedData);
                hideModal();
                setEditingRecord(null);
                console.log("Form values:", values);
            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            });
    };
    return (
        <div className="p-4">
            <Button
                type="primary"
                icon={<PlusOutlined />}
                className="mb-4"
                onClick={showModal}
            >
                Add New
            </Button>
            <TableHook
                data={data}
                columns={columns}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <CustomModal
                title="Add New Project"
                modalProps={modalProps}
                className="min-w-[600px]"
            >
                <ProjectForm form={form} initialValues={editingRecord || {}} />
            </CustomModal>
        </div>
    );
};

export default Projects;
