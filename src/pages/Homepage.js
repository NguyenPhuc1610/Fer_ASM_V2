import React, { useState } from "react";
import FlashSales from "../components/FlashSales";
import BestSelling from "../components/BestSelling";
import Timer from "../components/Timer";
import Categories from "../components/Categories";
import { Col, Container, Row, Button } from "react-bootstrap";
import banner from "../images/banner.webp";

const Homepage = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    console.log("Homepage showAll:", !showAll);
  };

  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
    console.log("Homepage showAllProducts:", !showAllProducts);
  };

  return (
    <div>
      <Container className="mt-5">
        {/* Hero Section */}
        <Row className="mb-5">
          <Col md={3} className="border-end">
            <Categories />
          </Col>
          <Col md={9}>
            <img
              src={banner}
              alt="Laptop Banner"
              className="w-100 mb-6 ms-5"
            />
          </Col>
        </Row>

        {/* Flash Sales Section */}
        <Row>
          <h5 style={{ color: "red" }}> Today's</h5>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-bold mb-5 ms-0 mt-4">Flash Sales</h2>
          </Col>
          <Col md={8}>
            <Timer />
          </Col>
        </Row>
        
        {/* Flash Sales and Button */}
        <Row>
          <FlashSales showAll={showAll} />
        </Row>
        
        <Row className="mb-5">
          <Button
            variant="danger"
            style={{ width: "20%", margin: "auto" }}
            onClick={toggleShowAll}
          >
            {showAll ? 'Show Less' : 'View All Products'}
          </Button>
        </Row>

        <Row className="border-bottom "></Row>

        <Row className="mt-5">
          <h5 style={{ color: "red" }}> This Month</h5>
        </Row>
        
        {/* Best Selling Products */}
        <Row>
          <Col md={10}>
            <h2 className="text-2xl font-bold mb-6">
              Best Selling Products
            </h2>
          </Col>

          <Col md={2}>
            <Button 
              variant="danger" 
              style={{ width: "50%", margin: "auto" }} 
              onClick={toggleShowAllProducts}
            >
              {showAllProducts ? 'Show Less' : 'View All'}
            </Button>{' '}
          </Col>

          <BestSelling showAllProducts={showAllProducts} />
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;