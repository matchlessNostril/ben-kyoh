import { NextRequest, NextResponse } from 'next/server';
import { resourceResponseSchema } from '@/server/base/schemas/resource';
import { createVocaRequestSchema } from './schema';
import { createVoca } from './service';
import { checkRequestBody, checkAuth } from '@/server/base/utils';

export async function POST(req: NextRequest) {
  const parsed = await checkRequestBody(req, createVocaRequestSchema);
  if (!parsed.success) return parsed.response;

  const auth = await checkAuth();
  if (!auth.success) return auth.response;

  const voca = await createVoca(auth.user!.id, parsed.data);

  const responseBody = resourceResponseSchema.parse(voca);
  return NextResponse.json(responseBody, { status: 201 });
}
