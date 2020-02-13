import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            Copyright &copy;
            &nbsp;
            <a href="http://www.young-london.org">Young London Today</a>
            &nbsp;&nbsp;
            {new Date().getFullYear()}
        </footer>
    )
}

export default Footer;