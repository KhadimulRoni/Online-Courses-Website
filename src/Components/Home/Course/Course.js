import React from 'react';
import './Course.css';

const Course = props => {
   const { course } = props;
   return (
      <div className="col-lg-4 p-5">
         <img className="courseImg" src={course.img} alt="" />
         <div className="p-2">
            <h2>{course.name}</h2>
            <h5>Duration: {course.duration}</h5>
            <h4>Course Price: {course.price}</h4>
         </div>
         <button type="button" class="btn btn-danger">
            Course Details
         </button>
      </div>
   );
};

export default Course;
