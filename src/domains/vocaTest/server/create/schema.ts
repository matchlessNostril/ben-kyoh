import { z } from 'zod';
import { resourceRequestSchema } from '@/server/schemas/createResource';

export const createVocaTestRequestSchema = resourceRequestSchema.extend({
  folder_id: z.string().uuid().nullable().optional().default(null),
});

export type CreateVocaTestRequestType = z.output<typeof createVocaTestRequestSchema>;
