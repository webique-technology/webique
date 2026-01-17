import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const PriceAccordion = ({ data }) => {
  // Guard: if no data, render nothing
  if (!data || !data.length) return null;

  // First accordion open by default
  const [activeKey, setActiveKey] = useState(data[0].id);

  // Active image based on open accordion
  const activeImage =
    data.find((item) => item.id === activeKey)?.image || data[0].image;

  const handleSelect = (key) => {
    if (key !== null) {
      setActiveKey(Number(key)); // key comes as string
    }
  };

  return (
    <section className="image-accordion">
      <Container>
        <Row className="align-items-center">
          {/* LEFT — IMAGE */}




          <Col md={6} lg={6} sm={12} className='title-gap'>
          <h2>What You Get With Every Plan</h2>
            <p>The following features are common across all our plans. Every package includes responsive mobile-first design, SEO-optimized structure, secure coding practices, ongoing post-launch support, and clear, consistent communication.</p>
            <img
              src={activeImage}
              alt="Active Accordion"
              className="img-fluid image-accordion-img"
            />
          </Col>

          {/* RIGHT — ACCORDION */}
          <Col md={6}>
            <Accordion
              activeKey={String(activeKey)}
              onSelect={handleSelect}
              className="custom-accordion"
            >
              {data.map((item) => (
                <Accordion.Item
                  eventKey={String(item.id)}
                  key={item.id}
                >
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>
                    <p>{item.content}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PriceAccordion;
