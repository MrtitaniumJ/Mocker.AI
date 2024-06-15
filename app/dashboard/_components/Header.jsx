"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='flex p-4 items-center justify-between bg-gradient-to-r from-blue-200 to-blue-300 border-b border-gray-200 dark:bg-gray-900 shadow-sm'>
        {/* <Image src={'/logo.svg'} width={160} height={100} alt='logo' /> */}
        <h1
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer text-gray-700"
        >
          Mocker.AI
        </h1>
        <ul className='hidden md:flex gap-6'>
          <Link href={"/dashboard"}>
            <li className={`hover:text-blue-500 hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard'&&'text-blue-500 font-bold'}
            `}
            
            >Dashboard</li>
            </Link>
            
            <li className={`hover:text-blue-500 hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/questions'&&'text-blue-500 font-bold'}
            `}>Questions</li>
              <Link href={"/dashboard/upgrade"}>
            <li className={`hover:text-blue-500 hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/upgrade'&&'text-blue-500 font-bold'}
            `}>Upgrade</li>
            </Link>
            <li className={`hover:text-blue-500 hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/how'&&'text-blue-500 font-bold'}
            `}>How it Works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header