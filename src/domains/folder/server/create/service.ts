import { CreateFolderRequestType } from './schema';
import { folderModelMap } from '@/server/constants';
import { prismaCreate } from '@/server/db/utils';

export async function createFolder(user_id: string, request: CreateFolderRequestType) {
  const { type, ...rest } = request;
  return prismaCreate(folderModelMap, type, { user_id, ...rest });
}
