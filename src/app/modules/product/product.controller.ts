import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product create successfully!',
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Products data retrieved successfully!',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getSingleProductFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single product data retrieved successfully!',
    data: result,
  });
});

const getUsersProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getUsersProductFromDB(req.params.userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users all product data retrieved successfully!',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.deleteProductFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully!',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.updateProductIntoDB(
    req.body,
    req.params.id,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully!',
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  getUsersProduct,
  deleteProduct,
  updateProduct,
};
