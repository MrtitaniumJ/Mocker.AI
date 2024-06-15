import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <div className='bg-gradient-to-r from-blue-200 to-blue-300 dark:bg-gray-900 h-screen'>
        <Header/>
        <div className='mx-5 md:mx-20 lg:mx-36'>
        {children}
        </div>
       
    </div>
  )
}

export default DashboardLayout