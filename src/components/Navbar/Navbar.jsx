import React, {useState} from "react";
import images from "../../constants/images";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="container flex">
                <div className="brand__and__toggler flex">
                    <a href = "index.html" alt = "" className="navbar__brand">
                        <img src = {images.logo} alt = "site logo" />
                    </a>
                    <button type = "button" className="navbar__open--btn text__light" onClick={() => setToggleMenu(true)}>
                        <FaBars size = {26} />
                    </button>
                </div>

                <div className="navbar__collapse">
                    <ul className="navbar__nav">
                        <li className="nav__item">
                            <a href = "#home" className = "nav__link text__upper fw__6 text__light nav__active">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href = "#about" className = "nav__link text__upper fw_6 text__light">About</a>
                        </li>
                        <li className="nav__item">
                            <a href = "#event" className = "nav__link text__upper fw_6 text__light">Events</a>
                        </li>
                        <li className="nav__item">
                            <a href = "#team" className = "nav__link text__upper fw_6 text__light">Team</a>
                        </li>
                        <li className="nav__item">
                            <a href = "#register" className = "nav__link text__upper fw_6 text__light">Register</a>
                        </li>
                        
                    </ul>
                </div>

                {toggleMenu && (
                    <div className="navbar__smallscreen">
                        <button type = "button" className="navbar__close--btn text__light" onClick={() => setToggleMenu(false)}>
                            <FaTimes size = {32} />
                        </button>
                        <ul className="navbar__nav--smallscreen text__light">
                        <li className="nav__item">
                            <a href = "#home" className = "nav__link text__upper fw__6 text__light nav__active">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href = "#about" className = "nav__link text__upper fw_6 text__light">About</a>
                        </li>
                        <li className="nav__item">
                            <a href = "#event" className = "nav__link text__upper fw_6 text__light">Events</a>
                        </li>
                        <li className="nav__item">
                            <a href = "#team" className = "nav__link text__upper fw_6 text__light">Team</a>
                        </li>
                        <li className="nav__item">
                            <a href = "#register" className = "nav__link text__upper fw_6 text__light">Register</a>
                        </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;