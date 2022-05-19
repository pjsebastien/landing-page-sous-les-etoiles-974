import React from 'react';
import Layout from '../components/Layout';
import HeaderTwo from '../components/HeaderTwo';
import MobileMenu from '../components/MobileMenu';
import BannerTwo from '../components/BannerTwo';
import CtaTwo from '../components/CtaTwo';
import CtaThree from '../components/CtaThree';
import Video from '../components/Video';
import AppShots from '../components/AppShots';
import Features from '../components/Features';
import CtaOne from '../components/CtaOne';
import Footer from '../components/Footer';

const HomePageTwo = () => {
    return (
        <Layout>
            <HeaderTwo />
            <MobileMenu />
            <BannerTwo />
            <Features />
            <CtaTwo />
            <CtaThree />
            <Video />
            <AppShots />
            <CtaOne />
            <Footer />
        </Layout>
    );
};

export default HomePageTwo;
