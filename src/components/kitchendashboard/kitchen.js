import React, { useState } from 'react';
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';


const KitchenDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('Bangla');
  const [orders, setOrders] = useState([]); 

  const categories = ['Bangla', 'Beverage', 'Chinese', 'Common', 'French', 'Indian', 'Italian', 'MAIN', 'Mexican'];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    setOrders([]); 
  };

  const refreshPage = () => {

    setOrders([]); 
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <ButtonGroup>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? 'success' : 'outline-success'}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mt-4 text-center">
        <Col>
          {orders.length === 0 ? (
            <div>
              <img
                src="https://via.placeholder.com/150" 
                alt="No Order"
                className="mb-3"
              />
              <h5>No Order Found!!!</h5>
            </div>
          ) : (
            <div>
       
            </div>
          )}
        </Col>
      </Row>
      <Row className="mt-4 text-center">
        <Col>
          <Button variant="primary" onClick={refreshPage}>
            Refresh Page
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default KitchenDashboard;
