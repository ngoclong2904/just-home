import { Tabs } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import General from "../../../../components/DetailProject/General";
import HistoryProject from "../../../../components/DetailProject/HistoryProject";
import PaymentProject from "../../../../components/DetailProject/PaymentProject";
import TableHook from "../../../../components/TableHook/TableHook";
import PolicyProject from "../../../../components/DetailProject/PolicyProject";
import TemplateProject from "../../../../components/DetailProject/TemplateProject";
import DocumentProject from "../../../../components/DetailProject/DocumentProject";
import PromotionProject from "../../../../components/DetailProject/PromotionProject";
import EmployeeProject from "../../../../components/DetailProject/EmployeeProject";

const { TabPane } = Tabs;

const detailProjectData = {
    name: "Hancorp Plaza",
    commercialName: "Khu phức hợp Hancorp Plaza",
    type: "Căn hộ chung cư",
    address: "Đường Trần Đăng Ninh, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội.",
    licenseNumber: "0104630479",
    issueDate: "02/06/2010",
    area: "8,23ha",
    imageUrl:
        "https://i.pinimg.com/564x/25/82/63/258263126004b78dc46f584723619d30.jpg", // Update with actual image path
};

const historyData = [
    {
        id: "1",
        date: "29/01/2023",
        employee: "Nguyễn Tiến An",
        status: "Active",
        description: "Thanh toán theo hình thức nhận tiền mặt",
    },
    {
        id: "2",
        date: "03/02/2023",
        employee: "Phạm Trần Thành Tâm",
        status: "Inactive",
        description: "Thanh toán theo hình thức chuyển khoản",
    },
    {
        id: "3",
        date: "05/02/2023",
        employee: "Nguyễn Tiến Hảo",
        status: "Active",
        description: "Thanh toán theo hình thức chuyển khoản",
    },
    {
        id: "4",
        date: "15/02/2023",
        employee: "Trần An Hạ",
        status: "Active",
        description: "Thanh toán theo hình thức chuyển khoản",
    },
    {
        id: "5",
        date: "03/03/2023",
        employee: "Mai Tiến An",
        status: "Inactive",
        description: "Thanh toán theo hình thức nhận tiền mặt",
    },
];

const paymentScheduleData = [
    {
        id: "1",
        installment: 1,
        period: 0,
        option: "Ngày",
        paymentDate: "29/01/2023",
        paymentType: "Tổng giá trị",
        paymentRate: "10%",
        vatRate: "1%",
        pbtRate: "0%",
        amount: "500.000.000",
        description: "Ngày kí hợp đồng",
    },
    {
        id: "2",
        installment: 2,
        period: 30,
        option: "Ngày",
        paymentDate: "01/03/2023",
        paymentType: "Tổng giá trị",
        paymentRate: "30%",
        vatRate: "3%",
        pbtRate: "10%",
        amount: "1.000.000.000",
        description: "30 ngày sau khi ký hợp đồng",
    },
    {
        id: "3",
        installment: 3,
        period: 60,
        option: "Ngày",
        paymentDate: "01/05/2023",
        paymentType: "Tổng giá trị",
        paymentRate: "10%",
        vatRate: "5%",
        pbtRate: "30%",
        amount: "300.000.000",
        description: "60 ngày sau khi ký hợp đồng",
    },
    {
        id: "4",
        installment: 4,
        period: 120,
        option: "Ngày",
        paymentDate: "02/07/2023",
        paymentType: "Tổng giá trị",
        paymentRate: "15%",
        vatRate: "2%",
        pbtRate: "0%",
        amount: "200.000.000",
        description: "90 ngày sau khi ký hợp đồng",
    },
    {
        id: "5",
        installment: 5,
        period: 30,
        option: "Ngày",
        paymentDate: "03/08/2023",
        paymentType: "Tổng giá trị",
        paymentRate: "20%",
        vatRate: "3%",
        pbtRate: "100%",
        amount: "700.000.000",
        description: "Sau khi có thông báo làm sổ đỏ",
    },
];

