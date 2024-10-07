'use client'
import {motion} from 'framer-motion'
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import { Button } from './Button';
export const Appbar= ()=>{
    const session=useSession();
    const user=session.data?.user
    return (
        <nav className="sticky mx-auto top-0 z-50 flex items-center shadow-neutral-600/5 py-6 w-3/4 ">
            <motion.div
              initial={{y:-20,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration: 0.5, ease: 'easeInOut', type:"spring",  damping: 10 }}
              className='flex w-full justify-between bg-background-primary/30 shardow-lg backdrop-blur-lg p-6  border border-white border-2 rounded-2xl'
            >
            <span className="text-lg md:text-2xl font-bold tracking-tight text-white hidden md:block" >Elite-Code</span>
            {!user ? (
            <Button
              onClick={async () => {
                await signIn();
              }}
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={async () => {
                await signOut();
              }}
            >
              Logout
            </Button>
          )}
            </motion.div>
        </nav>
    )
}