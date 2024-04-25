"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Difficulty } from "@prisma/client";

interface Problem {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  createdAt: Date;
}

export default function Page() {
  const [problems, setProblems] = useState<Problem[]>([]); // Specify the type for problems

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch('/api/problem'); // Correct the API route URL
        if (!response.ok) {
          throw new Error('Failed to fetch problems');
        }
        const data = await response.json();
        setProblems(data);
      } catch (error) {
        console.error('Error while fetching problems:', error);
      }
    };
    fetchProblems();
  }, []);

  return (
    <div>
      <h1 className="text-blue-500">Problems</h1>
      <ul>
        {problems.map(problem => (
          <li key={problem.id}>
            <Link href={`/pages/problem/${problem.id}`}>
              <p>{problem.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
