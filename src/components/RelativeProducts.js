import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';
import laptop1 from '../images/laptop1.jpg';

const products = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        image: laptop1,
        discountPrice: 120,
        originalPrice: 160,
        rating: 4,
        discount: 40,
    },
    {
        id: 2,
        name: 'Acer Nitro 5',
        image: laptop1,
        discountPrice: 950,
        originalPrice: 1200,
        rating: 5,
        discount: 35,
    },
    {
        id: 3,
        name: 'Razer Blade 15',
        image: laptop1,
        discountPrice: 2200,
        originalPrice: 2500,
        rating: 4,
        discount: 15,
    },
    {
        id: 4,
        name: 'Dell XPS 13',
        image: laptop1,
        discountPrice: 1000,
        originalPrice: 1200,
        rating: 5,
        discount: 20,
    },
];

function RelativeProducts() {
    return (
        <div>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
                        <Product
                            image={product.image}
                            name={product.name}
                            discountPrice={product.discountPrice}
                            originalPrice={product.originalPrice}
                            rating={product.rating}
                            discount={product.discount}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default RelativeProducts;