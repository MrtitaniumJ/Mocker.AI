import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { MdOutlineDelete } from "react-icons/md";
import { eq } from 'drizzle-orm';

function InterviewItemCard({ interview, onDelete }) {
  const router = useRouter();

  const onStart = () => {
    router.push('/dashboard/interview/' + interview?.mockId)
  };

  const onFeedbackPress = () => {
    router.push('/dashboard/interview/' + interview.mockId + "/feedback")
  };

  const onDeleteClick = async () => {
    try {
      const deleteResult = await db.delete(MockInterview)
        .where(eq(MockInterview.mockId, interview.mockId))
        .execute();

      if (deleteResult) {
        onDelete(interview.id); // call the onDelete function passed as a prop
      } else {
        console.error('Failed to delete interview');
      }
    } catch (error) {
      console.error('Error deleting interview: ', error);
    }
  };

  return (
    <div className='p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg text-white'>
      <div className='absolute top-2 right-2 cursor-pointer text-2xl text-gray-400 hover:text-red-500' onClick={onDeleteClick}>
        <MdOutlineDelete />
      </div>

      <h2 className='font-bold text-2xl mb-2 text-primary'>{interview?.jobPosition}</h2>
      <h2 className='text-md text-gray-500 mb-1'>{interview?.jobExperience} Years of Experience</h2>
      <h2 className='text-sm text-gray-700'>Created At: {interview.createdAt}</h2>
      <div className='flex justify-between mt-4 gap-5'>
        <Button size="sm" variant="outline" className="w-full text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white"
          onClick={onFeedbackPress}
        >Feedback</Button>
        <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          onClick={onStart}
        >Start</Button>
      </div>
    </div>
  )
}

export default InterviewItemCard
