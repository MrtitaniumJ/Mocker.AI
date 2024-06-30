"use client"
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';

function QuestionsPage() {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    try {
      const fetchedInterviews = await db.select().from(MockInterview);

      const groupedData = fetchedInterviews.map(interview => {
        const interviewData = JSON.parse(interview.jsonMockResp);
        return {
          ...interview,
          questions: interviewData.map(q => ({
            question: q.question,
            correctAnswer: q.answer,
            userAnswer: q.userAnswer || null,
          })) || []
        };
      });

      setInterviews(groupedData);
    } catch (error) {
      console.error("Error fetching interviews:", error);
    }
  };

  return (
    <div className="p-10 bg-gradient-to-br from-blue-200 to-blue-300 min-h-screen">
      <h1 className="text-black text-5xl text-center mb-10">Interview Questions</h1>
      {interviews.length === 0 ? (
        <h2 className="font-bold text-xl text-gray-500 text-center">Loading...</h2>
      ) : (
        interviews.map((interview, index) => (
          <Collapsible key={index} className="mt-7 rounded-lg shadow-md">
            <CollapsibleTrigger className="p-3 bg-white text-gray-800 rounded-lg flex justify-between items-center my-2 text-left gap-7 w-full shadow-md">
              <div>
                <h2 className="font-bold text-3xl">{interview.jobPosition}</h2>
                <p className="text-lg text-gray-600">{interview.jobDesc}</p>
              </div>
              <ChevronsUpDown className="h-5 w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-gray-100 p-6 rounded-lg">
              <div className="space-y-4">
                {interview.questions.length > 0 ? (
                  interview.questions.map((question, qIndex) => (
                    <Collapsible key={qIndex} className="rounded-lg shadow-md">
                      <CollapsibleTrigger className="p-3 bg-blue-500 text-white rounded-lg flex justify-between items-center my-2 text-left gap-7 w-full shadow-md">
                        <span className="text-lg">{question.question}</span>
                        <ChevronsUpDown className="h-5 w-5" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-sm text-gray-700"><strong>Correct Answer:</strong><span className="block bg-green-100 p-2 rounded-lg text-green-900">{question.correctAnswer}</span></h2>
                        {question.userAnswer && (
                          <div className="mt-2">
                            <h2 className="text-sm text-gray-700"><strong>User Answer:</strong><span className="block bg-yellow-100 p-2 rounded-lg text-yellow-900">{question.userAnswer}</span></h2>
                          </div>
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                  ))
                ) : (
                  <h2 className="text-center text-gray-700">No questions available for this interview.</h2>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))
      )}
    </div>
  );
}

export default QuestionsPage;
