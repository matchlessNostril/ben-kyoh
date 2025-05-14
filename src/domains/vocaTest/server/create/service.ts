import { prisma } from '@/server/db/client';
import { CreateVocaTestRequestType } from './schema';

export async function createVocaTest(user_id: string, request: CreateVocaTestRequestType) {
  // まず作成だけ
  const vocaTest = await prisma.voca_tests.create({
    data: {
      user_id,
      ...request,
    },
  });

  return vocaTest;
}