const policyData = [
    {
        key: "1",
        id: "CSBH-0001",
        startDate: "29/01/2023",
        endDate: "03/02/2023",
        policyType: "Thanh toán trước hạn",
        quantity: "03",
        condition: "Không quá 5 ngày",
        discountRate: "0%/ngày",
        bonusPenalty: "1,000,000VNĐ",
        explanation: "Thông báo trước hạn",
        inputter: "Ngô Quốc Ngoan",
    },
    {
        key: "2",
        id: "CSBH-0002",
        startDate: "03/02/2023",
        endDate: "05/05/2023",
        policyType: "Thanh toán đúng hạn",
        quantity: "01",
        condition: "0",
        discountRate: "0.5%/ngày",
        bonusPenalty: "3,000,000VNĐ",
        explanation: "Thông báo đúng hạn",
        inputter: "Nguyễn Khải Hân",
    },
    {
        key: "3",
        id: "CSBH-0003",
        startDate: "05/05/2023",
        endDate: "15/07/2023",
        policyType: "Thanh toán đúng hạn",
        quantity: "01",
        condition: "0",
        discountRate: "0.3%/ngày",
        bonusPenalty: "1,000,000VNĐ",
        explanation: "Thông báo đúng hạn",
        inputter: "Trần Quốc Khải",
    },
    {
        key: "4",
        id: "CSBH-0004",
        startDate: "16/07/2023",
        endDate: "30/10/2023",
        policyType: "Thanh toán trước hạn",
        quantity: "01",
        condition: "3 ngày",
        discountRate: "1%/ngày",
        bonusPenalty: "5,000,000VNĐ",
        explanation: "Thông báo trước hạn",
        inputter: "Mai Chí Tâm",
    },
    {
        key: "5",
        id: "CSBH-0005",
        startDate: "03/10/2023",
        endDate: "03/10/2023",
        policyType: "Thanh toán đúng hạn",
        quantity: "01",
        condition: "0",
        discountRate: "0.5%/ngày",
        bonusPenalty: "1,000,000VNĐ",
        explanation: "Thông báo đúng hạn",
        inputter: "Đào Thành Như",
    },
];
const templateData = [
    {
        id: 1,
        templateName: "Phiếu đặt cọc",
        templateType: "Phiếu đặt cọc",
        explanation: "Biểu mẫu đặt cọc",
        status: "Active",
        employee: "Bùi Tuấn Hữu",
        time: "29/01/2023",
        address: "123 Main St",
        phoneNumber: "123456789",
        email: "example@example.com",
        website: "https://example.com",
    },
    {
        id: 2,
        templateName: "Phiếu thanh toán theo đợt",
        templateType: "Phiếu thanh toán",
        explanation: "Biểu mẫu thanh toán theo đợt",
        status: "Inactive",
        employee: "Nguyễn Hữu Toàn",
        time: "03/02/2023",
        address: "456 Secondary St",
        phoneNumber: "987654321",
        email: "example2@example.com",
        website: "https://example2.com",
    },
    {
        id: 3,
        templateName: "Hợp đồng thuê nhà",
        templateType: "Hợp đồng",
        explanation: "Biểu mẫu hợp đồng thuê nhà",
        status: "Active",
        employee: "Đặng Anh Hòa",
        time: "04/05/2023",
        address: "789 Tertiary St",
        phoneNumber: "234567890",
        email: "example3@example.com",
        website: "https://example3.com",
    },
    {
        id: 4,
        templateName: "Hợp đồng mua bán",
        templateType: "Hợp đồng",
        explanation: "Biểu mẫu hợp đồng mua bán",
        status: "Inactive",
        employee: "Mai Chí Toàn",
        time: "15/07/2023",
        address: "101 Quaternary St",
        phoneNumber: "345678901",
        email: "example4@example.com",
        website: "https://example4.com",
    },
    {
        id: 5,
        templateName: "Biên bản giao nhận",
        templateType: "Biên bản",
        explanation: "Biểu mẫu biên bản giao nhận",
        status: "Active",
        employee: "Nguyễn Văn Kha",
        time: "10/08/2023",
        address: "202 Quinary St",
        phoneNumber: "456789012",
        email: "example5@example.com",
        website: "https://example5.com",
    },
    {
        id: 6,
        templateName: "Phiếu thu",
        templateType: "Phiếu thu",
        explanation: "Biểu mẫu phiếu thu",
        status: "Inactive",
        employee: "Trần Thị Hồng",
        time: "12/09/2023",
        address: "303 Senary St",
        phoneNumber: "567890123",
        email: "example6@example.com",
        website: "https://example6.com",
    },
    {
        id: 7,
        templateName: "Phiếu chi",
        templateType: "Phiếu chi",
        explanation: "Biểu mẫu phiếu chi",
        status: "Active",
        employee: "Lê Thị Thanh",
        time: "20/10/2023",
        address: "404 Septenary St",
        phoneNumber: "678901234",
        email: "example7@example.com",
        website: "https://example7.com",
    },
    {
        id: 8,
        templateName: "Giấy báo nợ",
        templateType: "Giấy báo",
        explanation: "Biểu mẫu giấy báo nợ",
        status: "Inactive",
        employee: "Phạm Văn Minh",
        time: "01/11/2023",
        address: "505 Octonary St",
        phoneNumber: "789012345",
        email: "example8@example.com",
        website: "https://example8.com",
    },
    {
        id: 9,
        templateName: "Giấy báo có",
        templateType: "Giấy báo",
        explanation: "Biểu mẫu giấy báo có",
        status: "Active",
        employee: "Vũ Thị Mai",
        time: "10/12/2023",
        address: "606 Nonary St",
        phoneNumber: "890123456",
        email: "example9@example.com",
        website: "https://example9.com",
    },
    {
        id: 10,
        templateName: "Phiếu xuất kho",
        templateType: "Phiếu xuất",
        explanation: "Biểu mẫu phiếu xuất kho",
        status: "Inactive",
        employee: "Ngô Quang Huy",
        time: "25/12/2023",
        address: "707 Decenary St",
        phoneNumber: "901234567",
        email: "example10@example.com",
        website: "https://example10.com",
    },
];
const documentData = [
    {
        id: "1",
        symbol: "ABC123",
        name: "Tài liệu số 1",
        explanation: "Diễn giải cho tài liệu số 1",
        employee: "Người 1",
        updateDate: "01/07/2024",
    },
    {
        id: "2",
        symbol: "DEF456",
        name: "Tài liệu số 2",
        explanation: "Diễn giải cho tài liệu số 2",
        employee: "Người 2",
        updateDate: "02/07/2024",
    },
    {
        id: "3",
        symbol: "GHI789",
        name: "Tài liệu số 3",
        explanation: "Diễn giải cho tài liệu số 3",
        employee: "Người 3",
        updateDate: "03/07/2024",
    },
    {
        id: "4",
        symbol: "JKL012",
        name: "Tài liệu số 4",
        explanation: "Diễn giải cho tài liệu số 4",
        employee: "Người 4",
        updateDate: "04/07/2024",
    },
    {
        id: "5",
        symbol: "MNO345",
        name: "Tài liệu số 5",
        explanation: "Diễn giải cho tài liệu số 5",
        employee: "Người 5",
        updateDate: "05/07/2024",
    },
    {
        id: "6",
        symbol: "PQR678",
        name: "Tài liệu số 6",
        explanation: "Diễn giải cho tài liệu số 6",
        employee: "Người 6",
        updateDate: "06/07/2024",
    },
    {
        id: "7",
        symbol: "STU901",
        name: "Tài liệu số 7",
        explanation: "Diễn giải cho tài liệu số 7",
        employee: "Người 7",
        updateDate: "07/07/2024",
    },
    {
        id: "8",
        symbol: "VWX234",
        name: "Tài liệu số 8",
        explanation: "Diễn giải cho tài liệu số 8",
        employee: "Người 8",
        updateDate: "08/07/2024",
    },
    {
        id: "9",
        symbol: "YZA567",
        name: "Tài liệu số 9",
        explanation: "Diễn giải cho tài liệu số 9",
        employee: "Người 9",
        updateDate: "09/07/2024",
    },
    {
        id: "10",
        symbol: "BCD890",
        name: "Tài liệu số 10",
        explanation: "Diễn giải cho tài liệu số 10",
        employee: "Người 10",
        updateDate: "10/07/2024",
    },
];
const promotionData = [
    {
        stt: 1,
        programName: "Summer Promotion",
        fromDate: "2024-07-01",
        toDate: "2024-07-31",
        rate: 0.15,
        cash: 5000000,
        createdBy: "John Doe",
        createdDate: "2024-06-15",
        updatedBy: "Jane Smith",
        updatedDate: "2024-07-02",
    },
    {
        stt: 2,
        programName: "Year-end Sale",
        fromDate: "2024-11-15",
        toDate: "2024-12-31",
        rate: 0.12,
        cash: 8000000,
        createdBy: "Alice Johnson",
        createdDate: "2024-09-20",
        updatedBy: "Bob Brown",
        updatedDate: "2024-12-10",
    },
    {
        stt: 3,
        programName: "Spring Clearance",
        fromDate: "2024-03-01",
        toDate: "2024-03-15",
        rate: 0.1,
        cash: 3000000,
        createdBy: "Emily Davis",
        createdDate: "2024-02-15",
        updatedBy: "David Wilson",
        updatedDate: "2024-03-10",
    },
    {
        stt: 4,
        programName: "Black Friday",
        fromDate: "2024-11-25",
        toDate: "2024-11-30",
        rate: 0.18,
        cash: 7000000,
        createdBy: "Michael Lee",
        createdDate: "2024-10-20",
        updatedBy: "Sarah Thompson",
        updatedDate: "2024-11-28",
    },
    {
        stt: 5,
        programName: "Back to School",
        fromDate: "2024-08-01",
        toDate: "2024-08-31",
        rate: 0.13,
        cash: 4500000,
        createdBy: "Sophia Clark",
        createdDate: "2024-07-15",
        updatedBy: "Oliver Anderson",
        updatedDate: "2024-08-25",
    },
    {
        stt: 6,
        programName: "Christmas Sale",
        fromDate: "2024-12-10",
        toDate: "2024-12-25",
        rate: 0.2,
        cash: 10000000,
        createdBy: "Emma Martinez",
        createdDate: "2024-11-20",
        updatedBy: "James White",
        updatedDate: "2024-12-20",
    },
    {
        stt: 7,
        programName: "Valentine's Day",
        fromDate: "2024-02-01",
        toDate: "2024-02-14",
        rate: 0.09,
        cash: 2500000,
        createdBy: "Liam Harris",
        createdDate: "2024-01-15",
        updatedBy: "Mia Garcia",
        updatedDate: "2024-02-10",
    },
    {
        stt: 8,
        programName: "Mid-Year Clearance",
        fromDate: "2024-06-01",
        toDate: "2024-06-30",
        rate: 0.11,
        cash: 3800000,
        createdBy: "Noah Wilson",
        createdDate: "2024-05-15",
        updatedBy: "Ava Moore",
        updatedDate: "2024-06-25",
    },
    {
        stt: 9,
        programName: "Easter Sale",
        fromDate: "2024-04-01",
        toDate: "2024-04-15",
        rate: 0.14,
        cash: 6000000,
        createdBy: "William Taylor",
        createdDate: "2024-03-20",
        updatedBy: "Isabella Robinson",
        updatedDate: "2024-04-10",
    },
    {
        stt: 10,
        programName: "Halloween Special",
        fromDate: "2024-10-20",
        toDate: "2024-10-31",
        rate: 0.16,
        cash: 5500000,
        createdBy: "Ethan Brown",
        createdDate: "2024-09-25",
        updatedBy: "Charlotte Martinez",
        updatedDate: "2024-10-28",
    },
];
const employeeData = [
    {
        id: 1,
        fullName: "John Doe",
        dob: "1990-05-15",
        address: "123 Street, City",
        createdDate: "2024-06-15",
    },
    {
        id: 2,
        fullName: "Alice Johnson",
        dob: "1985-10-20",
        address: "456 Avenue, Town",
        createdDate: "2024-09-20",
    },
    {
        id: 3,
        fullName: "Emily Davis",
        dob: "1992-02-28",
        address: "789 Road, Village",
        createdDate: "2024-02-15",
    },
    {
        id: 4,
        fullName: "Michael Lee",
        dob: "1988-08-12",
        address: "101 Main Street, Suburb",
        createdDate: "2024-10-20",
    },
    {
        id: 5,
        fullName: "Sophia Clark",
        dob: "1995-04-05",
        address: "222 Park Avenue, District",
        createdDate: "2024-07-15",
    },
];
const DetailProject = () => {
    const [detailProject, setDetailProject] = useState({});
    const [history, setHistory] = useState([]);
    const [paymentSchedule, setPaymentSchedule] = useState([]);
    const [policy, setPolicy] = useState([]);
    useEffect(() => {
        // Fetch project details
        // axios
        //     .get("/api/project/details")
        //     .then((response) => {
        //         setDetailProjectData(response.data);
        //     })
        //     .catch((error) => {
        //         message.error("Failed to fetch project details.");
        //     });
        setDetailProject(detailProjectData);
        // Fetch history data
        // axios
        //     .get("/api/project/history")
        //     .then((response) => {
        //         setHistoryData(response.data);
        //     })
        //     .catch((error) => {
        //         message.error("Failed to fetch history data.");
        //     });
        setHistory(historyData);
        // Fetch payment schedule data
        // axios
        // .get("/api/project/payment-schedule")
        // .then((response) => {
        //     setPaymentScheduleData(response.data);
        // })
        // .catch((error) => {
        //     message.error("Failed to fetch payment schedule data.");
        // });
        setPaymentSchedule(paymentScheduleData);
        setPolicy(policyData);
    }, []);
    return (
        <div className="p-4">
            <Tabs defaultActiveKey="1">
                <TabPane tab="General" key="1">
                    <General data={detailProject} />
                </TabPane>
                <TabPane tab="Lịch sử thực hiện" key="2">
                    <HistoryProject data={history} />
                </TabPane>
                <TabPane tab="Lịch thanh toán dự kiến" key="3">
                    <PaymentProject data={paymentSchedule} />
                </TabPane>
                <TabPane tab="Chính sách bán hàng" key="4">
                    <PolicyProject data={policy} />
                </TabPane>
                <TabPane tab="Biểu mẫu" key="5">
                    <TemplateProject data={templateData} />
                </TabPane>
                <TabPane tab="Tài liệu" key="6">
                    <DocumentProject data={documentData} />
                </TabPane>
                <TabPane tab="Khuyến mãi" key="7">
                    <PromotionProject data={promotionData} />
                </TabPane>
                <TabPane tab="Nhân viên quản lí" key="8">
                    <EmployeeProject data={employeeData} />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default DetailProject;
