import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Lenin Ugalde | Copyright ⓒ {currentYear}</p>
        </footer>
    );
}

export default Footer;

