"use client"
import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function QuestionsSection({
  mockInterviewQuestion = [],
  activeQuestionIndex = 0,
  setActiveQuestionIndex = () => {},
  answeredQuestions = [],
  setAnsweredQuestions = () => {}
}) {
  const [visitedQuestions, setVisitedQuestions] = useState([]);

  useEffect(() => {
    if (activeQuestionIndex !== null && !visitedQuestions.includes(activeQuestionIndex)) {
      setVisitedQuestions([...visitedQuestions, activeQuestionIndex]);
    }
  }, [activeQuestionIndex]);

  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your browser does not support text to speech');
    }
  };

  const handleQuestionClick = (index) => {
    setActiveQuestionIndex(index);
  };

  return mockInterviewQuestion.length > 0 && (
    <div className='p-6 bg-white shadow-lg rounded-lg'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {mockInterviewQuestion.map((question, index) => (
          <h2
            key={index}
            onClick={() => handleQuestionClick(index)}
            className={`p-2 border rounded-full text-xs md:text-sm text-center cursor-pointer
              ${activeQuestionIndex === index ? 'bg-blue-500 text-white' : 
                answeredQuestions.includes(index) ? 'bg-green-500 text-white' : 
                visitedQuestions.includes(index) ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>
      <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
      <Volume2 className='cursor-pointer' onClick={() => textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)} />
      
      {/* Next Public Question Note Section */}
      <div className='border rounded-lg p-5 bg-blue-100 mt-10'>
        <h2 className='flex gap-2 items-center text-blue-700'>
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <h2 className='text-sm text-blue-700 my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
      </div>
    </div>
  );
}

export default QuestionsSection;
