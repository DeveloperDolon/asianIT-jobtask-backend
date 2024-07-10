import httpStatus from 'http-status';
import config from '../../config';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;
  payload.photo = '/public/' + req?.file?.filename;

  const result = await UserServices.createUserIntoDB(payload);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User sign up successfully!',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const { refreshToken, accessToken } = await UserServices.loginUserFromDB(
    req.body,
  );

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully!',
    data: { accessToken },
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All users data retrieved successfully!',
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await UserServices.updateUserIntoDB(payload, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully!',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const result = await UserServices.getSingleUserFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single user retrieved successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const result = await UserServices.deleteUserIntoDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully!',
    data: result,
  });
});

export const UserController = {
  createUser,
  loginUser,
  getAllUser,
  updateUser,
  getSingleUser,
  deleteUser,
};
