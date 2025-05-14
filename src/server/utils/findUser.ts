import { prisma } from '@/server/db/client';

export async function findUserByNickname(user_nickname: string) {
  const user = await prisma.users.findUnique({
    where: { nickname: user_nickname },
  });
  if (!user) throw new Error(`User not found: ${user_nickname}`);
  return user;
}
