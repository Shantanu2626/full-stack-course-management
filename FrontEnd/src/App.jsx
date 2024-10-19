import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Courses from "./Components/Courses";
import Home from "./Components/Home"; 
import AddCourse from "./Components/AddCourse";
import AboutUs from "./Components/AboutUs";
import { ToastContainer} from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer position="top-center" />
      <div className="h-screen bg-white flex flex-col">
        <header className="sticky top-0 p-4 bg-gray-200 shadow z-50">
          <h1 className="text-2xl font-bold text-center">
            Course Management System
          </h1>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <Nav />
          <div className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
      </div>
      </>
  );
}

export default App;
