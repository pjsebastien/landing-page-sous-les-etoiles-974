import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import img1 from '../assets/img/icons/map.png';
import img2 from '../assets/img/feature/mockupMap.png';

const CtaThree = () => {
    return (
        <section className="pt-120 pb-120">
            <Container>
                <Row>
                    <Col lg={5} sm={5}>
                        <div className="user-interact-inner">
                            <div className="interact-icon">
                                <img src={img1} className="svg" alt="" />
                            </div>
                            <h2>Une carte interactive pour trouver les spots</h2>
                            <p>
                                Recherchez, triez, filtrez les spots avec la carte
                                interactive et la section de filtrage des données et
                                obtenez facilement les coordonnées GPS.
                            </p>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.margouillapp.souslesetoiles"
                                className="btn"
                            >
                                C'est parti
                            </a>
                        </div>
                    </Col>
                    <Col lg={7} sm={7}>
                        <div className="user-interact-image type2">
                            <img src={img2} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaThree;
