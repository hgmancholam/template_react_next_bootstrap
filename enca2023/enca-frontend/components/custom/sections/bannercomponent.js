/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/staticslider/slider/hero-banner.jpg";
const BannerComponent = () => {
  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              <span className="label label-rounded label-inverse">
                Creating Brands
              </span>
              <h1 className="title">Titulo componente Banner</h1>
              <h6 className="subtitle op-8">
                Texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto
                texto texto texto .
              </h6>
              <a
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>Span como boton</span>
              </a>
            </Col>
            <Col md="6">
              <Image src={herobanner} alt="herobanner"></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
