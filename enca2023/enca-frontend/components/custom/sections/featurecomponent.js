/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/features/feature13/img1.jpg";
import img2 from "../../../assets/images/features/feature13/img2.jpg";
import img3 from "../../../assets/images/features/feature13/img3.jpg";
import img4 from "../../../assets/images/features/feature13/img4.jpg";
import img5 from "../../../assets/images/features/feature30/feature-img.jpg";

const FeatureComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Indicadores</h1>
              <h6 className="subtitle">
                Texto detalle indicadores Texto detalle indicadores Texto
                detalle indicadores Texto detalle indicadores Texto detalle
                indicadores Texto detalle indicadores
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-danger label-rounded">
                Indicador 1
              </span>
              <h2 className="title">Titulo indicador 1</h2>
              <h6 className="subtitle">
                Detalle indicador 1 Detalle indicador 1 Detalle indicador 1
                Detalle indicador 1 Detalle indicador 1 Detalle indicador 1
                Detalle indicador 1 Detalle indicador 1 Detalle indicador 1
                Detalle indicador 1
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Smart 1</h5>
                  <p className="m-t-20">
                    Smart 1 Smart 1 Smart 1 Smart 1 Smart 1 Smart 1 Smart 1
                    Smart 1 Smart 1 Smart 1 Smart 1 Smart 1 Smart 1 Smart 1
                    Smart 1 Smart 1 Smart 1 Smart 1 Smart 1 Smart 1 Smart 1
                    Smart 1 Smart 1 Smart 1
                  </p>
                  <a href="#" className="linking text-themecolor">
                    Ver mas<i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Smart 2</h5>
                  <p className="m-t-20">
                    Smart 2 Smart 2 Smart 2 Smart 2 Smart 2 Smart 2 Smart 2
                    Smart 2 Smart 2 Smart 2 Smart 2 Smart 2 Smart 2 Smart 2
                    Smart 2 Smart 2 Smart 2 Smart 2 Smart 2 Smart 2 Smart 2
                    Smart 2 Smart 2 Smart 2 Smart 2 Smart 2 Smart 2{" "}
                  </p>
                  <a className="linking text-themecolor" href="#">
                    Ver mas<i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-info label-rounded">
                Indicador 2
              </span>
              <h2 className="title">Titulo indicador 2</h2>
              <h6 className="subtitle">
                Detalle indicador 2 Detalle indicador 2 Detalle indicador 2
                Detalle indicador 2 Detalle indicador 2 Detalle indicador 2
                Detalle indicador 2 Detalle indicador 2 Detalle indicador 2
                Detalle indicador 2 Detalle indicador 2 Detalle indicador 2
                Detalle indicador 2 Detalle indicador 2 Detalle indicador 2
                Detalle indicador 2
              </h6>
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img1}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Smart 2-1</h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Ver mas<i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img2}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Smart 2-2</h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Ver mas <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img3}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Smart 2-3</h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Ver mas <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img4}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Smart 2-4</h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Ver mas <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="texto alt"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <span className="label label-info label-rounded">
                      Indicador 3
                    </span>
                    <h3 className="title">Titulo indicador 3</h3>
                    <p>
                      Detalle indicador 3 Detalle indicador 3 Detalle indicador
                      3 Detalle indicador 3 Detalle indicador 3 Detalle
                      indicador 3 Detalle indicador 3 Detalle indicador 3
                      Detalle indicador 3
                    </p>
                    <a
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                      href="#"
                    >
                      <span>
                        Ver mas <i className="ti-arrow-right"></i>
                      </span>
                    </a>
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

export default FeatureComponent;
