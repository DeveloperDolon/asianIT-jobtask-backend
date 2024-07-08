import { PrismaClient } from '@prisma/client';
import TUser from './user.interface';

const prisma = new PrismaClient();

const createUserIntoDB = async (payload: TUser) => {
  const result = await prisma.user.create({
    data: payload,
  });

  return result;
};

export const UserServices = { createUserIntoDB };
