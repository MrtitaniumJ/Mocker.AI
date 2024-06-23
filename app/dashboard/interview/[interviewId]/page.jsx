"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({ params }) {
    const [interviewData, setInterviewData] = useState();
    const [webCamEnabled, setWebCamEnabled] = useState(false);

    useEffect(() => {
        GetInterviewDetails();
    }, [])

    const GetInterviewDetails = async () => {
        try {
            const result = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, params.interviewId))

            if (result.length > 0) {
                setInterviewData(result[0]);
            } else {
                console.log('Interview not found');
            }
        } catch (error) {
            console.log('Error fetching interview details: ', error);
            throw new Error(error.message);
        }
    }

    return (
        <div className='p-10 bg-gradient-to-r from-blue-200 to-blue-300 min-h-screen text-gray-800'>
            <h2 className='font-bold text-4xl mb-5'>Let's Get Started</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                <div className='flex flex-col gap-5'>
                    <div className='p-6 rounded-lg bg-white shadow-lg'>
                        <h2 className='text-xl mb-2'><strong>Job Role/Job Position:</strong> {interviewData?.jobPosition} </h2>
                        <h2 className='text-lg mb-2'><strong>Job Description/Tech Stack:</strong> {interviewData?.jobDesc} </h2>
                        <h2 className='text-lg'><strong>Years of Experience:</strong> {interviewData?.jobExperience} </h2>
                    </div>
                    <div className='p-6 rounded-lg border border-yellow-300 bg-yellow-100 text-yellow-700'>
                        <h2 className='flex items-center gap-2'><Lightbulb className='text-yellow-700' /><strong>Information</strong></h2>
                        <h2 className='mt-3'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    {webCamEnabled ? (
                        <Webcam
                            onUserMedia={() => setWebCamEnabled(true)}
                            onUserMediaError={() => setWebCamEnabled(false)}
                            mirrored={true}
                            style={{
                                height: 300,
                                width: 300,
                                borderRadius: '10px',
                                border: '2px solid gray',
                            }}
                        />
                    ) : (
                        <>
                            <div className='flex flex-col items-center'>
                                <WebcamIcon className='h-72 w-72 my-7 p-20 border-2 border-dashed bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg' />
                                <Button variant="ghost" className="w-full mt-4  hover:bg-gray-300 text-gray-700" onClick={() => setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='flex justify-end mt-10'>
                <Link href={`/dashboard/interview/${params.interviewId}/start`}>
                    <Button className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg'>Start Interview</Button>
                </Link>
            </div>
        </div>
    )
}

export default Interview
