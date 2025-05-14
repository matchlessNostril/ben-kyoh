import { NextRequest, NextResponse } from 'next/server';
import { resourceResponseSchema } from '@/server/schemas/createResource';
import { createGrammarRequestSchema } from './schema';
import { createGrammar } from './service';
import { checkRequestBody, checkAuth } from '@/server/utils';

export async function POST(req: NextRequest) {
  const parsed = await checkRequestBody(req, createGrammarRequestSchema);
  if (!parsed.success) return parsed.response;

  const auth = await checkAuth();
  if (!auth.success) return auth.response;

  const grammar = await createGrammar(auth.user!.id, parsed.data);

  const responseBody = resourceResponseSchema.parse(grammar);
  return NextResponse.json(responseBody, { status: 201 });
}
