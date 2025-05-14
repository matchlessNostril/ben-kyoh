import { z } from 'zod';
import { resourceRequestSchema } from '@/server/base/schemas/resource';

export const createGrammarTestRequestSchema = resourceRequestSchema.extend({
  folder_id: z.string().uuid().nullable().optional().default(null),
});

export type CreateGrammarTestRequestType = z.output<typeof createGrammarTestRequestSchema>;
