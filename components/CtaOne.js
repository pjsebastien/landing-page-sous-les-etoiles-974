import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CtaOne = () => {
    return (
        <section className="border-top pt-110 pb-150">
            <Container>
                <Row className="justify-content-center">
                    <Col md={12} lg={10}>
                        <div className="download-app-inner text-center">
                            <h2 className="h1">
                                Téléchargez l'Application &<br />
                                Et découvrez les lieux ou dormir en pleine nature.
                            </h2>
                            <h3>Disponible sur le Google Play Store</h3>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.margouillapp.souslesetoiles"
                                className="btn"
                            >
                                Télécharger l'App
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaOne;
