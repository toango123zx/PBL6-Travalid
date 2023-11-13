import jwt from 'jsonwebtoken';

import * as envApp from '../config/envApp';

let listRefreshToken = [];

export const createSignInToken = (payload) => {
    const __token = jwt.sign(payload, envApp.jwtSecretAccessKey, {
        expiresIn: envApp.expiresInAccessKey
    });
    const __refreshToken = jwt.sign(payload, envApp.jwtSecretRefreshKey, {
        expiresIn: envApp.expiresInRefreshKey
    });

    listRefreshToken.push(__refreshToken);

    return {
        __token,
        __refreshToken
    };
};