import Link from "next/link";

interface ProblemCardProps{
    status: any;
    title: string;
    solution: string;
    difficulty: string;
    id: string;
    bgcolor: string;
    textcolor: string;
    difficultyColor: string
}
export const ProblemCard=({status, title, solution,difficulty,id, bgcolor, textcolor, difficultyColor}: ProblemCardProps)=>{
    return <div className={`flex justify-center items-center border-solid  h-[50px] ${bgcolor} ${textcolor}`}>
     <div className="flex flex-row gap-[150px]   ">
        <div className="w-[150px]">{status}</div>
        <Link href={`/pages/problem/${id}`}><div className=" hover:text-blue-500  w-[150px]">{title}</div></Link>
        <div className="w-[150px]">{solution}</div>
        <div className={`w-[150px] ${difficultyColor}`}>{difficulty}</div>
    </div>
    </div>
}