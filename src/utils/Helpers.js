import * as validator from "validator";

export const validateLoginForm = (email, password) => {
    if (!email || !password) {
        return false
    }

    if (!validator.isEmail(email)) {
        return false
    }

    return true;
}
