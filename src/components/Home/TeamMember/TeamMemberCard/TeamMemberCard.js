import React from 'react';
import img from '../../../../images/callum.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './TeamMemberCard.css'


const TeamMemberCard = ({member}) => {
    return (
        <div className="col-md-4 text-center">
        <img className="img-fluid mb-3 img-member"  src={member.photo} alt=""/>
        <h4 className="text-warning">{member.name}</h4>
        <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {member.phone}</p>
    </div>
    );
};

export default TeamMemberCard;