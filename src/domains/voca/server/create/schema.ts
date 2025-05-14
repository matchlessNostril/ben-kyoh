import { z } from 'zod';
import { resourceRequestSchema } from '@/server/base/schemas/resource';

export const createVocaRequestSchema = resourceRequestSchema.extend({
  folder_id: z.string().uuid().nullable().optional().default(null),
});

export type CreateVocaRequestType = z.output<typeof createVocaRequestSchema>;
