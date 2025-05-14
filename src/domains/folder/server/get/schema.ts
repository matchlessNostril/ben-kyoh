import { z } from 'zod';
import { folderSchema, folderTypeSchema } from '@/server/schemas/folder';
import { fileSchema } from '@/server/schemas/file';

export const getFolderResourcesRequestSchema = folderTypeSchema.extend({
  user_nickname: z.string().min(1),
  folder_id: z.string().uuid().nullable().optional().default(null),
});

export const getFolderResourcesResponseSchema = z.object({
  subFolders: z.array(folderSchema),
  subFiles: z.array(fileSchema),
});

export type GetFolderResourcesRequestType = z.output<typeof getFolderResourcesRequestSchema>;
