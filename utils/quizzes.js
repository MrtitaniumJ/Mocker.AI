import { pgTable } from 'drizzle-orm/pg-core';
import { MockQuiz, QuizAnswer } from './schema';
import { db } from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const quizzes = await db.select().from(MockQuiz);
      
      const quizDetails = await Promise.all(
        quizzes.map(async (quiz) => {
          const participants = await db.select().from(QuizAnswer).where({ quizIdRef: quiz.quizId });
          return {
            ...quiz,
            participants,
          };
        })
      );

      res.status(200).json(quizDetails);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch quiz data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
