import React from 'react';
import './NotFound.css';
import image from '../../images/404.jpg';

const NotFound = () => {
   return (
      <div className="error">
         <img src={image} alt="" />
      </div>
   );
};

export default NotFound;
