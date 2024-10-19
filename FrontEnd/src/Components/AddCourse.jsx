import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import baseUrl from "../API/bootApi";

function AddCourse() {
  const [course, setCourse] = useState({
    id: '',
    courseName: '',
    courseDescription: '',
  });

  // Form handler for adding data
  const handleFunction = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!course.id || !course.courseName || !course.courseDescription) {
      toast.error("All fields are required!");
      return;
    }

    addCourseOnServer(course);
  };

  const addCourseOnServer = (data) => {
    axios.post(`${baseUrl}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("Course added successfully");
        // Optionally reset form fields
        setCourse({ id: '', courseName: '', courseDescription: '' });
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  return (
    <div className="flex items-center justify-center h-fit mt-12">
      <form
        onSubmit={handleFunction}
        className="bg-white shadow-md shadow-zinc-600 rounded px-8 py-6 max-w-lg w-full"
      >
        <h2 className="text-lg font-bold mb-6 text-center">Add Course</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            Course ID
          </label>
          <input
            type="text"
            id="id"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter ID"
            value={course.id}
            onChange={(e) => setCourse({ ...course, id: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Title"
            value={course.courseName}
            onChange={(e) => setCourse({ ...course, courseName: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Course Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Description"
            value={course.courseDescription}
            onChange={(e) => setCourse({ ...course, courseDescription: e.target.value })}
          />
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Course
          </button>
          <button
            type="reset"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCourse;
