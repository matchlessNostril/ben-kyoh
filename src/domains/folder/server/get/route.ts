import { NextRequest, NextResponse } from 'next/server';
import { getFolderResourcesRequestSchema, getFolderResourcesResponseSchema } from './schema';
import { getFolderResources } from './service';
import { FolderType } from '@/server/schemas/folder';
import { FileType } from '@/server/schemas/file';
import { checkRequestQuery, checkAuth } from '@/server/utils';

export async function GET(req: NextRequest) {
  const parsed = await checkRequestQuery(req, getFolderResourcesRequestSchema);
  if (!parsed.success) return parsed.response;

  const auth = await checkAuth();
  if (!auth.success) return auth.response;

  const folderResources = (await getFolderResources(parsed.data)) as {
    subFolders: (FolderType & { user_id: string })[];
    subFiles: (FileType & { user_id: string })[]; // TODO: あとでUnionタイプにする
  };
  const subFoldersWithoutUser = folderResources.subFolders.map(({ user_id: _, ...rest }) => rest);
  const subFilesWithoutUser = folderResources.subFiles.map(({ user_id: _, ...rest }) => rest);

  const responseBody = getFolderResourcesResponseSchema.parse({
    subFolders: subFoldersWithoutUser,
    subFiles: subFilesWithoutUser,
  });
  return NextResponse.json(responseBody, { status: 200 });
}
