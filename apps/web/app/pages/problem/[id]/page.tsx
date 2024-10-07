'use client'
import Editor from "@monaco-editor/react";
import { Difficulty, TestCases } from "@prisma/client";
import { Button } from '../../../../../../packages/ui/src/Button'
import { Choose } from '../../../../../../packages/ui/src/Choose'
import React from "react";
import { useEffect ,useState} from "react";
import { getResult, submitCode } from "../../../actions/submission";
import { TestCasse } from "../../../../../../packages/ui/src/TestCase";
import { getLanguages } from "../../../actions/getLangs";
import {useRecoilValue } from "recoil";
import {LanguageId} from '../../../../../../packages/atom/code'
import {ResultBox } from "@repo/ui/resutlBox";


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
  const [lang,setLang]=useState<any[]>([])
  const langauageId=useRecoilValue(LanguageId)
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const languages= await getLanguages();
        console.log(languages);
        setLang(languages)
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
      const result=await submitCode(code, langauageId, detail?.TestCases || [])
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
        <div className=" p-5 border-solid border-2 rounded border-gray-300 shadow-lg shadow-gray-500">
          <div className="">
            <div className="text-xl font-bold flex gap-2">
              <div>{`${detail.id}.`}</div>
              <div>{detail.title}</div>
            </div>
            <div className={`bg-gray-100 w-fit rounded  text-yellow-500 `}>{detail.difficulty}</div>
            <div className="">{detail.description}</div >
          </div>
        <ul>
          {detail.TestCases.map((testCase, index) => (
            <TestCasse key={index}  input={testCase.inputs} index={index} expectedOutput={testCase.expectedOutput}  />
          ))}
        </ul>
        </div>
        <div>
        <div className="flex mx-3 mt-1 gap-20 ">
          <Choose languages={lang}/>
          <Button onClick={handleSubmit}>Run</Button>
          <div className="z-50"><ResultBox output={output} /></div>
        </div>
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="//start from here"
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
        />
      </div>
    </div>

     
  );
}