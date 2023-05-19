export const validatePhoneNumber = (values: string) =>
  values.length === 10 && /[0-9]/i.test(values);

const emailValidatorRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const validateEmailAddress = (value: string) =>
  emailValidatorRegex.test(value);
