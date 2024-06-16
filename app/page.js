import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { FiUserPlus, FiSettings, FiPlayCircle, FiClipboard, FiCheckCircle, FiClock, FiThumbsUp } from 'react-icons/fi';

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white">
      <Header />
      <section className="flex flex-col items-center justify-center flex-1 text-center p-8">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Your Smart AI Mock Interviewer
        </h1>
        <p className="text-2xl mb-8">
          Double your chances of landing that job offer with our AI-powered interview prep.
        </p>
        <div className="flex space-x-4 mb-8">
          <a href="/dashboard" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white py-3 px-6 rounded-lg">Get Started</a>
          <a href="/" className="bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white py-3 px-6 rounded-lg">
            Learn More
          </a>
        </div>
      </section>
      <section className="bg-white text-gray-800 p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 text-indigo-600">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <FiUserPlus className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mt-4 mb-2 text-indigo-600">Step 1: Sign Up</h3>
              <p className="text-center">Create your account and set up your profile to get started.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <FiSettings className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mt-4 mb-2 text-indigo-600">Step 2: Customize</h3>
              <p className="text-center">Choose your desired job role and customize the interview settings.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <FiPlayCircle className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mt-4 mb-2 text-indigo-600">Step 3: Practice</h3>
              <p className="text-center">Start practicing with AI-generated mock interviews tailored to your preferences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-lg h-full">
                <FiClipboard className="text-4xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-indigo-600">Interview Topics</h3>
                <p className="text-gray-700">Cover a wide range of interview topics relevant to your field.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-lg h-full">
                <FiCheckCircle className="text-4xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-indigo-600">Detailed Feedback</h3>
                <p className="text-gray-700">Receive detailed feedback on your interview performance.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-lg h-full">
                <FiClock className="text-4xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-indigo-600">Time Management</h3>
                <p className="text-gray-700">Improve your time management skills during interviews.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-lg h-full">
                <FiThumbsUp className="text-4xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-indigo-600">User-friendly Interface</h3>
                <p className="text-gray-700">Enjoy a simple and intuitive user interface.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 bg-indigo-700 text-white">
        <p>© {currentYear} Mocker.AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
