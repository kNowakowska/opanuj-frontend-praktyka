import { z } from 'zod';
import { OriginSchema } from './Origin';
import { DateSchema } from './Date';
import { TripTypeSchema } from './TripType';

export const FlightScannerFormSchema = z.object({
  origin: OriginSchema,
  startDate: DateSchema,
  endDate: DateSchema,
  trip: TripTypeSchema,
});

export type FlightScannerForm = z.infer<typeof FlightScannerFormSchema>;
