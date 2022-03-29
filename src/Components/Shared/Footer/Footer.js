import React from 'react';
import './Footer.css';
import logo from '../../../logo.png';

const Footer = () => {
   return (
      <div>
         <div className="footer m-0 ">
            <div className="py-3 mt-5">
               <div className="row m-0">
                  <div className="col-md-6 text-white p-3">
                     <img src={logo} alt="" />
                     <p className="py-3 px-5">
                        A good online course provides information such as
                        readings or lecture videos, but also involves
                        interactions between professor and students and between
                        students and students. Interactions between professor
                        and students may involve students receiving personalized
                        feedback, support and guidance..{' '}
                     </p>
                  </div>

                  <div className="col-md-6 text-white p-3">
                     <h2>Contacts</h2>
                     <h5>Call Now</h5>
                     <h6>0 (800) 716 95 25</h6>
                     <h5>Send Mail</h5>
                     <h6>wanderersTours@email.com</h6>
                     <h5>Visit Wanderers</h5>
                     <h6 className="">8500, E Street, Alabama, NY, 75030</h6>
                  </div>
               </div>
            </div>
            <div>
               <p className=" m-0 p-3">
                  Online-Courses © 2021. All rights reserved. Terms of use and
                  Privacy Policy
               </p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
