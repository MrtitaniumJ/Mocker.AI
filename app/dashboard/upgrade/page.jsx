import React from 'react'
import planData from '@/utils/planData'
import PlanItemCard from './_components/PlanItemCard'

function Upgrade() {
    return (
        <div className='p-10 bg-gradient-to-br from-blue-200 to-blue-300 min-h-screen'>
            <h2 className='font-bold text-4xl text-center text-gray-800 mb-4'>Upgrade</h2>
            <h2 className='text-center text-gray-600 mb-8'>Upgrade to monthly plan to access unlimited mock interview</h2>
            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center md:gap-8">
                    {planData.map((plan, index) => (
                        <PlanItemCard plan={plan} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Upgrade