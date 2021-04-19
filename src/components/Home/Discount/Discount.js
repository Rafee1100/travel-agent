import React from 'react';
import Kuakata from '../../../images/kuakata.jpg'
import Sylhet from '../../../images/sylhet.jpg'
import rangamati from '../../../images/rangamati.jpg'
import sale from '../../../images/sale.png';
import InfoDiscount from '../Discount/InfoDiscount'
import {useSpring, animated} from 'react-spring'

const discountInfo=[
    {
        title:'Kuakata tour',
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
    const springProps = useSpring({
        to: async (next, cancel) => {
          await next({opacity: 1, color: 'red'})
          await next({opacity: 1, color: 'rgb(14,26,19)'})
        },
        from: {opacity: 0, color: 'Darkblue'}
      })
    return (
        <section className="services-container mt-5">
            <div className="text-center">
            <animated.div style={springProps}> <h2>Today's Big Deal &nbsp; <img style={{height:'35px'}} src={sale} alt=""/></h2></animated.div>
               
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    discountInfo.map(info => <InfoDiscount info={info}></InfoDiscount> )
                }
            </div>
        </div>
        </section>
    );
};

export default Discount;