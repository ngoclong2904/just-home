import { Button, Card, Col, Row } from "antd";
import React from "react";

const General = ({ data }) => {
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Card className="border-none">
                    <h1 className="py-4 font-bold text-2xl">{data.name}</h1>
                    <div className="flex flex-col gap-2 my-4">
                        <p>
                            <strong>Tên dự án:</strong> {data.name}
                        </p>
                        <p>
                            <strong>Tên thương mại:</strong>{" "}
                            {data.commercialName}
                        </p>
                        <p>
                            <strong>Loại dự án:</strong> {data.type}
                        </p>
                        <p>
                            <strong>Địa chỉ:</strong> {data.address}
                        </p>
                        <p>
                            <strong>Số giấy phép/License No:</strong>{" "}
                            {data.licenseNumber}
                        </p>
                        <p>
                            <strong>Ngày cấp/Day of Issue:</strong>{" "}
                            {data.issueDate}
                        </p>
                        <p>
                            <strong>Diện tích KV/Campus area:</strong>{" "}
                            {data.area}
                        </p>
                    </div>
                    <Button
                        type="primary"
                        danger
                        onClick={() => window.history.back()}
                    >
                        Back
                    </Button>
                </Card>
            </Col>
            <Col span={12}>
                <Card className="border-none">
                    <img
                        src={data.imageUrl}
                        alt={data.name}
                        className="h-auto object-contain"
                    />
                </Card>
            </Col>
        </Row>
    );
};

export default General;
