import React from 'react';
import { Card } from '@material-ui/core';
import Col from 'react-bootstrap/Col';


const Cards = ({product}) => (


  <Col xs={12} md={6} lg={4} key={product.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Header></Card.Header>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.content}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
)

export default Cards;