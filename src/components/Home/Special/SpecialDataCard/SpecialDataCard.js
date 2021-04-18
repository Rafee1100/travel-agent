import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMoneyBillWave, faHeart,faGlobeAsia,faHandsHelping ,faCalendar } from '@fortawesome/free-solid-svg-icons';
import './SpecialDataCard.css'


const SpecialDataCard = (props) => {
    const { icon, criteria, description,color } = props.data;
    return (
        <Col md={4} className="d-md-flex justify-content-center align-items-center mb-3 text-sm-center text-md-left">
            <div className="m-4">
                <FontAwesomeIcon className="icon-style" style={{color:`${color}`}}  size="3x" icon={
                    icon === 'world' ? faGlobeAsia :icon === 'money' ? faMoneyBillWave :
                    icon === 'support' ?faHandsHelping  :icon === 'places' ? faCamera :
                    icon === 'booking' ? faCalendar :faHeart       
                } />
            </div>
            <div className="description">
                <h5>{criteria}</h5>
                <p className="text-justify">{description}</p>
            </div>
        </Col>
    );
};

export default SpecialDataCard;