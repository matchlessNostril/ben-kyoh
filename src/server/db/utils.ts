import { prisma } from '@/server/db/client';

type ModelMap = Record<string, string>;

export function getPrismaModel(modelMap: ModelMap, type: string) {
  const model = modelMap[type];
  if (!model) throw new Error(`Invalid type: ${type}`);
  return model;
}

export async function prismaCreate<T extends Record<string, unknown>>(
  modelMap: ModelMap,
  type: string,
  data: T,
) {
  const model = getPrismaModel(modelMap, type);
  // @ts-expect-error - Prisma model names are dynamically accessed
  return prisma[model].create({ data });
}

export async function prismaFindUnique<T extends Record<string, unknown>>(
  modelMap: ModelMap,
  type: string,
  where: T,
) {
  const model = getPrismaModel(modelMap, type);
  // @ts-expect-error - Prisma model names are dynamically accessed
  return prisma[model].findUnique({ where });
}

export async function prismaFindMany<T extends Record<string, unknown>>(
  modelMap: ModelMap,
  type: string,
  where: T,
) {
  const model = getPrismaModel(modelMap, type);
  // @ts-expect-error - Prisma model names are dynamically accessed
  return prisma[model].findMany({ where });
}
