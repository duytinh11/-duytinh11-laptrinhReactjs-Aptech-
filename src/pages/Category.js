import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Category() {
  const [products, setProducts] = useState([]);

  const getCategory = async () => {
    try {
      const url = `https://dummyjson.com/products?limit=20`;
      const rs = await fetch(url);
      const data = await rs.json();
      setProducts(data.products); // ✅ phải là data.products
    } catch (error) {
      console.error("Fetch products error:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Container>
      <h1>Sản phẩm</h1>
      <p>Danh sách sản phẩm.</p>
      <Row>
        {products.map((item) => (
          <Col key={item.id} md={4} className="mb-3" xs={12} lg={3}>
            <Card>
              <Card.Img variant="top" src={item.thumbnail} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <p>Price: ${item.price}</p>
                  <p>{item.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Category;
