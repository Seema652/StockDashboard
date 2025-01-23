import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Table, Container, Row, Col } from "react-bootstrap";
import ModalPop from "./module";

function Closingstock() {
  const [rawMaterial, setRawMaterial] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedDate, setSelectedDate] = useState("");
  const [stockStatus, setStockStatus] = useState("Daily");
  const [tableData, setTableData] = useState([
    {
      id: 1,
      isFavorite: false,
      category: "",
      rawMaterial: "Aloo Tikki Burger",
      existingStock: "40 Kg",
      currentStock: "",
      comments: "Comments",
    },
    {
      id: 2,
      isFavorite: false,
      category: "",
      rawMaterial: "Aloo",
      existingStock: "8000 GM",
      currentStockKg: "",
      currentStockPiece: "",
      comments: "Comments",
    },
    {
      id: 3,
      isFavorite: false,
      category: "Food",
      rawMaterial: "Badam",
      existingStock: "22 Kg, 30 Pieces",
      currentStockKg: "",
      currentStockPiece: "",
      comments: "Comments",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const handleInputChange = (e, id, field) => {
    const updatedTableData = tableData.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: e.target.value };
      }
      return item;
    });
    setTableData(updatedTableData);
  };

  const handleFavoriteClick = (id) => {
    const updatedTableData = tableData.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setTableData(updatedTableData);
  };


  const handleSave = () => {

    const isAnyStockFilled = tableData.some(
      (item) => item.currentStock || item.currentStockKg || item.currentStockPiece
    );
    
    if (isAnyStockFilled) {
      setShowModal(true); 
    }
  };

  const handleModalClose = () => {
    setShowModal(false); 
  };

  return (
    <Container fluid className="mt-4 px-2 px-md-4">
      <div className="bg-black p-2 d-flex flex-wrap justify-content-between align-items-center mb-3 rounded">
        <h4 className="text-light mb-0">Closing Stock</h4>
        <Button variant="primary" size="sm" className="me-1">
          Back
        </Button>
      </div>

      <div className="shadow p-2 p-md-3 rounded bg-white">
        <div className="d-flex flex-wrap justify-content-end gap-2 mb-3">
          <Button variant="danger" size="sm">
            + Add New Raw Material
          </Button>
          <Button variant="secondary" size="sm">
            Import
          </Button>
          <Button variant="secondary" size="sm">
            Export
          </Button>
        </div>

        <Form>
          <Row className="g-3 mb-4 align-items-end">
            <Col xs={12} sm={6} md={2}>
              <Form.Group controlId="nameInput">
                <Form.Label>Raw Material</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Raw Material"
                  value={rawMaterial}
                  onChange={(e) => setRawMaterial(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={2}>
              <Form.Group controlId="selectOption">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="food">Food</option>
                  <option value="beverage">Beverage</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={2}>
              <Form.Group controlId="dateInput">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={2}>
              <Form.Group controlId="selectStatus">
                <Form.Label>Closing Stock calculated on</Form.Label>
                <Form.Select
                  value={stockStatus}
                  onChange={(e) => setStockStatus(e.target.value)}
                >
                  <option value="Daily">Daily</option>
                  <option value="OutOfStock">Out of Stock</option>
                  <option value="Pending">Pending</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12} md={2} className="d-flex gap-2 align-items-end">
              <Button variant="primary" size="sm">
                Load
              </Button>
              <Button variant="info" size="sm">
                Show All
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="table-responsive">
          <Table bordered>
            <thead className="table-light">
              <tr>
                <th>Mark As Favorite</th>
                <th>Category</th>
                <th>Raw Material</th>
                <th>Existing Stock</th>
                <th>Current Stock</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td
                    style={{ textAlign: "center", cursor: "pointer" }}
                    onClick={() => handleFavoriteClick(item.id)}
                  >
                    {item.isFavorite ? "★" : "☆"}
                  </td>
                  <td>{item.category}</td>
                  <td>{item.rawMaterial}</td>
                  <td>{item.existingStock}</td>
                  <td>
                    {item.id === 1 ? (
                      <Form.Control
                        type="text"
                        placeholder="Current Stock / Kg"
                        value={item.currentStock}
                        onChange={(e) =>
                          handleInputChange(e, item.id, "currentStock")
                        }
                        style={{ width: "150px" }}
                      />
                    ) : (
                      <div className="d-flex flex-column flex-md-row align-items-md-center">
                        <Form.Control
                          type="text"
                          placeholder=" Current Stock / Kg"
                          value={item.currentStockKg}
                          onChange={(e) =>
                            handleInputChange(e, item.id, "currentStockKg")
                          }
                          style={{ width: "150px", marginRight: "10px" }}
                        />
                        <Form.Control
                          type="text"
                          placeholder=" Current / Pieces"
                          value={item.currentStockPiece}
                          onChange={(e) =>
                            handleInputChange(e, item.id, "currentStockPiece")
                          }
                          style={{ width: "120px" }}
                        />
                      </div>
                    )}
                  </td>
                  <td>{item.comments}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3 bg-danger bg-opacity-25 ">
          <span>Showing 1 to 36 of 36 records</span>
          <Button
            variant="danger"
            style={{
              color: "white",
              border: "1px solid #f5c2c7",
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>

    
      {showModal && <ModalPop handleClose={handleModalClose} />}
    </Container>
  );
}

export default Closingstock;