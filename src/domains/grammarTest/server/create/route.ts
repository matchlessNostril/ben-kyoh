import { NextRequest, NextResponse } from 'next/server';
import { resourceResponseSchema } from '@/server/base/schemas/resource';
import { createGrammarTestRequestSchema } from './schema';
import { createGrammarTest } from './service';
import { checkRequestBody, checkAuth } from '@/server/base/utils';

export async function POST(req: NextRequest) {
  const parsed = await checkRequestBody(req, createGrammarTestRequestSchema);
  if (!parsed.success) return parsed.response;

  const auth = await checkAuth();
  if (!auth.success) return auth.response;

  const grammarTest = await createGrammarTest(auth.user!.id, parsed.data);

  const responseBody = resourceResponseSchema.parse(grammarTest);
  return NextResponse.json(responseBody, { status: 201 });
}
