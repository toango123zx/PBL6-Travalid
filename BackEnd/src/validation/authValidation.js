import * as userService from '../services/userService';

export const userSignUpValidation = (req, res, next) => {
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
};

export const supplierSignUpValidation = ([userSignUpValidation, (req, res, next) => {

    const __tax_id_number = String(req.body.tax_id_number);
    
    if (__tax_id_number.length > 13) {
        return res.status(422).json({
            position: "tax_id_number",
            msg: "Less than or equal to 13 characters",
        });
    };

    next();
}]);

export const adminSignUpValidation = ([userSignUpValidation, (req, res, next) => {
    const __user = req.user;
    const __role = String(req.body.role);
    if (__user.role === "admin" && __role === "admin") {
        return res.status(403).json({
            position: "The role of the creator",
            msg: "The user must have the administrator role to create an administrator account",
        });
    };
    next();
}]);

export const checkDuplicateUser = async (req, res, next) => {
    const __tax_id_number = !(req.body.tax_id_number) ? "" : req.body.tax_id_number.replace(/\s/g, '');
    const __user = await userService.getUser(req.body.username.replace(/\s/g, ''), req.body.email.replace(/\s/g, ''), __tax_id_number);
    if (__user !== null && __tax_id_number) {
        return res.status(409).json({
            position: "username or email or tax id number",
            msg: "already exist",
        });
    };

    if (__user !== null && !(__tax_id_number)) {
        return res.status(409).json({
            position: "username or email",
            msg: "already exist",
        });
    };

    if (!(__tax_id_number)) {
        return next();
    };

    next();
};