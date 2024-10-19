import React, { useEffect, useState } from "react";
import Course from "./Course";
import baseUrl from "../API/bootApi";
import axios from "axios";
import { toast } from 'react-toastify';
function Courses() {
  const [courses, setCourses] = useState([]);

  const handelServer = () => {
    axios.get(`${baseUrl}/courses`).then(
      (response) => {
        console.log(response.data);
        setCourses(response.data);
        toast.success("course has been Loaded");
      },
      (error) => {
        console.log(error);
        toast.error("Server down please try again")
      }
    );
  };

   const updateCourse = (id)=>{
     setCourses(courses.filter((c)=> c.id != id));
   }

  useEffect(() => {
    handelServer();
  }, []);

  return (
    <>
      <div className="w-full h-full">
        {courses.length > 0
          ? courses.map((item, index) => (
              <Course key={index}
               Course = {item}
               update = {updateCourse}
              />
            ))
          : <h1 className="text-4xl font-bold text-center mt-52">Course is not available add course first</h1>}
      </div>
    </>
  );
}

export default Courses;
