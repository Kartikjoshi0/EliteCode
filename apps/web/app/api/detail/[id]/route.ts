import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

// @ts-ignore
export async function GET(request: NextRequest,{params}: {params: {id: string}}){
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
            return NextResponse.json({
                msg: "no id matched"
            })
        }
        return NextResponse.json(problem)
    } catch (error) {
        console.log('this is error',error);
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
        
    }
}