import { prisma } from '@/server/db/client';
import { CreateGrammarTestRequestType } from './schema';

export async function createGrammarTest(user_id: string, request: CreateGrammarTestRequestType) {
  // まず作成だけ
  const grammarTest = await prisma.grammar_tests.create({
    data: {
      user_id,
      ...request,
    },
  });

  return grammarTest;
}
