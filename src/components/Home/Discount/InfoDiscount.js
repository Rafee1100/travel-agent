import React from 'react';
import '../Discount/infoDiscount.css'

const InfoDiscount = ({info}) => {
    return (
        <div className="col-md-4 text-center cart">
            <img className="img-distCard" src={info.photo} alt="" />
            <h5 className="mt-3 mb-3">{info.title}</h5>
            <h6>Regular Price: ${info.price}</h6>
            <h6>Discount Price: ${info.disPrice}</h6>
        </div>
    );
};

export default InfoDiscount;