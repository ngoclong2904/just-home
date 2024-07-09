import React from "react";
import mainImage from "../assets/policy/policy.png";
import statistical1 from "../assets/policy/ttoan.png";
import Statistica2 from "../assets/policy/dkad.png";

const Policy = () => {
    return (
        <div className="bg-primary min-h-screen p-6 pb-20 pt-28">
            <h2 className="text-3xl text-center mb-6 text-white">
                Chính sách bán hàng của Golden Point Đông Hòa
            </h2>
            <p>
                Chủ đầu tư Phú Mỹ Hưng gửi đến quý khách hàng chính sách bán
                hàng dự án Golden Point Đông Hòa mới nhất.
            </p>
            <div className="my-4">
                <p className="text-sm">Nội dung chính sách bao gồm:</p>
                <ul className="pl-8 text-xs">
                    <li className="list-disc">Chính sách chung</li>
                    <li className="list-disc">Tiến độ thanh toán</li>
                    <li className="list-disc">Chương trình ưu đãi</li>
                </ul>
            </div>
            <img
                src={mainImage}
                alt="Main"
                className="w-full h-[600px] md:h-[800px]  object-cover"
            />
            <div className="mt-6">
                <span className="leading-10">
                    Chương trình hỗ trợ lãi suất vay ngân hàng:
                    <ul>
                        <li>
                            – Khách hàng sau khi thanh toán đủ 20% Giá bán căn
                            hộ (gồm VAT) và ký HĐMB, nếu có nhu cầu vay ngân
                            hàng để hoàn thành thanh toán cho căn hộ, sẽ được áp
                            dụng Chương trình hỗ trợ lãi suất vay (HTLS) cho
                            khoản vay tương đương 70% giá trị căn hộ (gồm VAT):
                        </li>
                        <li>
                            + Đối với các căn các hộ dự án The Horizon : HTLS 24
                            tháng, Chiết khấu 1%. Miễn phí quản lý 3 năm đầu.
                        </li>
                        <li>
                            Để biết thêm thông tin chi tiết về chính sách bán
                            hàng dự án Peninsula Đà Nẵng, quý anh chị vui lòng
                            đăng ký để nhận thông tin ngay nhé!
                        </li>
                    </ul>
                </span>
            </div>

            <div className="mt-6">
                <img src={statistical1} className="w-full  object-contain" />
            </div>
            <div className="mt-12">
                <img src={Statistica2} className="w-full  object-contain" />
            </div>
        </div>
    );
};

export default Policy;
