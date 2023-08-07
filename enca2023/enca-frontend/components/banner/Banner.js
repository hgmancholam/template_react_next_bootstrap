import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Banner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">Titulo del primer banner</h1>
            <h4 className="subtitle font-light">
              este es el texto del primer banner
              <br /> Esta es la segunda linea del banner
            </h4>

            <Button
              to="/#coming"
              className="btn btn-md m-t-30 btn-danger-gradiant font-14"
            >
              Boton de ejemplo banner
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
