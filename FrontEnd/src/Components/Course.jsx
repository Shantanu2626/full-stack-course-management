import axios from "axios";
import React from "react";
import baseUrl from "../API/bootApi";
import { toast } from "react-toastify";
import { useNavigate  } from 'react-router-dom';
import AddCourse from "./AddCourse";

function Course({ Course , update }) {

const deleteCourse = (id)=>{
   axios.delete(`${baseUrl}/courses/${id}`).then(
    (response)=>{
      toast.success("Course Deleted Succesfully")
      update(id);
    },
    (error)=>{
     toast.error("Something went wrong try again")
    }
   )
}

const navigate  = useNavigate();

 const handelUpdate = ()=>{
  navigate(`/add-course`)
 }
 
  return (
    <>
    <div className="w-full flex justify-center md:ml-20 mt-10">
       <div className="w-[70vw]  md:w-[35vw] h-48 mb-8 flex flex-col items-center rounded-md px-4 shadow-md shadow-zinc-500 bg-zinc-100">
          <div className="w-[100%] h-[80%]">
            <h1 className="text-2xl font-bold text-slate-700 text-center mt-4">{Course.courseName}</h1>
            <p className="text-lg tracking-tight font-medium text-slate-700 text-justify mt-2">{Course.courseDescription}</p>
          </div>
          <div className="w-[100%] h-[20%] flex justify-center py-[2px]">
            <button onClick={handelUpdate} className="mx-6 bg-blue-600 px-6 rounded-md text-white font-bold  text-sm text-center ">Update</button>
            <button onClick={()=>{deleteCourse(Course.id)}}  className="mx-6 bg-red-600 px-6  rounded-md text-white font-bold  text-sm text-center ">Delete</button>
          </div>
        </div>
        </div>
    </>
  );
}

export default Course;
