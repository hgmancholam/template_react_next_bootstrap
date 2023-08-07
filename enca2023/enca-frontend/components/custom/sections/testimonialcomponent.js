/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/testimonial/1.jpg";
import img2 from "../../../assets/images/testimonial/2.jpg";
import img3 from "../../../assets/images/testimonial/3.jpg";

const TestimonialComponent = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Testimonios o equipo</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial3 spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Titulo testimonios</h2>
              <h6 className="subtitle">
                texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto
              </h6>
            </Col>
          </Row>
          <Row className="testi3 m-t-40 justify-content-center">
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras venene veliel
                    vestibulum.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img1} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Michelle Anderson</h6>
                      <div className="font-10">
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras venene veliel
                    vestibulum.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img2} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Mark mesty</h6>
                      <div className="font-10">
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras venene veliel
                    vestibulum.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img3} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Limpsy adam</h6>
                      <div className="font-10">
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TestimonialComponent;
