import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser} from '@/lib/actions/auth.action';
import { getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action';

const Page = async () => {

    // Performance opitmised: by using parallel fetching at once instead of performing twice
    const user = await getCurrentUser();

    // Add debugging
    console.log('Current user:', user);
    console.log('User ID:', user?.id);

    const [userInterviews,latestInterviews] = await Promise.all([
        await getInterviewsByUserId(user?.id!),
        await getLatestInterviews({userId: user?.id!})
    ])

     // Add more debugging
    console.log('User interviews:', userInterviews);
    console.log('Latest interviews:', latestInterviews);
    
    // const userInterviews = await getInterviewsByUserId(user?.id!);
    // const latestInterviews = await getLatestInterviews({userId: user?.id!})

   const hasPastInterviews = userInterviews && userInterviews.length > 0;
    const hasUpcomingInterviews = latestInterviews && latestInterviews.length > 0;

    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
                    <p className="text-lg">
                        Practice real interview questions & get instant feedback
                    </p>

                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Start an Interview</Link>
                    </Button>
                </div>
                <Image src="/robot.png" alt="robot" width={400} height={400} className="max-sm:hidden"/>
            </section>

            <section className="flex flex-col mt-8 gap-6">
                <h2>Your Interviews</h2>
                <div className="interviews-section">
                    {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                    key={interview.id}
                    userId={user?.id}
                    id={interview.id}
                    role={interview.role}
                    type={interview.type}
                    techstack={interview.techstack}
                    createdAt={interview.createdAt}
            />
                ))
            )  : (
                <p> You haven&apos;t taken any interviews yet </p>
                )}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>

                <div className="interviews-section">
                    {hasUpcomingInterviews ? (
                            latestInterviews?.map((interview) => (
                                <InterviewCard
                                    {...interview}
                                    key={interview.id}/>
                            ))) : (
                            <p>There are no new Interviews available yet</p>
                        )}

                </div>
            </section>
        </>
    )
}
export default Page
