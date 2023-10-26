const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const travellerSignUpValidation = (req, res, next) => {
    const { name, email, gender, date_of_birth, phone_number } = req.body;

    const __notCharName = /[\d~`!@#$%^&*()_\-+={[}\]|;:<,>.?/]+/;
    const __charEmail = /^[a-zA-Z0-9._%-]+@gmail\.com$/;
    const __charGender = /^(?:true|false|1|0)$/;
    const __charPhoneNumber = /^[0-9]{10}$/;

    if (__notCharName.test(name)) {
        return res.status(422).json({
            position: "name",
            msg: "Names that contain numbers or special characters"
        });
    }
    if (!(__charEmail.test(email))) {
        return res.status(422).json({
            position: "email",
            msg: "as sample: user1@gmail.com",
        });
    }
    if (!(__charGender.test(gender))) {
        return res.status(422).json({
            position: "gender",
            msg: "as sample: true or false or 1 or 0",
        });
    }
    if (new Date(date_of_birth) == "Invalid Date") {
        return res.status(422).json({
            position: "date_of_birth",
            msg: "Invalid date and as sample: yy-mm-dd",
        });
    }
    if (new Date(date_of_birth) >= new Date()) {
        return res.status(422).json({
            position: "date_of_birth",
            msg: "date_of_birth greater than the current date",
        });
    }
    if (!(__charPhoneNumber.test(phone_number))) {
        return res.status(422).json({
            position: "phone number",
            msg: "as sample: 0000000000",
        });
    }

    next();
}

export const checkDuplicateUsernames = async (req, res, next) => {
    const __user = await prisma.user.findFirst({
        select: {
            password: true,
            salt: true,
            role: true,
            email: true,
            status: true,
        },
        where: {
            OR: [
                {
                    username: req.body.username.replace(/\s/g, ''),
                },
                {
                    email: req.body.email,
                }
            ]
        }
    })

    if (__user !== null) {
        return res.status(409).json({
            position: "username or email",
            msg: "already exist",
        });
    }

    next();
}