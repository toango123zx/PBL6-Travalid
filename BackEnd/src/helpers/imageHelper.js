import * as firebase from '../config/firebase.config';

export const deleteImage = (imageURL) => {
    const __desertRef = firebase.ref(firebase.storage, imageURL);

    return new Promise((resolve, reject) => {
        firebase.deleteObject(__desertRef)
            .then(() => resolve(true))
            .catch((error) => {
                reject(false);
            });
    });
};

export const uploadImage = (folder, name, dataImage) => {
    const __filePath = `${folder}/${name}-${Date.now()}`;
    const __metadata = {
        contentType: dataImage.mimetype
    };

    return new Promise((resolve, rejects) => {
        const __uploadUserImage = firebase.uploadBytesResumable(firebase.ref(firebase.storage, __filePath), dataImage.buffer, __metadata);
        __uploadUserImage.on('state_changed',
            (snapshot) => {
                switch (snapshot.state) {
                    case 'paused':
                        rejects(false)
                    case 'running':
                        break;
                };
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
                };
            },
            async () => {
                await firebase.getDownloadURL(__uploadUserImage.snapshot.ref).then(async (imageURL) => {
                    resolve(imageURL);
                });
            }
        );
    });
};

export const uploadImages = (folder, name, dataImages) => {
    const __imageURLs = [];
    const __failUploadImages = [];
    const __promises = [];

    for (const i in dataImages) {
        const __name = `${name}-${i}`;
        __promises.push(uploadImage(folder, __name, dataImages[i]));
    };

    return new Promise((resolve, reject) => {
        Promise.allSettled(__promises)
            .then((values) => {
                for (const i in values) {
                    if (values[i].status === 'fulfilled') {
                        __imageURLs.push(values[i].value);
                    } else {
                        __failUploadImages.push(i);
                    };
                };
                resolve({
                    imageURLs: __imageURLs,
                    failUploadImages: __failUploadImages
                });
            });
    });
};

export const deleteImages = (imageURLs) => {
    const __urlsDeleteFail = [];
    const __promises = [];

    for (const i in imageURLs) {
        __promises.push(deleteImage(imageURLs[i]));
    };

    return new Promise((resolve, reject) => {
        Promise.allSettled(__promises)
            .then((values) => {
                for (const i in values) {
                    if (values[i].status === 'rejected') {
                        __urlsDeleteFail.push(imageURLs[i]);
                    };
                };
                if (__urlsDeleteFail) {
                    resolve(true);
                } else {
                    reject({
                        urlsDeleteFail: __urlsDeleteFail
                    });
                };
            });
    });
};