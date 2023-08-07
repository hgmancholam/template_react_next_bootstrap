import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";

const ErrorPage = () => {
  return (
    <div className="static-slider-head">
      <Head>
        <title>404 - Page not Found</title>
        <meta
          name="description"
          content="La página que esta buscando no se encuentra. Regrese al home"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">Error 404</h1>
            <h4 className="subtitle font-light">
              La página que esta buscando no se ecuentra disponible.
              <br /> Por favor regrese al Home.
            </h4>
            <Link href="/">
              <Button className="btn btn-md m-t-30 btn-info-gradiant font-14">
                Volver al home
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;
