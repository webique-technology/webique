import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { AnimatedContent } from "./TextAnimation";

const FAQAccordionComp = ({ data = [], showImage = false }) => {
  if (!data.length) return null;

  const [activeKey, setActiveKey] = useState(0);

  const activeImage =
    showImage && data[activeKey]?.image ? data[activeKey].image : null;

  const handleSelect = (key) => {
    if (key !== null) setActiveKey(Number(key));
  };

  return (
    <section className="faq-accordion">
      <Container>
        <Row className="align-items-start">
          {/* LEFT IMAGE */}
          {showImage && (
            <Col md={6} className="mb-4 mb-md-0  title-gap text-left">
              <AnimatedContent
                distance={-120}
                direction="horizontal"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
              >
                <h2>What You Get With Every Plan</h2>
                <p>The following features are common across all our plans. Every package includes responsive mobile-first design, SEO-optimized structure, secure coding practices, ongoing post-launch support, and clear, consistent communication.</p>
                {activeImage && (
                  <img
                    src={activeImage}
                    alt={data[activeKey]?.title}
                    className="img-fluid faq-accordion-image"
                  />
                )}
              </AnimatedContent>
            </Col>
          )}

          {/* RIGHT ACCORDION */}
          <Col md={showImage ? 6 : 12}>
            <AnimatedContent
              distance={120}
              direction="horizontal"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <Accordion
                activeKey={String(activeKey)}
                onSelect={handleSelect}
                className="custom-accordion"
              >
                {data.map((item, index) => (
                  <Accordion.Item eventKey={String(index)} key={index}>
                    <Accordion.Header>{item.title}</Accordion.Header>

                    <Accordion.Body>
                      {/* Paragraph */}
                      {item.para && <p>{item.para}</p>}

                      {/* List Title */}
                      {item.listTitle && (
                        <p>
                          <strong>{item.listTitle}</strong>
                        </p>
                      )}

                      {/* UL / LI ONLY IF LIST EXISTS */}
                      {item.lists?.length > 0 && (
                        <ul>
                          {item.lists.map((li, i) => (
                            <li key={i}>{li}</li>
                          ))}
                        </ul>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </AnimatedContent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQAccordionComp;
