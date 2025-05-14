import { GetFolderResourcesRequestType } from './schema';
import { prismaFindUnique, prismaFindMany } from '@/server/db/utils';
import { findUserByNickname } from '@/server/utils';
import { folderModelMap, fileModelMap } from '@/server/constants';

export async function getFolderResources(request: GetFolderResourcesRequestType) {
  const { type, user_nickname, folder_id } = request;

  if (folder_id) {
    const folder = await prismaFindUnique(folderModelMap, type, { id: folder_id });
    if (!folder) throw new Error(`Folder not found: ${folder_id}`);

    const subFolders = await prismaFindMany(folderModelMap, type, { parent_id: folder_id });
    const subFiles = await prismaFindMany(fileModelMap, type, { folder_id: folder_id });

    return { subFolders, subFiles };
  } else {
    const user = await findUserByNickname(user_nickname);

    const rootFolders = await prismaFindMany(folderModelMap, type, {
      user_id: user.id,
      parent_id: null,
    });
    const rootFiles = await prismaFindMany(fileModelMap, type, {
      user_id: user.id,
      folder_id: null,
    });

    return { subFolders: rootFolders, subFiles: rootFiles };
  }
}
