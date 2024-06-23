"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

function PlanItemCard({ plan }) {
  const { user } = useUser();
  return (
    <div className="rounded-2xl border border-gray-200 p-6 shadow-lg bg-white">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {plan.name}
        </h2>
        <p className="text-4xl font-bold text-indigo-600">
          {plan.cost}$
          <span className="text-lg font-medium text-gray-600">/month</span>
        </p>
      </div>
      <ul className="mt-6 space-y-4 text-gray-700">
        {plan.offering.map((item, index) => (
          <li className="flex items-center gap-2" key={index}>
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
            {item.value}
          </li>
        ))}
      </ul>
      <a
        href={`${plan.paymentLink}?prefilled_email=${user?.primaryEmailAddress.emailAddress}`}
        target='_blank'
        className="mt-8 block rounded-full bg-indigo-600 text-white px-6 py-3 text-center text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Get Started
      </a>
    </div>
  )
}

export default PlanItemCard
