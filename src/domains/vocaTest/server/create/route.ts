import { NextRequest, NextResponse } from 'next/server';
import { resourceResponseSchema } from '@/server/base/schemas/resource';
import { createVocaTestRequestSchema } from './schema';
import { createVocaTest } from './service';
import { checkRequestBody, checkAuth } from '@/server/base/utils';

export async function POST(req: NextRequest) {
  const parsed = await checkRequestBody(req, createVocaTestRequestSchema);
  if (!parsed.success) return parsed.response;

  const auth = await checkAuth();
  if (!auth.success) return auth.response;

  const vocaTest = await createVocaTest(auth.user!.id, parsed.data);

  const responseBody = resourceResponseSchema.parse(vocaTest);
  return NextResponse.json(responseBody, { status: 201 });
}
