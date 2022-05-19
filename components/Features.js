import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Autoplay]);

import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';

import img1 from '../assets/img/icons/bivouacIcon.png';
import img2 from '../assets/img/icons/camp.png';
import img3 from '../assets/img/icons/map.png';
import img4 from '../assets/img/icons/giteIcon.png';
import img5 from '../assets/img/icons/filtre.png';
import img6 from '../assets/img/icons/gpsIcon.png';
import img7 from '../assets/img/icons/activityIcon.png';
import img8 from '../assets/img/icons/ajouter.png';

const FEATURES_DATA = [
    {
        title: 'Les Meilleurs Spots de Bivouac',
        text: 'Touvez les meilleurs spots de bivouac de la Réunion.',
        image: img1,
    },
    {
        title: 'Les Bons Plans Camping',
        text: 'Pour un peu plus de confort, découvrez les meilleurs camping autor de vous.',
        image: img2,
    },
    {
        title: 'Carte Interactive en Ligne',
        text: 'Recherchez dans la liste ou bien sur la carte interactive.',
        image: img3,
    },
    {
        title: 'Gîtes et Logements Insolite',
        text: 'Pas envie de dormir dehors, optez pour les gîtes et logements insolites.',
        image: img4,
    },
    {
        title: 'Recherches Avancés des Spots',
        text: 'Filtrez vos recherches selons vos besoins avec nos outils de filtrage.',
        image: img5,
    },
    {
        title: 'Obtenez les Coordonnées GPS',
        text: "Depuis l'application, obtenez directement les coordonnées GPS pour vous rendre dans votre spot favori.",
        image: img6,
    },
    ,
    {
        title: 'Liste des services et activités',
        text: 'Chaque fiche de spot indique les services et activités proposés dans le lieu.',
        image: img7,
    },
    {
        title: 'Participez avec vos propres trouvailles',
        text: 'Lapplication est participative et vous pourrez partager vos trouvailles avec la communauté .',
        image: img8,
    },
];

const Features = () => {
    const swiperParams = {
        slidesPerView: 3,
        slidesPerGroup: 3,
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '#features-paginations',
            type: 'bullets',
            clickable: true,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
            },
            575: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerGroup: 2,
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            992: {
                slidesPerGroup: 3,
                slidesPerView: 3,
            },
        },
    };
    return (
        <section className="pb-110" id="features">
            <Container>
                <Row className="justify-content-center">
                    <Col md={12} lg={8}>
                        <SectionTitle
                            title="Fonctionnalités de l'Application "
                            text="L'application mobile Sous les étoiles 974 à été conçu pour répondre de manière intuitive et interractive au besoin de la communauté ."
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xl={10} lg={12}>
                        <Swiper className="feature-carousel" {...swiperParams}>
                            {FEATURES_DATA.map((feature, index) => (
                                <SwiperSlide key={`feature-post-${index}`}>
                                    <FeatureCard
                                        title={feature.title}
                                        text={feature.text}
                                        image={feature.image}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div
                            id="features-paginations"
                            className="swiper-pagination d-flex justify-content-center align-items-center"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
