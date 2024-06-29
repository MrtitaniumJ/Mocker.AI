"use client"
import { useRef } from "react";
import Header from "./dashboard/_components/Header";
import { FiUserPlus, FiSettings, FiPlayCircle, FiClipboard, FiCheckCircle, FiClock, FiThumbsUp } from 'react-icons/fi';
import Footer from "./dashboard/_components/Footer";

export default function Home() {
  const nextSectionRef = useRef(null);

  const scrollDown = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      {/* Hero section */}
      <section className="relative flex flex-col items-center justify-center flex-1 text-center p-8 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-20 max-w-4xl mx-auto text-shadow-lg">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-lg">
            Your AI Mock Interviewer
          </h1>
          <p className="text-2xl md:text-3xl mb-8 drop-shadow-lg">
            Enhance your interview skills and boost your chances of landing your dream job.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-16 justify-center">
            <a href="/dashboard" className="bg-white text-indigo-600 hover:bg-indigo-700 hover:text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Get Started
            </a>
            <a href="/dashboard/how-it-works" className="bg-transparent border border-white hover:bg-white hover:text-indigo-600 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Learn More
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          <button onClick={scrollDown} className="text-white bg-transparent hover:text-indigo-300 transition duration-300 ease-in-out">
            <svg className="w-10 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </section>

      {/* How it works section */}
      <section ref={nextSectionRef} className="bg-gray-100 text-gray-800 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-600">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FiUserPlus className="text-5xl text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Step 1: Sign Up</h3>
              <p className="text-center text-gray-600">Create your account and set up your profile to get started.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FiSettings className="text-5xl text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Step 2: Customize</h3>
              <p className="text-center text-gray-600">Choose your desired job role and customize the interview settings.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FiPlayCircle className="text-5xl text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Step 3: Practice</h3>
              <p className="text-center text-gray-600">Start practicing with AI-generated mock interviews tailored to your preferences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-600">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FiClipboard className="text-5xl text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Interview Topics</h3>
              <p className="text-gray-600">Cover a wide range of interview topics relevant to your field.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FiCheckCircle className="text-5xl text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Detailed Feedback</h3>
              <p className="text-gray-600">Receive detailed feedback on your interview performance.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FiClock className="text-5xl text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Time Management</h3>
              <p className="text-gray-600">Improve your time management skills during interviews.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FiThumbsUp className="text-5xl text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">User-friendly Interface</h3>
              <p className="text-gray-600">Enjoy a simple and intuitive user interface.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
