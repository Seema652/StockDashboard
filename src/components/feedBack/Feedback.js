import React, { useState } from "react";
import { Tabs, Row, Col, Button } from "antd";
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'; 
import Petpooja from "./Petpoojafeedback";
import Rating from "./Ratings";
import Complaint from "./Complaints";

const Feedback = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_2: "CRM",
        title_3: "Feedback"
    };

    const [index, setIndex] = useState(1);
    const handleTabChange = (key) => {
        setIndex(key);
        console.log("Selected Tab:", key);
    };

    const handleExportExcel = () => {
        console.log("Exporting Excel");
    };

    const handleCustomerWise = () => {
        console.log("Customer Wise Filter");
    };

    const handleFeedbackWise = () => {
        console.log("Feedback Wise Filter");
    };

    const tabItems = [
        {
            key: '1',
            label: 'Petpooja Feedback',
            children: <Petpooja />
        },
        {
            key: '2',
            label: 'Rating',
            children: <Rating />
        },
        {
            key: '3',
            label: 'Complaint',
            children: <Complaint />
        }
    ];

    return (
        <div className="feedback-container">
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="content-wrapper" style={{ padding: "20px" }}>
                <div className="feedback-card" style={{ 
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                    padding: "20px", 
                    borderRadius: "8px" 
                }}>
                  {index == 1 &&   <Row justify="space-between" align="middle" style={{ marginBottom: "20px" }}>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <div style={{ marginRight: '10px' }}>
                                    <span>Total No of Feedback: 3</span>
                                </div>
                                <Button onClick={handleExportExcel} type="primary">
                                    Export Excel
                                </Button>
                            </div>
                        </Col>
                    </Row>
}
                    <div className="tabs-container" style={{ marginTop: "20px" }}>
                        <Tabs 
                            defaultActiveKey="1" 
                            items={tabItems} 
                            onChange={handleTabChange} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
