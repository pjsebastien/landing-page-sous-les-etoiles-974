import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Autoplay]);

import SectionTitle from './SectionTitle';

import img1 from '../assets/img/feature/mockup2.jpg';
import img2 from '../assets/img/feature/mockup1.jpg';
import img3 from '../assets/img/feature/mockup.jpg';
import img4 from '../assets/img/feature/mockup3.jpg';
import img5 from '../assets/img/feature/mockup5.jpg';
import img6 from '../assets/img/feature/mockup4.jpg';
import img7 from '../assets/img/feature/mockup6.jpg';
import img8 from '../assets/img/feature/mockup7.jpg';

const AppShots = () => {
    const swiperParams = {
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '#appshot-paginations',
            type: 'bullets',
            clickable: 'true',
        },
        slidesPerView: 5,
        // Responsive breakpoints
        breakpoints: {
            0: {
                slidesPerGroup: 2,
                slidesPerView: 2,
            },
            767: {
                slidesPerGroup: 3,
                slidesPerView: 3,
            },
            991: {
                slidesPerGroup: 2,
                slidesPerView: 3,
            },
            1499: {
                slidesPerGroup: 5,
                slidesPerView: 5,
            },
        },
    };
    return (
        <section className="pt-120 pb-155 app-shot-one" id="app">
            <Container>
                <Row className="justify-content-center">
                    <Col md={12} lg={8}>
                        <SectionTitle
                            title="Apperçu de l'App"
                            text="Voici un apperçu des différents écrans que vous retrouverez en téléchargeant l'application Sous Les Etoiles 974 sur le Google Play Store."
                        />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <div className="app-shot-one__carousel">
                    <Swiper className="app-carousel" {...swiperParams}>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img4} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img5} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img5} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img4} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img8} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img5} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img4} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img6} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-app-image">
                                <img src={img7} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div
                        id="appshot-paginations"
                        className="swiper-pagination d-flex justify-content-center align-items-center"
                    />
                </div>
            </Container>
        </section>
    );
};

export default AppShots;
