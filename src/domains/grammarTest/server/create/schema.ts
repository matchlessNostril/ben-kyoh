import { z } from 'zod';
import { resourceRequestSchema } from '@/server/schemas/createResource';

export const createGrammarTestRequestSchema = resourceRequestSchema.extend({
  folder_id: z.string().uuid().nullable().optional().default(null),
});

export type CreateGrammarTestRequestType = z.output<typeof createGrammarTestRequestSchema>;
