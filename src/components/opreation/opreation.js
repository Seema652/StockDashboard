import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaListAlt,
  FaShoppingCart,
  FaClipboardList,
  FaUsers,
  FaDollarSign,
  FaCreditCard,
  FaHandHoldingUsd,
  FaMoneyBillWave,
  FaBox,
  FaBell,
  FaChair,
  FaSyncAlt,
  FaQuestionCircle,
  FaThLarge,
  FaMoneyCheckAlt,
  FaLanguage,
  FaUserCircle,
  FaMoneyBillAlt,
  FaComment,
  FaBiking,
  FaTv,
  FaUtensils,
  FaFileInvoice,
  FaPercentage,
  FaDesktop,
  FaCog,
  FaEye,
  FaRedo,
  FaClipboard,
  FaPhone,
  FaEnvelope,
  FaSun,
} from "react-icons/fa";
import { Ellipsis } from "react-bootstrap/esm/PageItem";

const Operations = () => {
  const allCards = [
    { icon: <FaListAlt />, name: "Orders", link: "/order" },
    { icon: <FaShoppingCart />, name: "Online Orders", link: "" },
    { icon: <FaClipboardList />, name: "KOTS" },
    { icon: <FaUsers />, name: "Customers" },
    { icon: <FaDollarSign />, name: "Cash Flow" },
    { icon: <FaCreditCard />, name: "Expense", link: "/expenselist" },
    { icon: <FaHandHoldingUsd />, name: "Withdrawal" },
    { icon: <FaMoneyBillWave />, name: "Cash Top-Up" },
    { icon: <FaBox />, name: "Inventory", link: "/inventory" },
    { icon: <FaBell />, name: "Notification" },
    { icon: <FaChair />, name: "Table" },
    { icon: <FaSyncAlt />, name: "Manual Sync" },
    { icon: <FaQuestionCircle />, name: "Help" },
    { icon: <FaThLarge />, name: "Live View" },
    { icon: <FaMoneyCheckAlt />, name: "Due Payment" },
    { icon: <FaLanguage />, name: "Language Profiles",link:"/language" },
    { icon: <FaUserCircle />, name: "Billing User Profile" },
    { icon: <FaMoneyBillAlt />, name: "Currency Conversion" },
    { icon: <FaSun  />, name: "Day End",link:"/datasummary" },
    { icon: <FaComment />, name: "Feedback" },
    { icon: <FaBiking />, name: "Delivery Boys" },
    { icon: <FaTv />, name: "LED Display" },
  ];

  const section3Cards = [
    { icon: <FaUtensils />, name: "Menu",link:"/menuconfigration" },
    { icon: <FaFileInvoice />, name: "Bill / KOT Print" },
    { icon: <FaPercentage />, name: "Tax" },
    { icon: <FaDesktop />, name: "Discount" },
    { icon: <FaClipboard />, name: "Billing Screen" },
    { icon: <FaCog />, name: "Settings" },
    { icon: <FaShoppingCart />, name: "Online Order Configuration" },
    { icon: <FaEye />, name: "Menu Item On Off" },
    { icon: <FaRedo />, name: "Service Renewal" },
    { icon: <FaClipboardList />, name: "Customer Order Status" },
  ];

  const cardStyle = {
    width: "130px",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    margin: "5px",
  };

  return (
    <Container>
      <div className="text-left bg-black    align-items-center mb-3  text-light rounded-top">
        <h4 style={{ marginBottom: "5px" }}>Operations</h4>
      
        <p style={{ color: "white", marginTop: "0", marginBottom: "15px" }}>
          Version: 105.0.9
        </p>
      </div>
      <hr />

      <div className="contact-info d-flex justify-content-end align-items-center my-4">
        <FaPhone style={{ marginLeft: "10px" }} />
        <p className="mb-0" style={{ marginRight: "20px" }}>
          <strong>909876954</strong>
        </p>
        <FaEnvelope style={{ marginRight: "10px" }} />
        <p className="mb-0">
          <strong>support@gmail.com</strong>
        </p>
      </div>

      <Row className="d-flex justify-content-center">
        {allCards.map((card, index) => (
          <Col key={index} xs="auto" className="mb-3" style={{ padding: "0" }}>
            <Link to={card.link} className="text-decoration-none text-dark">
              <Card className="text-center" style={cardStyle}>
                <Card.Body>
                  <div className="icon mb-2" style={{ fontSize: "2.5rem" }}>
                    {card.icon}
                  </div>
                  <Card.Title style={{ fontSize: "0.8rem" }}>
                    {card.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      <h5 className="my-4">Set the Configuration for your Restaurant</h5>
      <hr />
      <Row className="d-flex justify-content-center">
        {section3Cards.map((card, index) => (
          <Col key={index} xs="auto" className="mb-3" style={{ padding: "0" }}>
               <Link to={card.link} className="text-decoration-none text-dark">
            <Card className="text-center" style={cardStyle}>
              <Card.Body>
                <div className="icon mb-2" style={{ fontSize: "2.5rem" }}>
                  {card.icon}
                </div>
                <Card.Title
                  style={{
                    fontSize: "0.8rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {card.name}
                </Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Operations;
