import React from 'react';
import Header from '../../Shared/Header/Header';
import Courses from '../Courses/Courses';
import Banner from './Banner';

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Banner></Banner>
         <Courses></Courses>
      </div>
   );
};

export default Home;
