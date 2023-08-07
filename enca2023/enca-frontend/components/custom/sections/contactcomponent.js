import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const ContactComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Formulario de contacto</h1>
              <h6 className="subtitle">
                Subtitulo formulatio subtitulo formulario subtitulo formulario
                subtitulo formulario subtitulo formulario subtitulo formulario
                subtitulo formulario subtitulo formulario subtitulo formulario
                subtitulo formulario .
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Formulario de Contacto</h4>
                    <Form>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="Nombre" />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="Email" />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="text"
                              placeholder="Mensaje"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              Enviar <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-info">
                    <h2 className="text-white">Datos Contacto</h2>
                    <p className="text-white m-t-30 op-8">
                      316 536 2887
                      <br />hgmancholam@gmail.com
                    </p>
                    <p className="text-white op-8">
                      Direccion direccion direccion direccion.
                      <br /> direccion direccion direccion direccion 
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default ContactComponent;
