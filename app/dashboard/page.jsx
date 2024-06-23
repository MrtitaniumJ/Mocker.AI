import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='p-10 bg-gradient-to-r from-blue-200 to-blue-300 dark:bg-gray-900 min-h-screen'>

      <h2 className='font-bold text-5xl text-gray-800 mb-3'>Dashboard</h2>
      <h2 className='text-gray-900 text-lg mb-8'>Create and Start your AI Mockup Interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-5'>
        <AddNewInterview/>
      </div>

      {/* Previous Interview List  */}
      <InterviewList/>
    </div>
  )
}

export default Dashboard