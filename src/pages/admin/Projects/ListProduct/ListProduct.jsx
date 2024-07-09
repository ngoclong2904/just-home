import { Button, Tag } from "antd";
import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import useModalHook from "../../../../components/ModalHook/useModalHook";
import TableHook from "../../../../components/TableHook/TableHook";
import CustomModal from "../../../../components/ModalHook/CustomModal";
import AddPolicyForm from "../../../../components/Form/AddPolicyForm";
const productData = [
    {
        id: 1,
        project: "Sunset Apartments",
        apartmentCode: "A101",
        image: "https://example.com/images/apartment1.jpg",
        block: "Block A",
        floor: 10,
        bedrooms: 3,
        bathrooms: 2,
        vat: 0.1,
        maintenanceFee: 1000000,
        totalPrice: 5000000000,
        status: "Mở bán",
        effectiveContract: true,
        adjustment: false,
    },
    {
        id: 2,
        project: "Ocean View Residence",
        apartmentCode: "B202",
        image: "https://example.com/images/apartment2.jpg",
        block: "Block B",
        floor: 5,
        bedrooms: 2,
        bathrooms: 1,
        vat: 0.1,
        maintenanceFee: 800000,
        totalPrice: 3000000000,
        status: "Mở bán",
        effectiveContract: true,
        adjustment: false,
    },
    {
        id: 3,
        project: "Green Valley Homes",
        apartmentCode: "C301",
        image: "https://example.com/images/apartment3.jpg",
        block: "Block C",
        floor: 3,
        bedrooms: 1,
        bathrooms: 1,
        vat: 0.1,
        maintenanceFee: 500000,
        totalPrice: 1500000000,
        status: "Không mở bán",
        effectiveContract: false,
        adjustment: true,
    },
    {
        id: 4,
        project: "Riverfront Suites",
        apartmentCode: "D102",
        image: "https://example.com/images/apartment4.jpg",
        block: "Block D",
        floor: 15,
        bedrooms: 4,
        bathrooms: 3,
        vat: 0.1,
        maintenanceFee: 1200000,
        totalPrice: 7000000000,
        status: "Mở bán",
        effectiveContract: true,
        adjustment: false,
    },
    {
        id: 5,
        project: "City Center Residences",
        apartmentCode: "E202",
        image: "https://example.com/images/apartment5.jpg",
        block: "Block E",
        floor: 8,
        bedrooms: 2,
        bathrooms: 2,
        vat: 0.1,
        maintenanceFee: 900000,
        totalPrice: 4000000000,
        status: "Mở bán",
        effectiveContract: true,
        adjustment: false,
    },
    {
        id: 6,
        project: "Mountain View Heights",
        apartmentCode: "F401",
        image: "https://example.com/images/apartment6.jpg",
        block: "Block F",
        floor: 4,
        bedrooms: 1,
        bathrooms: 1,
        vat: 0.1,
        maintenanceFee: 600000,
        totalPrice: 2000000000,
        status: "Mở bán",
        effectiveContract: true,
        adjustment: false,
    },
    {
        id: 7,
        project: "Lakefront Residences",
        apartmentCode: "G501",
        image: "https://example.com/images/apartment7.jpg",
        block: "Block G",
        floor: 6,
        bedrooms: 3,
        bathrooms: 2,
        vat: 0.1,
        maintenanceFee: 1100000,
        totalPrice: 6000000000,
        status: "Mở bán",
        effectiveContract: true,
        adjustment: false,
    },
    {
        id: 8,
        project: "Skyline Towers",
        apartmentCode: "H202",
        image: "https://example.com/images/apartment8.jpg",
        block: "Block H",
        floor: 12,
        bedrooms: 2,
        bathrooms: 1,
        vat: 0.1,
        maintenanceFee: 750000,
        totalPrice: 3500000000,
        status: "Mở bán",
        effectiveContract: true,
        adjustment: false,
    },
    {
        id: 9,
        project: "Garden Oasis Apartments",
        apartmentCode: "I102",
        image: "https://example.com/images/apartment9.jpg",
        block: "Block I",
        floor: 7,
        bedrooms: 2,
        bathrooms: 2,
        vat: 0.1,
        maintenanceFee: 950000,
        totalPrice: 4500000000,
        status: "Mở bán",
        effectiveContract: true,
        adjustment: false,
    },
    {
        id: 10,
        project: "Harbor View Condos",
        apartmentCode: "J301",
        image: "https://example.com/images/apartment10.jpg",
        block: "Block J",
        floor: 9,
        bedrooms: 3,
        bathrooms: 2,
        vat: 0.1,
        maintenanceFee: 1050000,
        totalPrice: 5500000000,
        status: "Mở bán",
        effectiveContract: true,
        adjustment: false,
    },
];

