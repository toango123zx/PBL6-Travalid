import * as userService from '../services/userService';
import * as hash from '../helpers/hash';
import * as firebase from '../config/firebase.config';
import * as envApp from '../config/envApp';
import * as authHelper from '../helpers/authHelper';

export const getUser = async (req, res) => {
    const __id_user = Number(req.params.id)
    const __role = String(req.body.role);
    const __user = await userService.getInfoUser(__id_user, __role);
    if (!__user) {
        return res.status(500).json({
            position: "role user",
            msg: "The user's role does not match the id passed in"
        });
    };
    return res.status(200).json({
        data: __user
    });
};

export const getMyProfile = async (req, res) => {
    let __user = req.user;
    __user = await userService.getInfoUser(__user.id_user, __user.role);
    return res.status(200).json({
        data: __user
    });
};

export const getUsers = async (req, res) => {
    const __users = await userService.getUsers();
    if (!__users) {
        return res.status(500).json({
            position: "prisma query user",
            msg: "Users data query is unavailable due to server"
        });
    };
    return res.status(200).json({
        data: __users
    });
};

export const updateMyProfile = async (req, res) => {
    const __user = req.user;
    const __updateUserInfo = req.updateInfoUser;
    if (!__user.email) {
        const __emailUser = await userService.getUser(undefined, __updateUserInfo.email);
        if (__emailUser && __emailUser.id_user !== __user.id_user) {
            return res.status(409).json({
                position: "email",
                msg: "already exist",
            });
        };
    };
    const __newUser = await userService.updateUser(__user.id_user, __updateUserInfo)
    if (!__newUser) {
        return res.status(500).json({
            position: "prisma update user",
            msg: "Erorr foramt information user"
        });
    };
    __user.name = __newUser.name;
    __user.date_of_birth = __newUser.date_of_birth;
    const { __token, __refreshToken } = authHelper.createSignInToken(__user);
    res.cookie('refreshToken', __refreshToken, {
        httpOnly: true
    });
    return res.status(200).json({
        data: __user,
        token: __token
    });
};

export const updateUserPassword = async (req, res) => {
    const __user = await userService.getUser(req.user.username);

    if (!(hash.comparePassword(__user.password, __user.salt, req.body.currentPassword))) {
        return res.status(401).json({
            position: "password",
            msg: "Invalid password",
        });
    };

    const { __salt, __hashedPassword } = hash.hashPassword(req.body.newPassword);
    const __updateUserInfo = {
        salt: __salt,
        password: __hashedPassword
    };

    if (!(await userService.updateUser(__user.id_user, __updateUserInfo))) {
        return res.status(500).json({
            position: "prisma update user",
            msg: "Erorr foramt information user"
        });
    };

    return res.sendStatus(200);
};

export const updateUserImage = async (req, res) => {
    const __user = req.user;
    const __imageData = req.file.buffer;
    if (__user.image !== envApp.defaultUserImage) {
        const __desertRef = firebase.ref(firebase.storage, __user.image);
        const __checkDeleteUserImage = firebase.deleteObject(__desertRef)
            .catch((error) => {
                return false;
            });
    }
    const __filePath = `avata/avata-${__user.name}-${Date.now()}`;
    const __metadata = {
        contentType: req.file.mimetype
    };
    const __uploadUserImage = firebase.uploadBytesResumable(firebase.ref(firebase.storage, __filePath), __imageData, __metadata);

    // Listen for state changes, errors, and completion of the upload.
    __uploadUserImage.on('state_changed',
        (snapshot) => {
            switch (snapshot.state) {
                case 'paused':
                    return res.status(500).json({
                        msg: "The process of uploading photos to firebase is paused",
                        position: "Error from the server"
                    });
                case 'running':
                    break;
            }
        },
        (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        async () => {
            await firebase.getDownloadURL(__uploadUserImage.snapshot.ref).then(async (imageURL) => {
                if (!await userService.updateUser(__user.id_user, { image: imageURL })) {
                    return res.status(500).json({
                        msg: "change url user image with prisma",
                        position: "Error from the server"
                    });
                };
                __user.image = imageURL;
                const { __token, __refreshToken } = authHelper.createSignInToken(__user);
                res.cookie('refreshToken', __refreshToken, {
                    httpOnly: true
                });
                return res.status(200).json({
                    data: __user,
                    token: __token
                });
            });
        }
    );
};