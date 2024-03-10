import { z } from 'zod';

export const OriginSchema = z.string().min(1, 'Origin is required');
export type Origin = z.infer<typeof OriginSchema>;
