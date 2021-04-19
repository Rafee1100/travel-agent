import React from 'react';
import Kuakata from '../../../images/kuakata.jpg'
import Sylhet from '../../../images/sylhet.jpg'
import rangamati from '../../../images/rangamati.jpg'
import sale from '../../../images/sale.png';
import InfoDscount from '../Discount/InfoDiscount'

const discountInfo=[
    {
        title:'Kuata tour',
        price: '270',
        disPrice:'200',
        photo: Kuakata
    },
    {
        title:'Sylhet-Srimangal',
        price: '200',
        disPrice:'150',
        photo: Sylhet
    },
    {
        title:'Rangamati',
        price: '230',
        disPrice:'180',
        photo: rangamati
    }
    
]

const Discount = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2>Today's Big Deal &nbsp; <img style={{height:'35px'}} src={sale} alt=""/></h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    discountInfo.map(info => <InfoDscount info={info}></InfoDscount> )
                }
            </div>
        </div>
        </section>
    );
};

export default Discount;