/* eslint-disable */
import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';

const Breadcrumbs = () => {
    return (
        <div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h1 className="title font-bold">Mapa de sitio</h1>
                            <h6 className="subtitle">Texto mapa de sitio texto mapa de sitio texto mapa de sitio texto mapa de sitio texto mapa de sitio texto mapa de sitio</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <Breadcrumb>
                            <BreadcrumbItem active>Home</BreadcrumbItem>
                        </Breadcrumb>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>Library</BreadcrumbItem>
                        </Breadcrumb>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                            <BreadcrumbItem active>Data</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Breadcrumbs;
