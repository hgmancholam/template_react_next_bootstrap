/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Dirección</h5>
            <p>Texto dirección ENCA</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Teléfonos</h5>
            <p>
              Telefono: +57 3165362887 <br />
              Whatsapp : +57 3165362887
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              Email :
              <Link href="#">
                <a className="link">hgmancholam@gmail.com</a>
              </Link>
              <br />
              Link :
              <Link href="https://www.enca.com">
                <a className="link">Enca.com</a>
              </Link>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <Link href="#">
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-google-plus"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  Todos los derechos reservados{" "}
                  <Link href="https://www.google.com">
                    <a className="link">ENCA.com</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">Terminos de uso</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Aviso Legal</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Política de privacidad de datos</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
