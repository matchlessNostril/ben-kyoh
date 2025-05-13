import { prisma } from '@/server/db/client';
import { CreateFolderRequest } from './schema';

const modelMap = {
  voca_library: 'voca_folders',
  voca_test: 'voca_test_folders',
  grammar_library: 'grammar_folders',
  grammar_test: 'grammar_test_folders',
} as const;

export async function createFolder(user_id: string, request: CreateFolderRequest) {
  const { type, ...rest } = request;

  const model = modelMap[type];
  if (!model) throw new Error(`Invalid folder type: ${type}`);

  // @ts-expect-error - Prisma model names are dynamically accessed
  const folder = await prisma[model].create({
    data: {
      user_id,
      ...rest,
    },
  });

  return folder;
}
