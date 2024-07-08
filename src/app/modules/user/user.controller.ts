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

export const UserController = { createUser };
