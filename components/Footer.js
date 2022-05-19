import React from 'react';
import footerBg from '../assets/img/footer-bg.png';
import footerLogo from '../assets/img/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerbg">
                <img src={footerBg} className="svg" alt="" />
            </div>
            <div className="footer-top pt-120 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img src={footerLogo} alt="" />
                                    </a>
                                </div>
                                <p>
                                    Sous les étoiles 974 est une application développée
                                    par{' '}
                                    <a
                                        href="https://www.facebook.com/Margouillapp"
                                        target="blank"
                                    >
                                        Margouill'App
                                    </a>
                                    .
                                </p>

                                <div className="footer-social-area">
                                    <ul className="social-icons social-icons-light nav">
                                        <li>
                                            <a
                                                href="https://www.facebook.com/Margouillapp"
                                                target="blank"
                                            >
                                                <i className="fa fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.linkedin.com/in/s%C3%A9bastien-pierrejean/"
                                                target="blank"
                                            >
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="widget-header">
                                    <h5>Contact</h5>
                                </div>

                                <div className="widget-body">
                                    <ul className="address-list">
                                        <li>
                                            <span>
                                                <i className="fa  fa-phone-square"></i>
                                            </span>
                                            0693 21 44 85
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa  fa-envelope"></i>
                                            </span>
                                            pj.sebastien@gmail.com
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa  fa-map"></i>
                                            </span>
                                            97410 Saint Pierre
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="widget-header">
                                    <h5>Liens</h5>
                                </div>
                            </div>

                            <div className="widget-body">
                                <div className="extra-link">
                                    <div className="link-left">
                                        <ul>
                                            <li>
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.margouillapp.souslesetoiles"
                                                    target="blank"
                                                >
                                                    Télécharger l'app
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="http://margouillapp.fr/"
                                                    target="blank"
                                                >
                                                    Margouill'App Portfolio
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">Play store (Margouill'App)</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="widget-body">
                                    <div className="twetter-post-inner">
                                        <div className="footer-post-details">
                                            @Découvrez toutes les autres applications du
                                            développeur de Sous les étoiles 974 sur
                                            <br />
                                            <a
                                                href="https://www.facebook.com/Margouillapp"
                                                target="blank"
                                            >
                                                Margouill'App
                                            </a>
                                        </div>
                                        <div className="twetter-post">
                                            <span>
                                                <i className="fa fa-facebook"></i>
                                            </span>
                                            Sous les étoiles 974
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-text text-center">
                    <p>
                        © copyright 2022 by{' '}
                        <a href="https://www.facebook.com/Margouillapp" target="blank">
                            Margouill'App
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
