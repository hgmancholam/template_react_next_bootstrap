/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
const SpacerComponent = () => {
  return (
    <div className="spacer">
      <Container>
        <Row className="justify-content-center">
          <Col md="7" className="text-center">
            <h1 className="title font-bold">Componente Spacer</h1>
            <h6 className="subtitle">
              Texto texto texto texto texto texto texto texto texto texto texto
              texto texto texto texto texto texto texto texto texto texto texto
              .
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpacerComponent;
