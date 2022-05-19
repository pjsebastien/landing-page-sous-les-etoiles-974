import React from 'react';
import NavLinks from './NavLinks';

const MobileMenu = () => {
    return (
        <div className="side-menu__block">
            <div className="side-menu__block-overlay custom-cursor__overlay">
                <div className="cursor"></div>
                <div className="cursor-follower"></div>
            </div>
            <div className="side-menu__block-inner ">
                <div className="side-menu__top justify-content-end">
                    <a href="#" className="side-menu__toggler side-menu__close-btn">
                        <i className="fa fa-times"></i>
                    </a>
                </div>

                <nav className="mobile-nav__container">
                    <NavLinks />
                </nav>
                <div className="side-menu__sep"></div>
                <div className="side-menu__content">
                    <p>
                        Avec Sous Les Etoiles 974, découvrez et partagez les plus beau
                        spots ou dormir en pleine nature à la Réunion.
                    </p>
                    <p>
                        <a href="mailto:pj.sebastien@gmail.com" target="blank">
                            pj.sebastien@gmail.com
                        </a>{' '}
                        <br />
                        <a href="https://www.facebook.com/Margouillapp" target="blank">
                            Margouill'App
                        </a>
                    </p>
                    <div className="side-menu__social">
                        <a href="https://www.facebook.com/Margouillapp">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
