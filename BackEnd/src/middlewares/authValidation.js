const { prisma } = require('../config/prismaDatabase');

export const travellerSignUpValidation = (req, res, next) => {
    const { name, email, role, gender, date_of_birth, phone_number } = req.body;

    const __notCharName = /[\d~`!@#$%^&*()_\-+={[}\]|;:<,>.?/]+/;
    const __charEmail = /^[a-zA-Z0-9._%-]+@gmail\.com$/;
    const __charGender = /^(?:true|false|1|0)$/;
    const __charPhoneNumber = /^[0-9]{10}$/;

    if (__notCharName.test(name)) {
        return res.status(422).json({
            position: "name",
            msg: "Names that contain numbers or special characters"
        });
    };
    if (!(__charEmail.test(email))) {
        return res.status(422).json({
            position: "email",
            msg: "as sample: user1@gmail.com",
        });
    };
    if (!role && (role === "traveller" || role === "travel_supplier" ||
        role === "hotel_supplier" || role === "restaurant_supplier" ||
        role === "transportation_supplier" || role === "admin")) {
        return res.sendStatus(500);
    };
    if (!(__charGender.test(gender))) {
        return res.status(422).json({
            position: "gender",
            msg: "as sample: true or false or 1 or 0",
        });
    };
    if (new Date(date_of_birth) == "Invalid Date") {
        return res.status(422).json({
            position: "date_of_birth",
            msg: "Invalid date and as sample: yy-mm-dd",
        });
    };
    if (new Date(date_of_birth) >= new Date()) {
        return res.status(422).json({
            position: "date_of_birth",
            msg: "date_of_birth greater than the current date",
        });
    };
    if (!(__charPhoneNumber.test(phone_number))) {
        return res.status(422).json({
            position: "phone number",
            msg: "as sample: 0000000000",
        });
    };

    next();
}

export const supplierSignUpValidation = ([travellerSignUpValidation, (req, res, next) => {

    const __tax_id_number = req.body.tax_id_number;

    if (String(__tax_id_number).length > 13) {
        return res.status(422).json({
            position: "tax_id_number",
            msg: "Less than or equal to 13 characters",
        });
    };

    next();
}]);

export const checkDuplicateUser = async (req, res, next) => {

    const __tax_id_number = req.body.tax_id_number;

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
    });

    if (__user !== null) {
        return res.status(409).json({
            position: "username or email",
            msg: "already exist",
        });
    };

    if (!(__tax_id_number)) {
        return next();
    };

    const __info_supplier = await prisma.info_Supplier.findFirst({
        select: {
            id_info_supplier: true,
        },
        where: {
            tax_id_number: __tax_id_number,
        }
    });

    if (__info_supplier !== null) {
        return res.status(409).json({
            position: "tax id number",
            msg: "already exist",
        });
    };

    next();
}