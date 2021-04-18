import React from 'react';
import bgImg from '../../../images/HeaderImg.jpg'
import './Header.css'

const Header = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={bgImg} className="d-block w-100" alt=""/>
                    <div class="carousel-caption d-flex justify-content-center align-items-center flex-column">
                        <h2 style={{color:'black',fontWeight:'700'}}>Explore The World <br/>With TRAVEL GURU</h2>
                        <p>Travel is the only thing you buy that makes you richer</p>
                       <button className="btn btn-warning btn-lg mt-3">Visit Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;