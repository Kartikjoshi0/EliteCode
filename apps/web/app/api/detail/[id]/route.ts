import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()


export async function GET(res: NextResponse,{params}: {params: {id: string}}){
    const id=params.id
    try {
        const problem=await prisma.problem.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                TestCases: true
            }
        })
        if(!problem){
            NextResponse.json({
                msg: "no id matched"
            })
        }
        return NextResponse.json(problem)
    } catch (error) {
        console.log('this is error',error);
        
    }
}