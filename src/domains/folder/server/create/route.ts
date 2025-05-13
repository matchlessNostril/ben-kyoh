import { NextRequest, NextResponse } from 'next/server';
import { createFolderRequestSchema, createFolderResponseSchema } from './schema';
import { createFolder } from './service';
import { checkRequestBody, checkAuth } from '@/server/utils';

export async function POST(req: NextRequest) {
  const parsed = await checkRequestBody(req, createFolderRequestSchema);
  if (!parsed.success) return parsed.response;

  const auth = await checkAuth();
  if (!auth.success) return auth.response;

  const folder = await createFolder(auth.user!.id, parsed.data);

  const responseBody = createFolderResponseSchema.parse({
    id: folder.id,
    name: folder.name,
    created_at: folder.created_at.toISOString(),
  });
  return NextResponse.json(responseBody, { status: 201 });
}
