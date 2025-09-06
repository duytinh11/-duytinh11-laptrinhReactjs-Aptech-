import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";   // ✅ import Link

function Category() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = "https://dummyjson.com/products/category/" + slug; // ✅ đúng URL
    const rs = await fetch(url);
    const data = await rs.json();
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, [slug]);

  return (
    <div>
      <h1>Category Page: {slug}</h1>
      <Container>
        <Row>
          {products.map((e, i) => (
            <Col key={i} xs={3} className="mb-3">
              <Link
                to={`/product/${e.id}`}
              >
                <Card className="h-100">
                  <Card.Img src={e.thumbnail} />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>${e.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Category;
