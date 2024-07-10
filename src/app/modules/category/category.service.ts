import { Category, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createCategoryIntoDB = async (payload: Category) => {
  const result = prisma.category.create({
    data: payload,
  });

  return result;
};

const getAllCategoryFromDB = async () => {
  const result = prisma.category.findMany({
    where: { isDelete: false },
  });

  return result;
};

export const CategoryServices = { createCategoryIntoDB, getAllCategoryFromDB };
