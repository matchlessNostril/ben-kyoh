import { prisma } from '@/server/db/client';
import { CreateVocaRequestType } from './schema';

export async function createVoca(user_id: string, request: CreateVocaRequestType) {
  // まず作成だけ
  const voca = await prisma.voca_files.create({
    data: {
      user_id,
      ...request,
    },
  });

  return voca;
}
