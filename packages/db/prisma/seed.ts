import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
const ProblemTitle1='two sum';
const ProblemTitle2='Add Two Numbers';


async function main(){
   const user1= await prisma.user.upsert({
        where: {
            username: 'user1'
        },
        update: {},
        create: {
            username: 'user1',
            email: 'user1@gmail.com',
            password: '123123'
        }
    })
    
    const problem1 = await prisma.problem.upsert({
        where: {
            title: ProblemTitle1
        },
        update: {},
        create: {
            title: ProblemTitle1,
            description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
            difficulty: 'Easy'
        }
    })
    const problem2 = await prisma.problem.upsert({
        where: { title: ProblemTitle2 },
        update: {},
        create: {
          title: ProblemTitle2,
          description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.',
          difficulty: 'Medium'
        },
      });

      const testCasesForProblem2 = await prisma.testCases.createMany({
        data: [
          { expectedOutput: '3', problemId: problem2.id, inputs: ["1", "2"] },
          { expectedOutput: '5', problemId: problem2.id, inputs: ["2", "3"] },
          // Add more test cases as needed
        ]
      });
      console.log('Data seeded successfully!');
}
main()
.catch(error=>{
    console.error('Error seeding data',error)
})
.finally(async () => {
    await prisma.$disconnect();
  });