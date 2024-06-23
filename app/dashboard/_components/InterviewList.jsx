"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    user && GetInterviewList();
  }, [user])

  const GetInterviewList = async () => {
    const result = await db.select()
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(MockInterview.id));
    setInterviewList(result);
  }

  return (
    <div>
      <h2 className='font-medium text-2xl text-white mb-5'>Previous Mock Interviews</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {interviewList?.length > 0 ? interviewList.map((interview, index) => (
          <InterviewItemCard
            interview={interview}
            key={interview.id} />
        ))
          :
          [1, 2, 3, 4].map((item, index) => (
            <div key={index} className='h-[150px] w-full bg-gray-200 animate-pulse rounded-lg '>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default InterviewList
