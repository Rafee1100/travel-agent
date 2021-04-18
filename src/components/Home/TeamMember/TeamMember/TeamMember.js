import React from 'react';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import person1 from '../../../../images/person1.jpg';
import person2 from '../../../../images/person2.jpg'
import person3 from '../../../../images/person3.jpg'

const members = [
    {
        name:'Glen Smith',
        phone: '+8801446789',
        photo: person1,
        mail: 'glen5@gmail.com'
    },
    {
        name:'Fardin Khan',
        phone: '+880144646568',
        photo: person2,
        mail: 'fardin0045@gmail.com'
    },
    {
        name:'Virat Kohli',
        phone: '+88014447868',
        photo: person3,
        mail: 'Kohli18@gmail.com'
    }
]


const TeamMember = () => {
    return (
        <section >
        <div className="container">
            <h4 className="text-center  text-primary mt-5 mb-4">Our Tour Guides</h4>
            <div className="row">
                {
                    members.map(member => <TeamMemberCard member={member}></TeamMemberCard>)
                }
            </div>
        </div>
    </section>
    );
};

export default TeamMember;