const ListProduct = () => {
    const productColumns = [
        {
            title: "STT",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Dự án",
            dataIndex: "project",
            key: "project",
        },
        {
            title: "Mã căn hộ",
            dataIndex: "apartmentCode",
            key: "apartmentCode",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image) => (
                <img
                    src={image}
                    alt="Apartment"
                    style={{ maxWidth: "100px" }}
                />
            ),
        },
        {
            title: "Khu/Block",
            dataIndex: "block",
            key: "block",
        },
        {
            title: "Tầng",
            dataIndex: "floor",
            key: "floor",
        },
        {
            title: "Phòng ngủ",
            dataIndex: "bedrooms",
            key: "bedrooms",
        },
        {
            title: "Phòng tắm",
            dataIndex: "bathrooms",
            key: "bathrooms",
        },
        {
            title: "VAT",
            dataIndex: "vat",
            key: "vat",
            render: (vat) => `${(vat * 100).toFixed(0)}%`,
        },
        {
            title: "Phí bảo trì",
            dataIndex: "maintenanceFee",
            key: "maintenanceFee",
            render: (maintenanceFee) => (
                <span>{Intl.NumberFormat().format(maintenanceFee)} VNĐ</span>
            ),
        },
        {
            title: "Tổng giá trị",
            dataIndex: "totalPrice",
            key: "totalPrice",
            render: (totalPrice) => (
                <span>{Intl.NumberFormat().format(totalPrice)} VNĐ</span>
            ),
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Tag color={status === "Mở bán" ? "green" : "red"}>
                    {status}
                </Tag>
            ),
        },
        {
            title: "Hợp đồng có hiệu lực",
            dataIndex: "effectiveContract",
            key: "effectiveContract",
            render: (effectiveContract) => (
                <Tag color={effectiveContract ? "green" : "red"}>
                    {effectiveContract ? "Active" : "Inactive"}
                </Tag>
            ),
        },
        {
            title: "Chỉnh sửa",
            dataIndex: "adjustment",
            key: "adjustment",
            render: (adjustment) => (
                <Tag color={adjustment ? "green" : "red"}>
                    {adjustment ? "Có" : "Không"}
                </Tag>
            ),
        },
        {
            title: "Hành động",
            dataIndex: "action",
            key: "action",
            render: (text, record) => (
                <Button
                    icon={<MdModeEditOutline />}
                    onClick={() => handleEdit(record)}
                >
                    Sửa
                </Button>
            ),
        },
    ];

    const { showModal, modalProps, form } = useModalHook();
    const [dataUpdate, setDataUpdate] = useState({});
    const handleEdit = (record) => {
        console.log("Edit record:", record);
        // Điều hướng hoặc xử lý logic sửa đổi dữ liệu sản phẩm
    };
    return (
        <>
            <Button type="primary" className="mb-4" onClick={showModal}>
                ADD NEW
            </Button>
            <TableHook columns={productColumns} data={productData} />
            <CustomModal
                title="Thêm mới sản phẩm"
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

export default ListProduct;
