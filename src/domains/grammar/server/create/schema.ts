import { z } from 'zod';
import { resourceRequestSchema } from '@/server/schemas/createResource';

export const createGrammarRequestSchema = resourceRequestSchema.extend({
  folder_id: z.string().uuid().nullable().optional().default(null),
});

export type CreateGrammarRequestType = z.output<typeof createGrammarRequestSchema>;
