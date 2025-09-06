import React from "react";
import { Container, Row, Col, Card, Button, Form, InputGroup } from "react-bootstrap";

function Cart() {
  return (
    <Container className="mt-4">
      <h3 className="mb-4"> My Cart</h3>
      <Row>
        {/* Bên trái - danh sách sản phẩm */}
        <Col md={8}>
          <Card className="mb-3 p-3 shadow-sm">
            <Row>
              <Col md={3}>
                <img
                  src="../img/quan-ao-tuyen-anh-2024-trang-1.jpg"
                  alt="Plaid Shirt & Skirt"
                  className="img-fluid rounded"
                />
              </Col>
              <Col md={9}>
                <h5>Plaid Shirt & Buttoned Skirt Set</h5>
                <p className="mb-1">Color: OLIVE/MULTI</p>
                <p className="mb-1">Size: S</p>
                <p className="text-success">In Stock</p>
                <Row className="align-items-center">
                  <Col md={3}>Each: <strong>$39.99</strong></Col>
                  <Col md={3}>
                    <Form.Select defaultValue="1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Form.Select>
                  </Col>
                  <Col md={3}>Total: <strong>$39.99</strong></Col>
                </Row>
                <div className="mt-2">
                  <Button variant="link" size="sm">Edit</Button>
                  <Button variant="link" size="sm">Remove</Button>
                  <Button variant="link" size="sm">Move to Wishlist</Button>
                  <Button variant="link" size="sm">Save for Later</Button>
                </div>
              </Col>
            </Row>
          </Card>
          <div className="d-flex justify-content-between">
            <span>1 Items</span>
            <span><strong>$39.99</strong></span>
          </div>
        </Col>

        {/* Bên phải - Tổng tiền */}
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <InputGroup className="mb-3">
              <Form.Control placeholder="Promo Code" />
              <Button variant="dark">Submit</Button>
            </InputGroup>
            <Row className="mb-2">
              <Col>Shipping cost</Col>
              <Col className="text-end">TBD</Col>
            </Row>
            <Row className="mb-2">
              <Col>Discount</Col>
              <Col className="text-end">-$0</Col>
            </Row>
            <Row className="mb-2">
              <Col>Tax</Col>
              <Col className="text-end">TBD</Col>
            </Row>
            <hr />
            <Row className="mb-2">
              <Col><strong>Estimated Total</strong></Col>
              <Col className="text-end"><strong>$39.99</strong></Col>
            </Row>
            <p className="text-muted">
              or 4 interest-free payments of $10.00 with <span className="text-success">Afterpay</span>
            </p>
            <p className="text-danger small">You’re $10.01 away from free shipping!</p>
            <Button variant="warning" className="w-100">
              <strong>Checkout</strong>
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
