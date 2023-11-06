import React from "react";
import Logo from "./logo192.png";

const Footer = () => {
    return (
        <footer className="foot">
            <img src={Logo} alt=""/>
            <span>Made with <b>React.js</b>.</span>
        </footer>
    )
}

export default Footer;