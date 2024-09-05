interface TestCaseProp{
    input: string[],
    expectedOutput: string,
    index: number
}

export const TestCasse=({input,expectedOutput,index}: TestCaseProp)=>{
    return <div className=" m-2 p-3 ">
        <div className="text-lg font-semibold ">Example: {index}</div>
        <div className="flex gap-2 ">
            <div>Inputs: {input.join(' , ')}</div>
            <div>Output: {expectedOutput}</div>
        </div>
    </div>
}