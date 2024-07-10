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

const getUsersProductFromDB = async (userId: string) => {
  const result = await prisma.product.findMany({
    where: { userId: userId, isDeleted: false },
  });

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await prisma.product.update({
    where: { id },
    data: { isDeleted: true },
  });

  return result;
};

const updateProductIntoDB = async (payload: Partial<Product>, id: string) => {
  const result = await prisma.product.update({
    where: { id },
    data: payload,
  });

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  getUsersProductFromDB,
  deleteProductFromDB,
  updateProductIntoDB,
};
