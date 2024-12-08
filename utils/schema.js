import { timestamp } from "drizzle-orm/mysql-core";
import { pgTable, serial, text, varchar, integer, jsonb } from "drizzle-orm/pg-core";

// export const User = pgTable('users', {
//     id: serial('id').primaryKey(),
//     email: varchar('email', {length: 255}).primaryKey(),
//     passwordHash: text('passwordHash').notNull(),
//     fullName: varchar('fullName', {length: 255}).notNull(),
//     createdAt: timestamp('createdAt').defaultNow(),
//     updatedAt: timestamp('updatedAt').defaultNow().onUpdateNow(),
// });


export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(), //link to user id
    createdAt: varchar('createdAt'),
    mockId: varchar('mockId').notNull(),
});

export const MockQuiz = pgTable('mockQuiz', {
    id: serial('id').primaryKey(),
    title: varchar('title').notNull(),
    description: text('description').notNull(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    quizId: varchar('quizId').notNull(),
});

export const QuizAnswer = pgTable('quizAnswer', {
    id: serial('id').primaryKey(),
    quizIdRef: varchar('quizId').notNull(), // Reference to quizId
    answers: jsonb('answers').notNull(), // Store all answers in JSON format
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
});

export const UserAnswer = pgTable('userAnswer', {
    id: serial('id').primaryKey(),
    mockIdRef: varchar('mockId').notNull(),
    question: varchar('question').notNull(),
    correctAns: text('correctAns'),
    userAns: text('userAns'),
    feedback: text('feedback'),
    rating: varchar('rating'),
    userEmail: varchar('userEmail'),
    createdAt: varchar('createdAt'),
});