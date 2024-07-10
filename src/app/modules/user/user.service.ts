import { PrismaClient } from '@prisma/client';
import TUser, { TLoginUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { createToken } from './user.utils';

const prisma = new PrismaClient();

const createUserIntoDB = async (payload: TUser) => {
  const myPlaintextPassword = payload?.password;
  payload.password = await bcrypt.hash(
    myPlaintextPassword,
    Number(config.bcrypt_salt_rounds as string),
  );

  const result = await prisma.user.create({
    data: payload,
  });

  return result;
};

const loginUserFromDB = async (payload: TLoginUser) => {
  const user = await prisma.user.findUnique({
    where: { email: payload?.email },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'Your is not exist!');
  }

  if (user?.isDelete === true) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Your account is blocked!');
  }

  const isMatched = await bcrypt.compare(payload?.password, user?.password);

  if (!isMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'User password is not matched!');
  }

  const jwtPayload = {
    userId: user?.id,
    role: user?.role,
  };

  const refreshToken = await createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expired_in as string,
  );

  const accessToken = await createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expired_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const getAllUsersFromDB = async () => {
  const result = await prisma.user.findMany({
    where: { isDelete: false },
  });

  return result;
};

const updateUserIntoDB = async (payload: Partial<TUser>, id: string) => {
  const result = await prisma.user.update({
    where: { id: id },
    data: payload,
  });

  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: { id: id },
  });

  return result;
};

const deleteUserIntoDB = async (id: string) => {
  const result = await prisma.user.update({
    where: { id: id },
    data: { isDelete: true },
  });

  return result;
};

export const UserServices = {
  createUserIntoDB,
  loginUserFromDB,
  getAllUsersFromDB,
  updateUserIntoDB,
  getSingleUserFromDB,
  deleteUserIntoDB,
};
