import React from 'react';
import { Container, Row } from 'react-bootstrap';
import datas from '../../../../Data/specialData'
import SpecialDataCard from '../SpecialDataCard/SpecialDataCard';

const Special = () => {
  return (
    <div className="my-5">
      <h1 style={{color:"black",fontWeight:'600'}} className="text-center mb-5">We care for</h1>
      <Container>
        <Row className="">
          {
            datas.map(data => <SpecialDataCard data={data} key={data.id} />)
          }
        </Row>
      </Container>
    </div>

  );
};

export default Special;