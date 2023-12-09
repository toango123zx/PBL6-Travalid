import exp from 'constants';
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

export const port = Number(process.env.PORT) || 3000;
export const LimitGetProductTraveller = Number(process.env.LIMIT_GET_PRODUCT_TRAVELLER);
export const LimitGetProductSupplier = Number(process.env.LIMIT_GET_PRODUCT_SUPPLIER);
export const LimitProductService = Number(process.env.LIMIT_PRODUCT_SERVICE);
export const expiresInAccessKey = String(process.env.EXPIRES_IN_ACCESS_KEY);
export const expiresInRefreshKey = String(process.env.EXPIRES_IN_RESFRESH_KEY);
export const jwtSecretAccessKey = String(process.env.JWT_SECRET_ACCESS_KEY);
export const jwtSecretRefreshKey = String(process.env.JWT_SECRET_REFRESH_KEY);
export const defaultUserImage = String(process.env.DEFAULT_USER_IMAGE);
export const defaultProductImage = String(process.env.DEFAULT_PRODUCT_IMAGE);