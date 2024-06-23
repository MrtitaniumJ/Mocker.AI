"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'

function AddNewInterview() {
  const [openDailog, setOpenDailog] = useState(false)
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const InputPrompt = "Job position: " + jobPosition + ", Job Description: " + jobDesc + ", Years of Experience : " + jobExperience + " , Depends on Job Position, Job Description & Years of Experience give us 5-10 mixed up of Technical and HR Interview question along with Answer in JSON format, Give us question and answer field on JSON";

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response.text().replace('```json', '').replace('```', '').trim(); // Trim here

    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db.insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-yyyy')
        }).returning({ mockId: MockInterview.mockId });

      if (resp) {
        setOpenDailog(false);
        router.push('/dashboard/interview/' + resp[0]?.mockId);
      }
    } else {
      console.log("ERROR");
    }
    setLoading(false);
  }

  return (
    <div>
      <div className='p-10 border-2 border-dashed rounded-lg bg-blue-500
        hover:scale-105 hover:shadow-lg cursor-pointer
         transition-all text-white'
        onClick={() => setOpenDailog(true)}
      >
        <h2 className='text-2xl text-center font-semibold'>+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 dark:bg-gray-900 text-white rounded-lg">
          <DialogHeader >
            <DialogTitle className="text-3xl mb-5" >Tell us more about your job interview</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2 className='mb-5'>Add details about your job position/role, job description, and years of experience</h2>
                  <div className='my-4'>
                    <label>Job Role/Job Position</label>
                    <Input className="bg-white text-black mt-2" placeholder="Ex. Full Stack Developer" required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className='my-4'>
                    <label>Job Description/Tech Stack (In Short)</label>
                    <Textarea className="bg-white text-black mt-2" placeholder="Ex. React, NextJs, NodeJs, MySql etc"
                      required
                      onChange={(event) => setJobDesc(event.target.value)} />
                  </div>
                  <div className='my-4'>
                    <label>Years of experience</label>
                    <Input className="bg-white text-black mt-2" placeholder="Ex. 5" type="number" max="100"
                      required
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className='flex gap-5 justify-end'>
                  <Button className="bg-gray-300 hover:bg-gray-400 text-gray-700" type="button" variant="ghost" onClick={() => setOpenDailog(false)}>Cancel</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700" type="submit" disabled={loading} >
                    {loading ?
                      <>
                        <LoaderCircle className='animate-spin' /> Generating from AI
                      </> : 'Start Interview'
                    }
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddNewInterview
