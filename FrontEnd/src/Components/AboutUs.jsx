import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden md:ml-28 md:mb-20">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            About Our Course Management System
          </h1>
          <p className="text-gray-700 mb-4">
            Our Course Management System (CMS) is designed to streamline the
            process of creating, managing, and delivering educational courses.
            Whether you are an instructor looking to share your knowledge or a
            student eager to learn, our platform offers a user-friendly
            experience.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Course Creation: Easily create and manage courses with multimedia
              content.
            </li>
            <li>
              User Management: Manage students and instructors with role-based
              access.
            </li>
            <li>
              Progress Tracking: Monitor student progress and performance.
            </li>
            <li>
              Responsive Design: Access the platform from any device, anywhere.
            </li>
            <li>
              Community Engagement: Foster discussions and interactions among
              students.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4">
            We aim to provide a flexible and efficient learning environment that
            caters to the needs of both educators and learners. Our system is
            built to adapt to the evolving landscape of education technology.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Get Involved
          </h2>
          <p className="text-gray-700">
            Join us on our journey to transform education. Whether you're an
            educator, a student, or an organization, we welcome your feedback
            and participation in making our Course Management System even
            better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
