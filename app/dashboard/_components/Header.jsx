"use client"
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const path = usePathname();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className='flex p-4 items-center justify-between bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 shadow-md'>
      <Link href="/">
        <h1 className="text-3xl font-extrabold cursor-pointer text-white">
          Mocker.AI
        </h1>
      </Link>

      <div className='hidden md:flex gap-8'>
        <Link href="/dashboard">
          <div className={`hover:text-white transition-all cursor-pointer px-3 py-1 rounded-md ${path == '/dashboard' ? 'bg-white text-blue-700 font-bold' : 'text-white'}`}>
            Dashboard
          </div>
        </Link>
        <Link href="/dashboard/questions">
          <div className={`hover:text-white transition-all cursor-pointer px-3 py-1 rounded-md ${path == '/dashboard/questions' ? 'bg-white text-blue-700 font-bold' : 'text-white'}`}>
            Questions
          </div>
        </Link>
        <Link href="/dashboard/upgrade">
          <div className={`hover:text-white transition-all cursor-pointer px-3 py-1 rounded-md ${path == '/dashboard/upgrade' ? 'bg-white text-blue-700 font-bold' : 'text-white'}`}>
            Upgrade
          </div>
        </Link>
        <Link href="/dashboard/how-it-works">
          <div className={`hover:text-white transition-all cursor-pointer px-3 py-1 rounded-md ${path == '/dashboard/how-it-works' ? 'bg-white text-blue-700 font-bold' : 'text-white'}`}>
            How it Works?
          </div>
        </Link>
      </div>

      <div className='flex items-center gap-4'>
        <UserButton />
        <div className='md:hidden' onClick={handleNavToggle}>
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {isNavOpen && (
        <ul className={`fixed top-0 right-0 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 w-full h-full flex flex-col items-center gap-8 p-8 transition-transform transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex justify-between w-full md:hidden'>
            <Link href="/">
              <h1 className="text-3xl font-extrabold cursor-pointer text-white">
                Mocker.AI
              </h1>
            </Link>
            <button className="text-white focus:outline-none" onClick={handleNavToggle}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <Link href="/dashboard">
            <div className={`hover:text-white transition-all cursor-pointer px-3 py-1 rounded-md ${path == '/dashboard' ? 'bg-white text-blue-700 font-bold' : 'text-white'}`}>
              Dashboard
            </div>
          </Link>
          <Link href="/dashboard/questions">
            <div className={`hover:text-white transition-all cursor-pointer px-3 py-1 rounded-md ${path == '/dashboard/questions' ? 'bg-white text-blue-700 font-bold' : 'text-white'}`}>
              Questions
            </div>
          </Link>
          <Link href="/dashboard/upgrade">
            <div className={`hover:text-white transition-all cursor-pointer px-3 py-1 rounded-md ${path == '/dashboard/upgrade' ? 'bg-white text-blue-700 font-bold' : 'text-white'}`}>
              Upgrade
            </div>
          </Link>
          <Link href="/dashboard/how-it-works">
            <div className={`hover:text-white transition-all cursor-pointer px-3 py-1 rounded-md ${path == '/dashboard/how-it-works' ? 'bg-white text-blue-700 font-bold' : 'text-white'}`}>
              How it Works?
            </div>
          </Link>
        </ul>
      )}
    </div>
  )
}

export default Header
