"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  }

  const handleQuestionAnswered = (index) => {
    if (!answeredQuestions.includes(index)) {
      setAnsweredQuestions([...answeredQuestions, index]);
    }
  }

  return (
    <div className='p-10 bg-gradient-to-br from-blue-200 to-blue-300 min-h-screen text-gray-800'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Questions */}
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          setActiveQuestionIndex={setActiveQuestionIndex}
          answeredQuestions={answeredQuestions}
          setAnsweredQuestions={setAnsweredQuestions}
        />

        {/* Video/ Audio Recording */}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
          onAnswerRecorded={handleQuestionAnswered}
        />
      </div>
      <div className='flex justify-end gap-6 mt-10'>
        {activeQuestionIndex > 0 &&
          <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>Previous Question</Button>}
        {activeQuestionIndex != mockInterviewQuestion?.length - 1 &&
          <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>Next Question</Button>}
        {activeQuestionIndex === mockInterviewQuestion?.length - 1 &&
          <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
            <Button>End Interview</Button>
          </Link>}
      </div>
    </div>
  )
}

export default StartInterview;
