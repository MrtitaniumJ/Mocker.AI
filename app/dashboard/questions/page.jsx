// "use client"
// import React, { useState, useEffect } from 'react';
// import Header from '../_components/Header';
// import Footer from '../_components/Footer';
// import { db } from '@/utils/db';
// import { MockInterview, UserAnswer } from '@/utils/schema';
// import { cn } from '@/lib/utils';

// const Questions = () => {
//   const [questions, setQuestions] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       // Fetch distinct job positions from MockInterview table
//       const jobPositions = await db
//         .select('jobPosition')
//         .distinct()
//         .from(MockInterview);

//       // Fetch questions and correct answers for each job position
//       const questionsByCategory = await Promise.all(
//         jobPositions.map(async ({ jobPosition }) => {
//           const jobQuestions = await db
//             .select()
//             .from(MockInterview)
//             .where({ jobPosition });

//           const userAnswers = await db
//             .select()
//             .from(UserAnswer)
//             .whereIn('mockIdRef', jobQuestions.map(q => q.mockId));

//           const mergedQuestions = jobQuestions.map((question) => {
//             const userAnswer = userAnswers.find((answer) => answer.mockIdRef === question.mockId);
//             return {
//               ...question,
//               correctAnswer: userAnswer ? userAnswer.correctAns : 'No answer recorded',
//             };
//           });

//           return { category: jobPosition, questions: mergedQuestions };
//         })
//       );

//       setQuestions(questionsByCategory);
//     } catch (error) {
//       console.error('Error fetching questions:', error);
//       setError('Error fetching questions. Please try again later.');
//     }
//   };

//   const toggleCategory = (category) => {
//     setSelectedCategory(selectedCategory === category ? null : category);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <main className="flex-grow py-8">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Interview Questions</h1>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           {questions.map((categoryData, index) => (
//             <div key={index} className="mb-8">
//               <div
//                 className="cursor-pointer bg-white rounded-lg shadow-md p-4 flex items-center justify-between mb-4"
//                 onClick={() => toggleCategory(categoryData.category)}
//               >
//                 <h2 className="text-2xl font-semibold text-gray-800">{categoryData.category}</h2>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={cn('h-6 w-6', selectedCategory === categoryData.category && 'transform rotate-180')}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d={selectedCategory === categoryData.category ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
//                   />
//                 </svg>
//               </div>

//               {selectedCategory === categoryData.category && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {categoryData.questions.map((question) => (
//                     <div key={question.mockId} className="bg-white rounded-lg shadow-md p-4">
//                       <h3 className="text-xl font-semibold text-gray-800 mb-2">{question.jsonMockResp}</h3>
//                       <p className="text-gray-600 mb-4">{question.jobDesc}</p>
//                       <div className="border-t border-gray-200 pt-2">
//                         <p className="text-gray-700 font-semibold">Correct Answer:</p>
//                         <p className="text-gray-800">{question.correctAnswer}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Questions;
import React from 'react'

const questions = () => {
  return (
    <div className="flex items-center justify-center">
        <h1 className="text-black text-5xl">Interview Questions</h1>
    </div>
  )
}

export default questions