// src/pages/Product.js
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  // Lấy chi tiết sản phẩm
  const getProduct = async () => {
    const url = "https://dummyjson.com/products/" + id;
    const rs = await fetch(url);
    const data = await rs.json();
    setProduct(data);

    // Sau khi có product thì fetch sản phẩm tương tự
    if (data.category) {
      const relatedUrl = "https://dummyjson.com/products/category/" + data.category;
      const rs2 = await fetch(relatedUrl);
      const data2 = await rs2.json();

      // bỏ sản phẩm hiện tại ra
      const filtered = data2.products.filter(p => p.id !== data.id);
      setRelated(filtered.slice(0, 4)); // lấy 4 sản phẩm tương tự
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={product.thumbnail}
              alt={product.title}
            />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p className="text-muted">{product.brand}</p>
          <h4 className="text-danger">${product.price}</h4>
          <p>{product.description}</p>
          <Button variant="primary">Thêm vào giỏ hàng</Button>
        </Col>
      </Row>

      {/* Gallery */}
      <Row className="mt-4">
        {product.images?.map((img, i) => (
          <Col key={i} xs={4} md={2} className="mb-3">
            <Card>
              <Card.Img src={img} alt={product.title + " " + i} />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Sản phẩm tương tự */}
      <h3 className="mt-5">Sản phẩm tương tự</h3>
      <Row>
        {related.map((item) => (
          <Col key={item.id} xs={6} md={3} className="mb-3">
            <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "1rem" }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-danger">${item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
