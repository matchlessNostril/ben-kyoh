import { prisma } from '@/server/db/client';
import { CreateGrammarRequestType } from './schema';

export async function createGrammar(user_id: string, request: CreateGrammarRequestType) {
  // まず作成だけ
  const grammar = await prisma.grammar_files.create({
    data: {
      user_id,
      ...request,
    },
  });

  return grammar;
}
