const StringValidation = (string: string) => {
    let validate;
    let stringValidation = /^[a-zA-Z0-9]+$/;
    let i: number;
    for (i = 0; i < string.length; i++) {
        if (stringValidation.test(string.charAt(i))) {
            validate = true;
            break;
        } else {
            validate = false;
        }
    }
    return validate;
};
const checkEmail = (value: string) => {
    const condition = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/);
    return condition.test(value);
};
const checkPassword = (value: string) => {
    const condition = new RegExp(/.{6,}$/);
    return condition.test(value);
};
const checkNumber = (value: string) => {
    const condition = new RegExp(/^[0-9-]{10}$/);
    return condition.test(value);
};
const checkNumeric = (value: string) => {
    const condition = new RegExp(/^[0-9 .]+$/);
    return condition.test(value);
};

const checkDecimal = (value: string) => {
    const condition = new RegExp(/^\d+(\.\d+)?$/);
    return condition.test(value);
};

const checkPswd = (value: string) => {
    const condition = new RegExp(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).*$/,
    );
    return condition.test(value);
};
const checkName = (value: string) => {
    const condition = new RegExp(/^[A-Za-z0-9 ]+$/);
    return condition.test(value);
};
const checkString = (value: string) => {
    const condition = new RegExp(/^[a-zA-Z ]+$/);
    return condition.test(value);
};
const checkMobileNumer = (value: string) => {
    const condition = new RegExp(/^(?!0000)[0-9]{5,19}$/);
    return condition.test(value);
};
const isValidUrl = (url: string): boolean => {
    const urlRegex =
        /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g;
    const result = url.match(urlRegex);

    return result !== null;
};
export {
    StringValidation,
    checkEmail,
    checkPassword,
    checkNumber,
    checkPswd,
    checkName,
    checkString,
    checkNumeric,
    checkDecimal,
    checkMobileNumer,
    isValidUrl,
};
