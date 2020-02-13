import { EMAIL_REGEX } from "../constants";
import { validatePassword } from "../../../util/validatePassword.util";
import { FormErrorTypes } from "../enums/FormErrorTypes.enum";

export const required = (value: string): { [key: string]: boolean } => {
    return value && value.trim() ? { [FormErrorTypes.required]: null } : { [FormErrorTypes.required]: true };
}

export const email = (value: string): { [key: string]: boolean } | null => {
    return !(new RegExp(EMAIL_REGEX).test(value)) ? { [FormErrorTypes.email]: true } : { [FormErrorTypes.email]: null }
};

export const passwordSecurity = (value: string): { [key: string]: string[] } | null => {
    const errors = value && value.trim ? validatePassword(value) : [];
    return errors.length ? { [FormErrorTypes.passwordSecurity]: errors } : { [FormErrorTypes.passwordSecurity]: null };
}

const comparePasswordsAndGetError = () => {
    let passwordFieldValue, confirmPasswordFieldValue;
    return (confirmPasswordField: boolean, value: string) => {

        if (confirmPasswordField) {
            confirmPasswordFieldValue = value;
        } else {
            passwordFieldValue = value;
        }

        return confirmPasswordField && passwordFieldValue !== confirmPasswordFieldValue ?
            { passwordMatch: true } : { passwordMatch: null }
    }
}

const getPasswordMatchErrors = comparePasswordsAndGetError();

export const passwordMatch = (confirmPasswordField?: boolean) => {
    return (value: string) => {
        return getPasswordMatchErrors(confirmPasswordField, value);
    }
}


