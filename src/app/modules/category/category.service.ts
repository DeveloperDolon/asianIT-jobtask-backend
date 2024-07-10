import { Category, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createCategoryIntoDB = async (payload: Category) => {
  const result = prisma.category.create({
    data: payload,
  });

  return result;
};

export const CategoryServices = { createCategoryIntoDB };
