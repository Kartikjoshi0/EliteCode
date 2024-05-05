'use client'
import Editor from "@monaco-editor/react";
import { Difficulty, TestCases } from "@prisma/client";
import axios from "axios";
import { METHODS } from "http";
import React, { useRef } from "react";
import { useEffect ,useState} from "react";
import { getResult, submitCode } from "../../../actions/submission";
interface Problem {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  createdAt: Date;
  TestCases: TestCases[];
}


export default function Page({params}: {params: {id: string}}) {
  const id= params.id
  const [detail,setDetail]=useState<Problem>()
  const [code, setCode] = useState<string>("");
  const [output,setOutput]=useState('');
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await fetch(`/api/detail/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch problems');
        }
        const data = await response.json();
        console.log(data);
        setDetail(data)
        
        return data;
      } catch (error) {
        console.error('Error while fetching problems:', error);
      }
    };
    fetchProblem();
  }, []);
  async function handleSubmit() { 
    try {
      const result=await submitCode(code, '52',detail?.TestCases)
      console.log(result);
      const finalresult=await getResult(result);
      setOutput(finalresult?.msg);

    } catch ( error) {
      console.log('Error submitting code:', error);
    }
    
    
  }
  
  

  if (!detail) {
    return <div>Loading...</div>;
  }
  
  return (
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h1 >{detail.title}</h1>
          <p className="text-blue-500">{detail.description}</p>
          <h2>Test Cases:</h2>
        <ul>
          {detail.TestCases.map((testCase, index) => (
            <li key={index}>
              <p>Input: {testCase.inputs.join(", ")}</p>
              <p>Expected Output: {testCase.expectedOutput}</p>
            </li>
          ))}
        </ul>
        </div>
        <div>
        <button onClick={handleSubmit}>Submit</button>
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
        />
        </div>
        {output== ''? 
        <div>Submit your code </div>:
        <div>your code is :{output} </div>
      }

      </ div>
  );
}