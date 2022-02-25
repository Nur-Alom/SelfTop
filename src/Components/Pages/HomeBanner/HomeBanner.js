import React from 'react';
import './HomeBanner.css';
import { Carousel } from 'react-bootstrap';
import logo from '../../Images/Garena-Free-Fire.jpg';
import logo2 from '../../Images/1011805-1010006-garena-new-pic.jpg';
import logo3 from '../../Images/ff.jpeg';
import logo4 from '../../Images/Call-of-Duty-Mobile.jpg';

const HomeBanner = () => {
    const headLine = 'সেলফটপ-এর সকল অনলাইন এবং অফলাইন কার্যক্রম চালু আছে। যেকোনো সমস্যা বা প্রশ্নের জন্য আমাদের হেল্পলাইন নম্বরে যোগাযোগ করুন ( সকাল ১০টা থেকে রাত ১২টা পর্যন্ত। ). / All online and offline activities of SelfTop are on. Contact our helpline number for any problems or questions (10am to 12pm).';


    return (
        <div style={{ padding: '0 5%' }}>
            <div className='banner-main'>
                <Carousel fade className='carousel'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={logo}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={logo2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={logo}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className='banner-side'>
                    <div className='banner-side1'> <img src={logo3} alt="" /></div>
                    <div className='banner-side2'> <img src={logo4} alt="" /></div>
                </div>
            </div>
            <br />
            <div className='bg-white pt-2 px-3 rounded-pill'>
                <marquee style={{ width: "100%", direction: "left" }} >
                    {headLine}
                </marquee>
            </div>
        </div>
    );
};

export default HomeBanner;