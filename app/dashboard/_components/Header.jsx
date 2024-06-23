"use client"
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
  const path = usePathname();

  return (
    <div className='flex p-4 items-center justify-between bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 shadow-md'>
      <Link href="/">
        <h1 className="text-3xl font-extrabold cursor-pointer text-white">
          Mocker.AI
        </h1>
      </Link>

      <ul className='hidden md:flex gap-8'>
        <Link href="/dashboard">
          <li className={`hover:text-white transition-all
            cursor-pointer px-3 py-1 rounded-md
            ${path == '/dashboard' ? 'bg-white text-blue-700 font-bold' : 'text-white'}
            `}
          >
            Dashboard
          </li>
        </Link>
        <Link href="/dashboard/questions">
          <li className={`hover:text-white transition-all
            cursor-pointer px-3 py-1 rounded-md
            ${path == '/dashboard/questions' ? 'bg-white text-blue-700 font-bold' : 'text-white'}
            `}
          >
            Questions
          </li>
        </Link>
        <Link href="/dashboard/upgrade">
          <li className={`hover:text-white transition-all
            cursor-pointer px-3 py-1 rounded-md
            ${path == '/dashboard/upgrade' ? 'bg-white text-blue-700 font-bold' : 'text-white'}
            `}
          >
            Upgrade
          </li>
        </Link>
        <Link href="/dashboard/how-it-works">
          <li className={`hover:text-white transition-all
            cursor-pointer px-3 py-1 rounded-md
            ${path == '/dashboard/how-it-works' ? 'bg-white text-blue-700 font-bold' : 'text-white'}
            `}
          >
            How it Works?
          </li>
        </Link>
      </ul>
      <div className='flex items-center gap-4'>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
