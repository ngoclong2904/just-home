import React, { useEffect, useState } from "react";
import { Card, Row, Col, Statistic, Spin, Button, Space } from "antd";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const mockData = {
    views: 7265,
    customersBuy: 3671,
    newCustomers: 156,
    newStaff: 2318,
    totalAmount: [
        { month: "Jan", thisYear: 1000, lastYear: 800 },
        { month: "Feb", thisYear: 1200, lastYear: 900 },
        { month: "Mar", thisYear: 1500, lastYear: 1100 },
        { month: "Apr", thisYear: 1800, lastYear: 1300 },
        { month: "May", thisYear: 2000, lastYear: 1500 },
        { month: "Jun", thisYear: 2300, lastYear: 1700 },
        { month: "Jul", thisYear: 2500, lastYear: 1900 },
    ],
    projects: [
        { name: "TPHCM", value: 1500 },
        { name: "Hà Nội", value: 2800 },
        { name: "BRVT", value: 2000 },
        { name: "Cà Mau", value: 800 },
        { name: "Đà Nẵng", value: 1000 },
        { name: "Long An", value: 600 },
    ],
    products: [
        { name: "Phòng A1.13", value: 38.6 },
        { name: "Phòng A3.04", value: 22.5 },
        { name: "Phòng A13.05", value: 30.8 },
        { name: "Phòng A16.02", value: 8.1 },
    ],
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const CustomLegend = ({ data }) => (
    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {data.map((entry, index) => (
            <li key={`item-${index}`} className="py-2">
                <span
                    style={{
                        color: COLORS[index % COLORS.length],
                        marginRight: 8,
                    }}
                >
                    ●
                </span>
                {entry.name} ({entry.value}%)
            </li>
        ))}
    </ul>
);

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("totalAmount");

    useEffect(() => {
        const getData = async () => {
            try {
                // call API
                // const apiData = await fetchData();
                // setData(apiData);
                setData(mockData);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch data:", error);
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return (
            <Spin
                size="large"
                className="flex justify-center items-center h-screen"
            />
        );
    }

    if (!data) {
        return <div>Error loading data</div>;
    }

    return (
        <div className="p-4">
            <Row gutter={16}>
                <Col span={6}>
                    <Card className="bg-[#E3F5FF]">
                        <Statistic
                            title="Views"
                            value={mockData.views}
                            precision={0}
                            valueStyle={{
                                color: "#3f8600",
                            }}
                            suffix="↑"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="bg-[#E5ECF6]">
                        <Statistic
                            title="Customers Buy"
                            value={mockData.customersBuy}
                            precision={2}
                            valueStyle={{ color: "#cf1322" }}
                            suffix="↓"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="bg-[#E3F5FF]">
                        <Statistic
                            title="New Customers"
                            value={mockData.newCustomers}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            suffix="↑"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="bg-[#E5ECF6]">
                        <Statistic
                            title="New Staff"
                            value={mockData.newStaff}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            suffix="↑"
                        />
                    </Card>
                </Col>
            </Row>
            <Card className="mt-4 bg-[#F7F9FB]">
                <Space>
                    <div className="mb-4 flex">
                        <Button
                            className={`border-none shadow-none bg-transparent font-semibold ${
                                activeTab === "totalAmount"
                                    ? "text-slate-900"
                                    : "text-slate-400"
                            }`}
                            onClick={() => setActiveTab("totalAmount")}
                        >
                            Total Amount
                        </Button>
                        <Button
                            className={`border-none shadow-none bg-transparent font-semibold ${
                                activeTab === "totalProjects"
                                    ? "text-slate-900"
                                    : "text-slate-400"
                            }`}
                            onClick={() => setActiveTab("totalProjects")}
                        >
                            Total Projects
                        </Button>
                        <Button
                            className={`border-none shadow-none bg-transparent font-semibold ${
                                activeTab === "operatingStatus"
                                    ? "text-slate-900"
                                    : "text-slate-400"
                            }`}
                            onClick={() => setActiveTab("operatingStatus")}
                        >
                            Operating Status
                        </Button>
                    </div>
                    <div className="mb-4 flex border-l">
                        <Button className="border-none shadow-none bg-transparent text-slate-400 font-semibold">
                            <span
                                style={{
                                    color: COLORS[0],
                                    marginRight: 8,
                                }}
                            >
                                ●
                            </span>
                            This year
                        </Button>
                        <Button className="border-none shadow-none bg-transparent text-slate-400 font-semibold">
                            <span
                                style={{
                                    color: COLORS[1],
                                    marginRight: 8,
                                }}
                            >
                                ●
                            </span>
                            Last year
                        </Button>
                    </div>
                </Space>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockData.totalAmount}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="thisYear"
                            stroke="#8884d8"
                        />
                        <Line
                            type="monotone"
                            dataKey="lastYear"
                            stroke="#82ca9d"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Card>
            <Row gutter={16} className="mt-4">
                <Col span={12}>
                    <Card className="bg-[#F7F9FB]">
                        <h3>Doanh số theo dự án</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={mockData.projects}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className="bg-[#F7F9FB]">
                        <h3>Doanh số theo sản phẩm</h3>
                        <Row>
                            <Col span={16}>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={data.products}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={100}
                                            fill="#8884d8"
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                        >
                                            {data.products.map(
                                                (entry, index) => (
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={
                                                            COLORS[
                                                                index %
                                                                    COLORS.length
                                                            ]
                                                        }
                                                    />
                                                )
                                            )}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Col>
                            <Col span={8} className="my-auto">
                                <CustomLegend data={data.products} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
