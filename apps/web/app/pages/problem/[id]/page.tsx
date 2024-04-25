'use client'
import Editor from "@monaco-editor/react";
import { Difficulty } from "@prisma/client";
import React, { useRef } from "react";
import { useEffect ,useState} from "react";
interface Problem {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  createdAt: Date;
}


export default function Page({params}: {params: {id: string}}) {
  const id= params.id
  const [detail,setDetaul]=useState<Problem>()
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await fetch(`/api/detail/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch problems');
        }
        const data = await response.json();
        console.log(data);
        setDetaul(data)
        
        return data;
      } catch (error) {
        console.error('Error while fetching problems:', error);
      }
    };
    fetchProblem();
  }, []);
  if (!detail) {
    return <div>Loading...</div>;
  }

  
  return (
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h1 >{detail.title}</h1>
          <p className="text-blue-500">{detail.description}</p>
        </div>
        <div>
        <button onClick={()=>{}}>Show value</button>
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={()=>{}}
          theme="vs-dark"
        />
        </div>

        
      </ div>
  );
}