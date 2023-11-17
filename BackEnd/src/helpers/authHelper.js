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

export const verifyToken = (token, refreshToken) => {
    if (listRefreshToken.includes(refreshToken)) {
        return jwt.verify(token, envApp.jwtSecretAccessKey, (e, __user) => {
            return {
                data: __user,
                error: e,
            };
        });
    } else {
        return {
            error: { name: "TokenNotInitializedError" }
        };
    };
};

export const refreshSignInToken = (refreshToken) => {
    if (!(listRefreshToken.includes(refreshToken))) {
        return {
            error: { name: "TokenNotInitializedError" }
        };
    };

    return jwt.verify(refreshToken, envApp.jwtSecretRefreshKey, (e, __user) => {
        if (e) {
            return {
                error: e,
            };
        };
        delete __user.iat;
        delete __user.exp;
        listRefreshToken = listRefreshToken.filter((token) => token !== refreshToken);
        const { __token, __refreshToken } = createSignInToken(__user);

        return {
            __token,
            __refreshToken
        };
    });
};