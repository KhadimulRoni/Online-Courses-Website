import React from 'react';
import './Banner.css';
import image from '../../../images/content.png';

const Banner = () => {
   return (
      <div className="banner row m-0">
         <div className=" col-lg-6">
            <h1 className="bannerText">Improve Your Skills With Us</h1>
         </div>

         <div className="col-lg-6">
            <img className="bannerImg p-5" src={image} alt="" />
         </div>
      </div>
   );
};

export default Banner;
