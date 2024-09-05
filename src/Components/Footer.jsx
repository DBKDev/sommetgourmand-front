import React from 'react';
import "../Styles/Footer.css"

const Footer = () => {
    return (
        <>
            <div className='footer-block'>
                <div className='footer-block-img'>
                    <img src={process.env.PUBLIC_URL + `/Assets/Logov.png`} />
                </div>
                <div className='footer-block-social'>
                    <div className='footer-block-social-num'>
                        <p>07-71-88-02-04</p>
                    </div>
                    <div className='footer-block-social-logo'>
                        <img src={process.env.PUBLIC_URL + `/Assets/telephoner.png`} />
                        <img src={process.env.PUBLIC_URL + `/Assets/instagram.png`} />
                        <img src={process.env.PUBLIC_URL + `/Assets/facebook.png`} />
                    </div>
                </div>
                <div className='footer-block-adresse'>
                    <p>12 Rue des Sommets</p>
                    <p>Chamonix-Mont-Blanc</p>
                    <p>Alpes françaises, 74400</p>
                </div>
            </div>

        </>
    );
}

export default Footer;