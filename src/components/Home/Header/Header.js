import React from 'react';
import './Header.css'
import bgImg from '../../../images/servicingHome.jpg'

const Header = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={bgImg} className="d-block w-100 bg-img" alt=""/>
                    <div class="carousel-caption d-flex justify-content-center align-items-center flex-column">
                        <h2 style={{color:'white',fontWeight:'700'}}>Your Smooth journey <br/> Our Responsibility</h2>
                        <p>Living in a Modern World</p>
                       <button className="btn btn-warning btn-lg mt-3">Visit Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;