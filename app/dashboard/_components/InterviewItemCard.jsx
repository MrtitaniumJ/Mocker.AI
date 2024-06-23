import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({ interview }) {
  const router = useRouter();

  const onStart = () => {
    router.push('/dashboard/interview/' + interview?.mockId)
  }

  const onFeedbackPress = () => {
    router.push('/dashboard/interview/' + interview.mockId + "/feedback")
  }

  return (
    <div className='p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg text-white'>
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
