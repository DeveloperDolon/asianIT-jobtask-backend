import { Category, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createCategoryIntoDB = async (payload: Category) => {
  const result = await prisma.category.create({
    data: payload,
  });

  return result;
};

const getAllCategoryFromDB = async () => {
  const result = await prisma.category.findMany({
    where: { isDelete: false },
  });

  return result;
};

const getSingleCategoryFromDB = async (id: string) => {
  const result = await prisma.category.findUnique({
    where: { id },
  });

  return result;
};

const deleteCategoryIntoDB = async (id: string) => {
  const result = await prisma.category.update({
    where: { id },
    data: { isDelete: true },
  });

  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoryFromDB,
  getSingleCategoryFromDB,
  deleteCategoryIntoDB,
};
