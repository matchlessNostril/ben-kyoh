import { z } from 'zod';
import { resourceRequestSchema } from '@/server/base/schemas/resource';

export const createFolderRequestSchema = resourceRequestSchema.extend({
  type: z.enum(['voca_library', 'voca_test', 'grammar_library', 'grammar_test']),
  parent_id: z.string().uuid().nullable().optional().default(null),
});

export type CreateFolderRequestType = z.output<typeof createFolderRequestSchema>;
