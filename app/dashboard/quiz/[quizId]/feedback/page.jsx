"use client";
import { db } from '@/utils/db';
import { QuizAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ScoreDisplay from './_components/ScoreDisplay';

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [score, setScore] = useState(0);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select()
      .from(QuizAnswer)
      .where(eq(QuizAnswer.quizIdRef, params.quizId))
      .orderBy(QuizAnswer.id);

    if (result.length > 0) {
      const answers = result[0].answers;
      setFeedbackList(answers);

      //calculate score
      const correctAnswers = answers.filter(answer => answer.correctOption === answer.userAns).length;
      setScore((correctAnswers / answers.length) * 100);
    }
  };

  return (
    <div className='p-10 bg-gray-100 min-h-screen'>
      {feedbackList?.length === 0 ? (
        <h2 className='font-bold text-xl text-gray-500'>No Quiz Feedback Record Found</h2>
      ) : (
        <>
          <ScoreDisplay score={score} />

          {feedbackList && feedbackList.map((item, index) => (
            <Collapsible key={index} className='mt-7'>
              <CollapsibleTrigger className='p-3 bg-gradient-to-br from-white via-teal-50 to-teal-100 border border-gray-200 text-gray-800 rounded-lg flex justify-between items-center my-2 text-left gap-7 w-full shadow-md'>
                <span className='text-lg'>{item.question}</span>
                <ChevronsUpDown className='h-5 w-5' />
              </CollapsibleTrigger>
              <CollapsibleContent className='bg-white p-4 rounded-lg shadow-md'>
                <div className='flex flex-col gap-4'>
                  <h2 className='text-sm text-gray-700'><strong>Your Answer: </strong><span className={`block p-2 rounded-lg ${item.userAns === item.correctOption ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}>{item.userAns}</span></h2>
                  <h2 className='text-sm text-gray-700'><strong>Correct Answer: </strong><span className='block bg-green-100 p-2 rounded-lg text-green-900'>{item.correctOption}</span></h2>
                  <h2 className='text-sm text-gray-700'><strong>Feedback: </strong><span className='block bg-blue-100 p-2 rounded-lg text-blue-900'>{item.explanation}</span></h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}

      <div className='mt-10'>
        <Button onClick={() => router.replace('/dashboard')} className='bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700'>
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default Feedback;
