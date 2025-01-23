import React, { useState } from "react";
import { Container, Button, Form, Row, Col, Table } from "react-bootstrap";
import { FaEdit, FaCopy, FaEye, FaTrashAlt } from "react-icons/fa";

function RecipeManage() {
  const [stockStatus, setStockStatus] = useState("Select Item");

  return (
    <Container fluid className="mt-4 px-2 px-md-4">
      <div className="bg-black p-2 d-flex flex-wrap justify-content-between align-items-center mb-3 rounded">
        <h4 className="text-light mb-0">Recipe Management</h4>
        <Button variant="primary" size="sm">
          Back
        </Button>
      </div>

      <div className="shadow p-2 p-md-3 rounded bg-white">
        <div className="d-flex flex-wrap justify-content-end gap-2 mb-3">
          <Button variant="danger" size="sm">
            + Add New Recipe
          </Button>
          <Button variant="secondary" size="sm">
            Quick Recipe
          </Button>
          <Button variant="secondary" size="sm">
            Area Recipe
          </Button>
          <Button variant="secondary" size="sm">
            Copy Recipe
          </Button>
          <Button variant="secondary" size="sm">
            Import Recipe
          </Button>
          <Button variant="secondary" size="sm">
            Export Excel
          </Button>
          <Button variant="secondary" size="sm">
            Delete Multiple Recipe
          </Button>
        </div>

        <Form>
          <Row className="g-3 mb-4 align-items-end">
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="selectStatus">
                <Form.Select
                  value={stockStatus}
                  onChange={(e) => setStockStatus(e.target.value)}
                >
                  <option value="Select Item">Select Item</option>
                  <option value="OutOfStock">Out of Stock</option>
                  <option value="Pending">Pending</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col
              xs={12}
              md={8}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="d-flex gap-2">
                <Button variant="primary" size="sm">
                  Search
                </Button>
                <Button variant="info" size="sm">
                  Show All
                </Button>
              </div>
              <Form.Check
                type="switch"
                id="auto-consumption"
                label="Auto consumption"
                className="ms-auto"
              />
            </Col>
          </Row>
        </Form>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Name</th>
              <th>Modified</th>
              <th>Created/Modified By</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>Budweiser</td>
              <td>
                <div>Created: 25-Jan-2024 14:58</div>
                <div>Modified: 26-Jan-2024 14:18</div>
              </td>
              <td>L&O-DelhiNTrivedi-Demo</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2">
                  <FaEdit className="text-primary" title="Edit" size={16} />
                  <FaCopy className="text-secondary" title="Copy" size={16} />
                  <FaEye className="text-success" title="View" size={16} />
                  <FaTrashAlt
                    className="text-danger"
                    title="Delete"
                    size={16}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>Aloo Tikka</td>
              <td>
                <div>Created: 24-Jan-2024 19:50:40</div>
                <div>Modified: 24-Jan-2024 19:50:40</div>
              </td>
              <td>L&O-DelhiNTrivedi-Demo</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2">
                  <FaEdit className="text-primary" title="Edit" size={16} />
                  <FaCopy className="text-secondary" title="Copy" size={16} />
                  <FaEye className="text-success" title="View" size={16} />
                  <FaTrashAlt
                    className="text-danger"
                    title="Delete"
                    size={16}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>Biryani Rice</td>
              <td>
                <div>Created: 24-Jan-2024 18:02:53</div>
                <div>Modified: 24-Jan-2024 18:02:53</div>
              </td>
              <td>L&O-DelhiNTrivedi-Demo</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2">
                  <FaEdit className="text-primary" title="Edit" size={16} />
                  <FaCopy className="text-secondary" title="Copy" size={16} />
                  <FaEye className="text-success" title="View" size={16} />
                  <FaTrashAlt
                    className="text-danger"
                    title="Delete"
                    size={16}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>Pohe</td>
              <td>
                <div>Created: 10-Jan-2024 18:47:25</div>
                <div>Modified: 10-Jan-2024 18:47:25</div>
              </td>
              <td>L&O-DelhiNTrivedi-Demo</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2">
                  <FaEdit className="text-primary" title="Edit" size={16} />
                  <FaCopy className="text-secondary" title="Copy" size={16} />
                  <FaEye className="text-success" title="View" size={16} />
                  <FaTrashAlt
                    className="text-danger"
                    title="Delete"
                    size={16}
                  />
                </div>
              </td>
            </tr>
          </tbody>
          
        </Table>
        <div className="d-flex justify-content-between align-items-center mt-3 bg-danger bg-opacity-25 ">
        <span>Showing 1 to 36 of 36 records</span>
        <Button
          variant="danger"
          style={{
            color: "white",
            border: "1px solid #f5c2c7",
          }}
        >
          Save
        </Button>
      </div>
      </div>
    
    </Container>
  );
}

export default RecipeManage;
