export const imageValidation = (req, res, next) => {
    try {
        if (!req.file || !req.file.mimetype.includes("image")) {
            return res.status(404).json({
                position: "no user image error",
                msg: "There are currently no user image found to perform this function"
            });
        };
    } catch (err) {
        return res.status(500).send({
            position: "Image Validation Error",
            msg: "Error from the server",
        });
    };
    
    next();
};

export const imagesValidation = (req, res, next) => {
    try {
        const images = req.files;
        if (!images) {
            return res.status(404).json({
                position: "no user image error",
                msg: "There are currently no user image found to perform this function"
            });
        };
        for (const i in images) {
            if (!images[i].mimetype.includes("image")) {
                return res.status(404).json({
                    position: "The format error is not an image",
                    msg: `In position ${Number(i) + 1}, the transmitted data is not an image format`
                });
            };
        };
    } catch (err) {
        return res.status(500).send({
            position: "Images Validation Error",
            msg: "Error from the server",
        });
    };

    next();
};