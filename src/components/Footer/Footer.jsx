import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a href = "#" className="footer__navlink">WEAL Club, Inc.</a>
                        <p className="para__text">&copy; 2025 Weal Club All rights reserved. Designed by Team Weal</p>
                    </div>

                    <div className="footer__content--item">
                        <a href = "mailto:someone@gmail.com">weal@pes.edu</a>
                        <h4>+91 8076 427 750</h4>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">About</h3>
                        <ul className="footer__links">
                            <li><a href = "#">About</a></li>
                            <li><a href = "#">Testimonials</a></li>
                            <li><a href = "#">Team</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">News</h3>
                        <ul className="footer__links">
                            <li><a href = "#">Events</a></li>
                            <li><a href = "#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Social Links</h3>
                        <ul className="footer__links">
                            <li><a href = "#">Facebook</a></li>
                            <li><a href = "#">Twitter</a></li>
                            <li><a href = "#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;