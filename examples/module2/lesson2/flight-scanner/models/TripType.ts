import { z } from 'zod';

export const TripTypeSchema = z.enum(['one-way', 'round-trip']);
export type TripType = z.infer<typeof TripTypeSchema>;
