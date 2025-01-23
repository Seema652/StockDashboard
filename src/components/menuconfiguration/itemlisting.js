import React from "react";
import { Table, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const ItemListing = () => {
  
  const items = [
    { name: "Chana Chat/peanut Chat", code: "601", price: 150.0, favorite: false, stockStatus: "Do Not Track" },
    { name: "Mocktel", code: "12345 (1234)", price: 39.0, favorite: false, stockStatus: "Do Not Track" },
    { name: "Magic Rides", code: "505", price: 339.0, favorite: false, stockStatus: "Do Not Track" },
    { name: "Bada Box", code: "504", price: 479.0, favorite: false, stockStatus: "Do Not Track" },
    { name: "Couple Meal", code: "503", price: 419.0, favorite: false, stockStatus: "Do Not Track" },
    { name: "Kids Mela Meal", code: "502", price: 199.0, favorite: false, stockStatus: "Do Not Track" },
    { name: "Hiddy Hunger", code: "501", price: 199.0, favorite: false, stockStatus: "Do Not Track" },
    
  ];

  return (
    <div className="container mt-4">
 <div className="bg-black p-2 d-flex justify-content-between align-items-center mb-3 rounded-top">
  <h4 className="text-light">Item Listing</h4>
  <div className="d-flex gap-2">
    <Link to="/AddItem"  className="text-decoration-none">  
    <Button variant="danger">Add Item</Button>
    </Link>
    <Button variant="danger">Back</Button>
  </div>
</div>

      <div className="d-flex justify-content-between align-items-center my-3">
        <Form className="d-flex gap-2">
          <Form.Control type="text" placeholder="Name" />
          <Form.Control type="text" placeholder="Short Code" />
          <InputGroup>
            <Form.Select>
              <option>Sort By</option>
              <option>Name</option>
              <option>Price</option>
            </Form.Select>
          </InputGroup>
          <Button variant="danger">Reset</Button>
          <Button variant="primary">Search</Button>
        </Form>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Short Code</th>
            <th>
              Price{" "}
              <Button variant="link" size="sm">
                ⬆️⬇️
              </Button>
            </th>
            <th>Favorite</th>
            <th>Stock Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.code}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>
                <Form.Check type="checkbox" checked={item.favorite} />
              </td>
              <td>
                <Form.Select defaultValue={item.stockStatus}>
                  <option>Do Not Track</option>
                  <option>In Stock</option>
                  <option>Out of Stock</option>
                </Form.Select>
              </td>
              <td>
                <Button variant="link">Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ItemListing;
