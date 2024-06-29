"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon, Edit3 } from 'lucide-react';
import Link from 'next/link';
import Webcam from 'react-webcam';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function Interview({ params }) {
    const [interviewData, setInterviewData] = useState(null);
    const [webCamEnabled, setWebCamEnabled] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    useEffect(() => {
        getInterviewDetails();
    }, []);

    const getInterviewDetails = async () => {
        try {
            const result = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, params.interviewId));

            if (result.length > 0) {
                setInterviewData(result[0]);
            } else {
                console.log('Interview not found');
            }
        } catch (error) {
            console.log('Error fetching interview details: ', error);
            throw new Error(error.message);
        }
    };

    const handleEditDetails = async (updatedDetails) => {
        try {
            await db.update(MockInterview)
                .set(updatedDetails)
                .where(eq(MockInterview.mockId, params.interviewId));
            setInterviewData(updatedDetails);
            setOpenEditDialog(false); // Close the dialog after editing
        } catch (error) {
            console.log('Error updating interview details: ', error);
            throw new Error(error.message);
        }
    };

    const openEditDialogHandler = () => {
        setOpenEditDialog(true);
    };

    return (
        <div className='p-10 bg-gradient-to-r from-blue-200 to-blue-300 min-h-screen text-gray-800'>
            <h2 className='font-bold text-4xl mb-5'>Let's Get Started</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                <div className='flex flex-col gap-5'>
                    <div className='p-6 rounded-lg bg-white shadow-lg relative'>
                        <Edit3 
                            className='absolute top-2 right-2 cursor-pointer text-gray-400 hover:text-gray-600'
                            onClick={openEditDialogHandler} // Ensure this handler is correctly set
                        />
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

            <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
                <DialogContent className='max-w-2xl bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 dark:bg-gray-900 text-white rounded-lg'>
                    <DialogHeader>
                        <DialogTitle className='text-3xl mb-5'>Edit Interview Details</DialogTitle>
                        <DialogDescription>
                            {interviewData && (
                                <EditInterviewForm
                                    interviewData={interviewData}
                                    onSave={handleEditDetails}
                                    onClose={() => setOpenEditDialog(false)}
                                />
                            )}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

function EditInterviewForm({ interviewData, onSave, onClose }) {
    const [jobPosition, setJobPosition] = useState(interviewData?.jobPosition || '');
    const [jobDesc, setJobDesc] = useState(interviewData?.jobDesc || '');
    const [jobExperience, setJobExperience] = useState(interviewData?.jobExperience || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ jobPosition, jobDesc, jobExperience });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='my-4'>
                <label>Job Role/Job Position</label>
                <Input className="bg-white text-black mt-2" placeholder="Ex. Full Stack Developer" value={jobPosition} onChange={(e) => setJobPosition(e.target.value)} />
            </div>
            <div className='my-4'>
                <label>Job Description/Tech Stack (In Short)</label>
                <Textarea className="bg-white text-black mt-2" placeholder="Ex. React, NextJs, NodeJs, MySql etc" value={jobDesc} onChange={(e) => setJobDesc(e.target.value)} />
            </div>
            <div className='my-4'>
                <label>Years of experience</label>
                <Input className="bg-white text-black mt-2" placeholder="Ex. 5" type="number" value={jobExperience} onChange={(e) => setJobExperience(e.target.value)} />
            </div>
            <div className='flex gap-5 justify-end'>
                <Button className="bg-gray-300 hover:bg-gray-400 text-gray-700" type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                <Button className="bg-blue-600 hover:bg-blue-700" type="submit">Save</Button>
            </div>
        </form>
    );
}

export default Interview;
