import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

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
            title: "two sum"
        },
        update: {},
        create: {
            title: 'Two Sum',
            description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
            difficulty: 'Easy'
        }
    })
    const problem2 = await prisma.problem.upsert({
        where: { title: 'Add Two Numbers' },
        update: {},
        create: {
          title: 'Add Two Numbers',
          description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.',
          difficulty: 'Medium'
        },
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