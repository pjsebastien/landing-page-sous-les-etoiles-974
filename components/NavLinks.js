import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const NavLinks = () => {
    return (
        <ul className="main-nav__navigation-box">
            <li className="dropdown">
                <Link href="/">
                    <a>Accueil</a>
                </Link>
            </li>
            <li>
                <ScrollLink
                    activeClass="current"
                    to="features"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Fonctionnalités
                </ScrollLink>
            </li>

            <li>
                <ScrollLink
                    activeClass="current"
                    to="app"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Captures d'écran
                </ScrollLink>
            </li>
        </ul>
    );
};

export default NavLinks;
