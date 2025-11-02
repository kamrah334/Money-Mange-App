import { z } from "zod";

export const categories = [
  "Income",
  "Food",
  "Utilities",
  "Shopping",
  "Transport",
  "Entertainment",
  "Healthcare",
  "Others",
] as const;

export type Category = typeof categories[number];

export const transactionSchema = z.object({
  id: z.string(),
  amount: z.number().positive(),
  type: z.enum(["in", "out"]),
  description: z.string().min(1),
  category: z.enum(categories),
  date: z.string(),
});

export const insertTransactionSchema = transactionSchema.omit({ id: true });

export type Transaction = z.infer<typeof transactionSchema>;
export type InsertTransaction = z.infer<typeof insertTransactionSchema>;
