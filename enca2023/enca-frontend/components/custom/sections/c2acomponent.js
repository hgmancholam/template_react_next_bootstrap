/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/features/feature48/app-store.png";
import img2 from "../../../assets/images/features/feature48/play-store.png";

const C2aComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Componente Call to Action 2</h1>
              <h6 className="subtitle">
                Text text text text text text text text text text text text text 
                text text text text text text text text text text text text 
                text text text text text .
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mini-spacer bg-info text-white c2a7">
        <Container>
          <div className="d-flex">
            <div className="display-7 align-self-center">
              Texto 2 texto 2  texto 2 texto 2 texto 2 texto 2 texto 2 
            </div>
            <div className="ml-auto m-t-10 m-b-10">
              <button className="btn btn-outline-light btn-md">
                Pregunta, tecto 3
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div className="spacer feature42 bg-danger-gradiant">
        <Container>
          <Row className="justify-content-center wrap-feature49-box">
            <Col lg="7" md="10" className="text-center">
              <h2 className="title text-white">
                Lead a descarga aplicación
              </h2>
              <h6 className="subtitle text-white op-7 m-b-20">
                Texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 
                texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 
                texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 
                texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 .
              </h6>
              <a href="#" className="m-b-20">
                <Image src={img1} alt="img" />
              </a>
              <a href="#" className="m-b-20">
                <Image src={img2} alt="img" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default C2aComponent;
