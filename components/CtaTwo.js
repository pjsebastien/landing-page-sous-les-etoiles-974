import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import img1 from '../assets/img/feature/mockupPost1.png';
import img2 from '../assets/img/icons/bivouacIcon.png';

const CtaTwo = () => {
    return (
        <section className="bg-2 pt-120 pb-120">
            <Container>
                <Row>
                    <Col lg={7} sm={7}>
                        <div className="user-interact-image">
                            <img src={img1} alt="" />
                        </div>
                    </Col>
                    <Col lg={5} sm={5}>
                        <div className="user-interact-inner">
                            <div className="interact-icon">
                                <img src={img2} className="svg" alt="" />
                            </div>
                            <h2>Les meilleurs spots pour dormir en pleine nature</h2>
                            <p>
                                Parmis 4 catégories, Bivouac, Camping, Gîte, ou
                                Hébergement insolite, vous trouverez dans Sous les étoiles
                                974 le spot que vous recherchiez pour dormir dans les plus
                                beaux endroits de la Réunion.
                            </p>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.margouillapp.souslesetoiles"
                                className="btn"
                            >
                                Commencez maintenant
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaTwo;
