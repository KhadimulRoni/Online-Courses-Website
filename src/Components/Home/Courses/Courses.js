import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
   const [courses, setCourses] = useState([]);

   useEffect(() => {
      fetch('courses.json')
         .then(res => res.json())
         .then(data => setCourses(data));
   }, []);

   return (
      <div className="courses-container row m-0">
         <h1 className="course pt-4">Our Available Courses</h1>
         {courses.map(course => (
            <Course className="col" key={course.id} course={course}></Course>
         ))}
      </div>
   );
};

export default Courses;
