-- CreateTable
CREATE TABLE "TestCases" (
    "id" SERIAL NOT NULL,
    "expectedOutput" TEXT NOT NULL,
    "problemId" INTEGER NOT NULL,
    "inputs" TEXT[],

    CONSTRAINT "TestCases_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TestCases" ADD CONSTRAINT "TestCases_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
