import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
const prisma=new PrismaClient()

export async function GET(req: NextRequest,res: NextResponse){
    try {
        const problemsData=await prisma.problem.findMany()
        return NextResponse.json(problemsData);
    } catch (error) {
        console.error("Error retrieving posts:", error);
      NextResponse.json({ error: "Error retrieving problem" });
    }
}
