import React from 'react';

import { Alert, Container, Row, Col } from 'reactstrap';

const Notification = () => {
    return (
        <div>
            <div className="spacer" id="notification-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Notification</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <Alert color="success">
                            I am an alert and I can be dismissed!
                            </Alert>
                        <Alert color="danger">
                            I am an alert and I can be dismissed!
                            </Alert>
                        <Alert color="warning">
                            I am an alert and I can be dismissed!
                            </Alert>
                        <Alert color="info">
                            I am an alert and I can be dismissed!
                            </Alert>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Notification;
