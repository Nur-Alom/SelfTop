import React from 'react';
import './Footer.css';
import logo from '../../Images/game.png';
import sslImg from '../../Images/ssl-commerce.1d268dce.png';
import playIcon from '../../Images/app-download.439edada.png';

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='footer'>
                <div className='first-div col-md-4'>
                    <div className='d-flex align-items-center'>
                        <img src={logo} alt="" />
                        <p style={{ margin: '0%', fontSize: '30px', padding: '0 0 0 1%', color: 'white', fontWeight: 'bold' }}>SELFTOP BD</p>
                    </div>
                    <div className='first-div-item mt-3'>
                        <i className="fa-solid fa-location-dot"></i>
                        <p className='mx-3'>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    </div>
                    <div className='first-div-item'>
                        <i className="fa-solid fa-envelope"></i>
                        <p className='mx-2'>Official: <a href="mailto:support@selften.com">support@selften.com</a></p>
                    </div>
                    <div className='first-div-item'>
                        <i className="fa-solid fa-phone"></i>
                        <p className='mx-2'>HelpLine: <a href="tel:01994605549">01994605549</a>, <a href="tel:01994607178">01994607178</a></p>
                    </div>
                    (Available : 10:00 AM to 12:00 PM)
                    <br />
                    <img style={{ width: '50%', marginTop: '5%' }} src={playIcon} alt="" />
                </div>
                <div className='second-div col-md-4'>
                    <div className='text-start text-white'>
                        <h3 className='mt-2 fw-bold'>ABOUT</h3>
                    </div>
                    <ul>
                        <li>About Us</li>
                        <li>Success</li>
                        <li>Refound Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <div className='social-links'>
                        <a target='_blank' href="https://www.facebook.com/selften"><i className="fa-brands fa-facebook"></i></a>
                        <a target='_blank' href="https://www.youtube.com/c/SefTenOfficial"><i className="fa-brands fa-youtube px-3"></i></a>
                        <a target='_blank' href="/"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div className='pt-3 text-start col-md-4'>
                    <img src={sslImg} alt="" />
                </div>
            </div>
            <hr style={{ color: 'white' }} />
            <div className='footer-last text-white py-3 mx-5'>
                <span style={{ color: '#b5b5b5' }}><p>© 2022 Selftop | All rights reserved</p></span>
                <span><p><span style={{ color: '#b5b5b5' }}>Developed by</span> Selftop</p></span>
            </div>
        </div>
    );
};

export default Footer;