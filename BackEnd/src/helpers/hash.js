const crypto = require('crypto')

export const hashPassword = (input) => {
    const __salt = crypto.randomBytes(16).toString('hex')
    const __hashedPassword = crypto.pbkdf2Sync(input, __salt, 1000, 64, 'sha1').toString('hex')
    return {
        __salt,
        __hashedPassword,
    };
};

export const comparePassword = (hashPassword, salt, rawPassword) => {
    const __hashedRawPassword = crypto.pbkdf2Sync(
        rawPassword,
        salt,
        1000,
        64,
        'sha1'
    ).toString('hex')
    
    return hashPassword === __hashedRawPassword;
};