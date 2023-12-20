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

export const uploadImage = (folder, name, imageData) => {
    const __filePath = `${folder}/${name}-${Date.now()}`;
    const __metadata = {
        contentType: imageData.mimetype
    };

    return new Promise((resolve, rejects) => {
        const __uploadUserImage = firebase.uploadBytesResumable(firebase.ref(firebase.storage, __filePath), imageData.buffer, __metadata);
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