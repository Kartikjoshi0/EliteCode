'use client'
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from "next/navigation";

export const Hero =()=>{
    const session=useSession();
    const router=useRouter();
    if(session.data){
        router.push('/pages/home')
      }

    const handleClick=async ()=>{
        if(!session.data){
            await signIn()
        }else{
            router.push('/pages/home')
        }
    }
 return (<div className="w-full bg-background-primary flex flex-col items-center ">
    <div className="flex flex-col items-center justify-center w-full h-[500px]">
        <span className="text-white font-sans text-5xl text-bold font-[700]">Conquer the code at</span>
        <span className="text-[#4E7AFF] text-5xl font-sans text-4xl text-bold font-[700] ">ELITE-CODE</span>
        <span className="text-l text-Content-Secondary font-sans font-[500]">Join elite coders, solve problems, and climb leaderboards at Elite-Code.</span>
        <div className="flex justify-center  gap-2">
        <button onClick={handleClick} className="text-white bg-[#4E7AFF] font-[500] p-1 rounded-lg" >Start Solving</button>
            <button onClick={handleClick} className="text-Content-Secondary font-[500] p-1 rounded-lg">Explore Features {`->`}</button>
        </div>        
    </div>
    <div className="flex w-full h-[414.05px] items-center justify-center">
            <img src="/assets/JS code.png" alt="" width={326.35} height={286.16} />
            <img src="/assets/CPP code.png" alt="" width={428.33} height={373.2} />
    </div>
 </div>)
}


