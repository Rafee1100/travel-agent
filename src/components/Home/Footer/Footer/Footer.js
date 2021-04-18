import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    const overview = [
        { name: "Career", link: "/career" },
        { name: "Privacy Policy", link: "/policy" },
        { name: "Terms of Use", link: "/terms" },
        { name: "Creative Agency", link: "/global" }
    ]
    const information = [
        { name: 'Press Center', link: '/press' },
        { name: "Travel News", link: "/news" },
        { name: "About Us", link: "/about" },
        { name: "Contact Us", link: "/contact" },
        { name: "Others", link: "/others" },
    ]
    const ourAddress = [
        { name: "New Eskaton,Dhaka-1200", link: "//google.com/map" },
        { name: "Kuddus Ali", link: "//google.com/map" },

    ]

    const recentTours = [
        { name: 'Sundarbans', link: '/sundarbans' },
        { name: "Sajek", link: "/sajek" },
        { name: "Saint Martin", link: "/saint" },
        { name: "Switzerland", link: "/potenga" },
        { name: "Bali", link: "/jaflong" },
    ]
    return (
        <footer className="footer-area">
            <div className="container pt-1">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="Tours" menuItems={recentTours} />
                    <FooterCol key={2} menuTitle="Overview" menuItems={overview} />
                    <FooterCol key={3} menuTitle="Information" menuItems={information} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <div>
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" size="2x" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon mx-2" size="2x" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon mx-2" size="2x" icon={faInstagram} /></a></li>
                        </div>
                        <div className="mt-2">
                            <h6 className="text-white">Query?</h6>
                            <button className="btn btn-success">+0177874468</button>
                        </div>
                    </FooterCol>
                </div>

                <div className="copyRight text-center text-white pb-2">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;