import React from 'react';
import Discount from '../Discount/Discount';
import Footer from '../Footer/Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Special from '../Special/Special/Special';
import TeamMember from '../TeamMember/TeamMember/TeamMember';
import Testimonial from '../Testimonial/Testimonial/Testimonial';
import Tour from '../Tour/Tour/Tour';

const Home = () => {
    return (
        <>
            <NavBar/>
            <Header/>
            <Discount/>
            <Tour/>
            <Testimonial/>
            <TeamMember/>
            <Footer/>                     
        </>
    );
};

export default Home;