import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TourCard from '../TourCard/TourCard';

const Tour = () => {
   const [tours, setTours] = useState([]);

   useEffect(() => {
      fetch('https://infinite-everglades-77889.herokuapp.com/tours')
         .then(res => res.json())
         .then(data => setTours(data))
   }, [tours._id])
   console.log(tours)
   return (
      <Container>
         <div className="text-center">
            <h6></h6>
            <h2 className="mt-5">Our Popular Tour Package</h2>
         </div>
         <Row>
            {
               tours.map(data => <TourCard data={data} />)
            }
         </Row>
      </Container>
   );
};

export default Tour;