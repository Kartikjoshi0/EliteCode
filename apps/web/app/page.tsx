"use client"
import { useEffect, useState } from "react";
import { Difficulty } from "@prisma/client";
import { signIn, signOut,useSession } from "next-auth/react";
import { Appbar } from "../../../packages/ui/src/Appbar";
import { ProblemCard } from "../../../packages/ui/src/ProblemCard";

interface Problem {
  id: any;
  title: string;
  description: string;
  difficulty: Difficulty;
  createdAt: Date;
}

export default function Page() {
  const [problems, setProblems] = useState<Problem[]>([]); 

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch('/api/problem'); 
        if (!response.ok) {
          throw new Error('Failed to fetch problems');
        }
        const data = await response.json();
        setProblems(data);
      } catch (error) {
        console.error('Error while fetching problems:', error);
      }
    };
    fetchProblems();
  }, []);

  const session=useSession();

  return (
    <div className="flex flex-col m-3 bg-gray-950 h-screen w-screen">
       <div>
      <Appbar onSignin={signIn}  onSignout={signOut} user={session.data?.user} bgcolor="bg-gray-900"/>
       </div>
    
       <div className="m-10 p-3 ">
      <div className="m-3">
      <ProblemCard status={'status'} difficulty={'diificulty'} title={'title'} solution={'solution'} id={''} bgcolor="bg-gray-950 " textcolor="text-gray-500" difficultyColor="text-gray-500"/>
      </div>
      <div className="w-screen h-[0.5px] bg-gray-500"></div>
   

      
        {problems.map(problem => (
          <ProblemCard status={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
        </svg>
        } difficulty={problem.difficulty} title={problem.title} solution={'not avaliable'} id={problem.id} bgcolor={(problem.id%2==0)?"bg-gray-900": "bg-gray-950"} textcolor="text-white" difficultyColor={(problem.difficulty=='Medium')? 'text-yellow-500': 'text-green-500'}/>
        ))}
      
       </div>
  </div>
  );
}
