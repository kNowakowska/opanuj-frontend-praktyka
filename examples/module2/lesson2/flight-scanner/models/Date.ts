import { z } from 'zod';

export const DateSchema = z
  .string()
  .regex(/(\d{2}-\d{2}-\d{4})/g, 'Date must be in format dd-mm-yyyy');
export type Date = z.infer<typeof DateSchema>;
