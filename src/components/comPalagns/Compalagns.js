import React from "react";
import { Button, Tabs, Row, Col } from "antd";
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'; 
import CompaignComp from "./Compaign";
import Smsbalance from "./Smsbalance";
import Whatsappbalance from "./Whatsappbalance";

const Campaigns = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_2: "CRM",
        title_3: "Campaigns"
    };

    const onChange = (key) => {
        console.log("Selected Tab:", key);
    };

    const items = [
        {
            key: '1',
            label: 'Campaign',
            children: <CompaignComp/>
        },
        {
            key: '2', 
            label: 'SMS Balance',
            children: <Smsbalance/>
        },
        {
            key: '3',
            label: 'WhatsApp Balance',
            children: <Whatsappbalance/>
        }
    ];

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ padding: "20px" }}>
                <div style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "8px" }}>
                    <Row justify="space-between" align="middle">
                        <Col>
                            
                        </Col>
                        <Col>
                            <Button type="primary" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>Campaigns</Button>
                            <strong  style={{ margin: "0 10px" }}>SMS Balance:</strong> <span>0</span>
                            <span style={{ margin: "0 10px" }}></span> 
                            <strong>WhatsApp Balance:</strong> <span>0</span>
                        </Col>
                    </Row>

                    <div style={{ marginTop: "20px" }}>
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Campaigns;
