import { Button, Modal } from "antd";
import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaCar, FaRegStar, FaStar } from "react-icons/fa";

// Mock data
const units = [
    { id: "A1.01", area: 79.78, cars: 2, stars: 1, status: "sold" },
    { id: "A1.02", area: 76.4, cars: 2, stars: 6, status: "open" },
    { id: "A1.03", area: 86.75, cars: 2, stars: 6, status: "sold" },
    { id: "A1.04", area: 86.75, cars: 2, stars: 6, status: "pending" },
    { id: "A1.05", area: 107.3, cars: 3, stars: 1, status: "open" },
    { id: "A1.06", area: 81.58, cars: 2, stars: 0, status: "open" },
    { id: "A1.07", area: 79.78, cars: 2, stars: 1, status: "sold" },
    { id: "A1.08", area: 81.58, cars: 2, stars: 0, status: "sold" },
    { id: "A1.09", area: 86.75, cars: 2, stars: 6, status: "pending" },
    { id: "A1.10", area: 81.58, cars: 2, stars: 0, status: "sold" },
    { id: "A1.11", area: 81.58, cars: 2, stars: 0, status: "open" },
    { id: "A1.12", area: 79.78, cars: 2, stars: 1, status: "sold" },
];

// Status classes
const statusClasses = {
    open: "bg-yellow-100",
    sold: "bg-red-600",
    pending: "bg-orange-500",
};

const ChooseProduct = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const orderNumber = 35;

    const handleOk = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="pt-[64px] w-full min-h-screen">
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                footer={null}
                closable={false}
                centered
                modalClassName="custom-modal"
                bodyStyle={{
                    backgroundColor: "#4a0905",
                    color: "white",
                    textAlign: "center",
                    padding: "50px 0",
                }}
                style={{
                    padding: 0,
                }}
            >
                <p className="text-xl">Số thứ tự của bạn là {orderNumber}</p>
                <p className="text-xl">
                    Quý khách xin vui lòng chờ đến lượt để chọn sản phẩm
                </p>
                <Button
                    className="mt-8 p-4"
                    onClick={() => setIsModalVisible(false)}
                >
                    Đóng
                </Button>
            </Modal>
            <div className="flex items-start flex-wrap justify-start gap-8 px-4 py-8 bg-yellow-200">
                <Button className="w-1/5 text-red-500 py-6 text-lg font-bold">
                    Mã sản phẩm
                </Button>
                <Button className="w-1/5 text-red-500 py-6 text-lg font-bold">
                    Block
                </Button>
                <Button className="w-1/5 text-red-500 py-6 text-lg font-bold">
                    Đang mở bán
                </Button>
                <Button className="w-1/5 text-red-500 py-6 text-lg font-bold">
                    2 PN
                </Button>
                <Button className="w-1/5 text-red-500 py-6 text-lg font-bold">
                    Số Tầng
                </Button>
                <Button className="w-1/5 text-red-500 py-6 text-lg font-bold">
                    Vị trí
                </Button>
                <Button className="w-1/6 text-red-500 bg-green-300 rounded-full py-6 text-lg font-bold">
                    Tìm kiếm
                </Button>
            </div>

            <div className="mt-8 px-12 text-black">
                <div className="mb-8">
                    <h2 className="text-start mb-8 text-lg">
                        Golden Point Đông Hòa
                    </h2>
                    <div className="flex justify-start gap-6">
                        <span className="">Chú thích:</span>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-6 bg-yellow-100"></div>
                            <span className="ml-1">Đang mở bán</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-6 bg-red-600"></div>
                            <span className="ml-1">Đã bán</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-6 bg-orange-500"></div>
                            <span className="ml-1">
                                Đang chờ hoàn tất thủ tục
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border border-[#999] shadow-md">
                    <h3 className="text-start border-b border-[#999] text-black font-semibold text-xl py-4 ml-4">
                        Tầng 1
                    </h3>
                    <div className="grid grid-cols-4 gap-2 p-4">
                        {units.map((unit, i) => (
                            <div
                                key={i}
                                className={`${
                                    statusClasses[unit.status]
                                } text-black font-bold flex flex-col items-center border border-[#999]`}
                            >
                                <span className="font-bold text-lg p-4">
                                    {unit.id}
                                </span>
                                <div className="flex items-center justify-between w-full mt-2 text-sm bg-[#bdbdbd] p-2">
                                    <span className="flex items-center gap-2 text-[#71726e] text-sm">
                                        <BiHomeAlt />
                                        {unit.area}
                                    </span>
                                    <span className="flex items-center gap-2 text-[#71726e] text-sm">
                                        <FaCar />
                                        {unit.cars}
                                    </span>
                                    <span className="flex items-center gap-2 text-[#b8932e] text-sm">
                                        <FaStar />
                                        {unit.stars}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseProduct;
