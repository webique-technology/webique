import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const FAQAccordionComp = ({ data }) => {
  // one accordion open by default (first item)
  const [activeKey, setActiveKey] = useState("0");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <>
    
   


  
 
    <Accordion
      activeKey={activeKey}
      onSelect={handleSelect}
      className="custom-accordion"
    >
      {data.map((item, index) => (
        <Accordion.Item eventKey={String(index)} key={index}>
          <Accordion.Header>{item.question}</Accordion.Header>

          <Accordion.Body>
            {item.paragraph && <p>{item.paragraph}</p>}

            {item.list && (
              <>
                {item.listTitle && (
                  <p>
                    <b>{item.listTitle}</b>
                  </p>
                )}

                <ul>
                  {item.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              </>
            )}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>


    </>
  );
};

export default FAQAccordionComp;
