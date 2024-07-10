import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

const createProductIntoDB = async (payload: Product) => {
  const result = await prisma.product.create({
    data: payload,
  });

  return result;
};

const getAllProductFromDB = async () => {
  const result = await prisma.product.findMany({
    where: { isDeleted: false },
  });

  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await prisma.product.findUnique({
    where: { id },
  });

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
};
