import { useState } from "react"


export function ResultBox({output}: {output: string}){

    const [visible,setVisible]=useState(false);
    if(output=='Acccepted'){
        return <div>
            <div className=" absoulte z-100 w-fit bg-green-500 rounded  border-solid border-[5px] border-green-300">{output}</div>
        </div>
    }else if(output=='Processing'){
        return <div>
            <div className="absolute z-100 w-fit  rounded bg-yellow-500 border-solid border-[5px] border-yellow-300">{output}</div>
        </div>
    }else{
        return <div>
            <div className="absolute z-100 rounded w-fit bg-red-500 border-solid border-[5px] border-red-300">{output}</div>
        </div>
    }
}