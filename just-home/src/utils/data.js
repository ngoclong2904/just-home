import card1 from "../assets/Card/card1.png";
import card2 from "../assets/Card/card2.png";
import card3 from "../assets/Card/card3.png";
import card4 from "../assets/Card/card4.png";
import card5 from "../assets/Card/card5.png";
import typical1 from "../assets/typical/typical1.png";
import typical2 from "../assets/typical/typical2.png";
import typical3 from "../assets/typical/typical3.png";
import typical4 from "../assets/typical/typical4.png";
import typical5 from "../assets/typical/typical5.png";
import typical6 from "../assets/typical/typical6.png";
import mainImage from "../assets/detail/main.jpg";
import smallImage1 from "../assets/detail/child1.jpg";
import smallImage2 from "../assets/detail/child2.jpg";
import smallImage3 from "../assets/detail/chid3.jpg";
export const Cards = [
    {
        id: 1,
        title: "Sun Casa Central",
        subtitle: "8 Căn hộ",
        image: card1,
    },
    {
        id: 2,
        title: "Peninsula Đà Nẵng",
        subtitle: "10 Căn hộ",
        image: card2,
    },
    {
        id: 3,
        title: "Hội An Legacity",
        subtitle: "12 Căn hộ",
        image: card3,
    },
    {
        title: "Đà Nẵng Gold Tower",
        subtitle: "16 Căn hộ",
        image: card4,
    },
    {
        title: "The Gloria City",
        subtitle: "8 Căn hộ",
        image: card5,
    },
];
export const TypicalData = [
    {
        id: 1,
        status: {
            forSale: true,
            feture: false,
            forRent: false,
        },
        image: typical1,
        title: "Luxury Family Home",
        address: "1800-1818 79th St",
        beds: 4,
        baths: 1,
        size: 400,
        price: 395000,
    },
    {
        id: 2,
        status: {
            forSale: true,
            feture: true,
            forRent: false,
        },
        image: typical2,
        title: "Skyper Pool Apartment",
        address: "1020 Bloomingdale Ave",
        beds: 4,
        baths: 2,
        size: 450,
        price: 280000,
    },
    {
        id: 3,
        status: {
            forSale: true,
            feture: false,
            forRent: false,
        },
        image: typical3,
        title: "North Dillard Street",
        address: "4330 Bell Shoals Rd",
        beds: 4,
        baths: 2,
        size: 400,
        price: 395000,
    },
    {
        id: 4,
        status: {
            forSale: false,
            feture: true,
            forRent: false,
        },
        image: typical4,
        title: "Eaton Garth Penthouse",
        address: "7722 18th Ave, Brooklyn",
        beds: 4,
        baths: 2,
        size: 450,
        price: 180000,
    },
    {
        id: 5,
        status: {
            forSale: false,
            feture: true,
            forRent: false,
        },
        image: typical5,
        title: "New Apartment Nice View",
        address: "42 Avenue O, Brooklyn",
        beds: 4,
        baths: 2,
        size: 400,
        price: 395000,
    },
    {
        id: 6,
        status: {
            forSale: false,
            feture: false,
            forRent: true,
        },
        image: typical6,
        title: "Diamond Manor Apartment",
        address: "7802 20th Ave, Brooklyn",
        beds: 4,
        baths: 2,
        size: 500,
        price: 259000,
    },
];
export const detailData = {
    title: "Peninsula Đà Nẵng",
    address: "Phường Nại Hiên Đông, Quận Sơn Trà, Đà Nẵng.",
    mainImage: mainImage,
    smallImages: [smallImage1, smallImage2, smallImage3],
    statusBadges: { id: 1, title: ["Sắp mở bán", "Đang nhận booking"] },
    // statusBadges: { id: 2, title: ["Đang mở bán"] },
    // statusBadges: { id: 3, title: ["Đã bàn giao"] },
    stats: {
        units: 941,
        area: "7.172",
    },
    menuItems: [
        { title: "Bán & Cho thuê", subtitle: "Bán & Cho thuê" },
        { title: "Tổng quan", subtitle: "Tổng quan" },
        { title: "Vị trí", subtitle: "Vị trí" },
        { title: "Ước tính khoản vay", subtitle: "Ước tính khoản vay" },
        { title: "Câu hỏi thường gặp", subtitle: "Câu hỏi thường gặp" },
        { title: "Dự án liên quan", subtitle: "Dự án liên quan" },
    ],
};
export const receiptData = {
    amount: "IDR 1,000,000",
    refNumber: "000085752257",
    paymentTime: "25-02-2023, 13:22:16",
    paymentMethod: "Bank Transfer",
    senderName: "Antonio Roberto",
    adminFee: "IDR 193.00",
};
