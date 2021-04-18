import React from 'react';

const TestimonialInfo = (props) => {
    const {quote,name,from ,imageURL} = props.testimonial;
    return (
       <div className="col-md-4 card  review-style">
           <div className="card-body">
               <p className="card-text text-center">
                   {quote}
               </p>
           </div>
           <div className="card-footer d-flex align-items-center">
               <img src={imageURL} alt="" className="mx-3" width="60" style={{borderRadius:'50%'}}/>
               <div >
                   <h6 className="text-primary">{name}</h6>
                   <p className="m-0">{from}</p>
               </div>
           </div>
       </div>
    );
};

export default TestimonialInfo;