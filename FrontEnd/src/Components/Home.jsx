import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:ml-28">
      <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
        {/* Row 1: Image */}
        <div className="flex items-center justify-center bg-gray-300 mb-8">
          <img
            src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Courses"
            className="w-[58vw] h-64 object-cover rounded-lg shadow-lg" // Set width to 60%
          />
        </div>

        {/* Row 2: Course Content */}
        <div className="max-w-4xl mx-auto p-6 flex flex-col items-center text-center bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome to Our Course Management System
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our Course Management System (CMS) provides a robust platform for
            educators and learners alike. With an intuitive interface, our
            system facilitates the creation, management, and delivery of online
            courses. Whether you’re an instructor wanting to share your
            knowledge or a student eager to learn, our platform is designed to
            enhance the educational experience.
            <br />
            <br />
            Key features include:
            <ul className="list-disc list-inside mb-4 text-left">
              <li>
                <strong>Course Creation:</strong> Easily design and publish
                courses with multimedia content.
              </li>
              <li>
                <strong>User Management:</strong> Manage student and instructor
                profiles with customizable roles.
              </li>
              <li>
                <strong>Progress Tracking:</strong> Monitor student progress
                with detailed analytics.
              </li>
              <li>
                <strong>Interactive Learning:</strong> Foster engagement through
                discussion forums and quizzes.
              </li>
              <li>
                <strong>Responsive Design:</strong> Access our platform on any
                device, anytime, anywhere.
              </li>
            </ul>
            Join us today to unlock a world of opportunities and take your
            learning to the next level! We are committed to making education
            accessible, effective, and enjoyable for everyone.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
