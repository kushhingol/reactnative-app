import { useState, useMemo, useCallback } from "react";

type FormControlConfiguration = {
  value: string | number;
  required?: boolean;
  validator?: (value: string | number) => string;
  error?: string;
};

type FormSeedValuesType = {
  [key: keyof IParams]: string | number;
};

type IParams = {
  [key: string]: FormControlConfiguration;
};

export const useForm = (formConfiguration: IParams) => {
  const [formValues, setFormValues] = useState({
    ...formConfiguration,
  });

  const handleFormValueChange = (key: string, value: any) => {
    let errorString = "";
    const validator = formValues?.[key]?.validator;
    if (validator) {
      errorString = validator(value);
      23;
    }
    setFormValues({
      ...formValues,
      [key]: {
        ...formValues[key],
        value: value,
        error: errorString,
      },
    });
  };

  const isFormComplete = useMemo(() => {
    const requiredFields = Object.values(formValues).filter(
      (formFieldConfig) => formFieldConfig.required
    );
    const requiredFieldsHasValue = requiredFields.filter(
      (formField) => formField.value && !formField.error
    );
    return requiredFieldsHasValue.length == requiredFields.length;
  }, [formValues]);

  const seedValues = useCallback((seedFormValuesObj: FormSeedValuesType) => {
    let formValuesState = { ...formValues };
    Object.keys(seedFormValuesObj).forEach((formKey) => {
      formValuesState = {
        ...formValuesState,
        [formKey]: {
          ...formValuesState[formKey],
          value: seedFormValuesObj[formKey].valueOf(),
        },
      };
    });
    setFormValues(formValuesState);
  }, []);

  const getFormFieldsError = useCallback(
    (formKey: keyof IParams) => {
      return formValues?.[formKey]?.error ?? "";
    },
    [formValues]
  );

  return {
    formValues,
    handleFormValueChange,
    setFormValues,
    seedValues,
    isFormComplete,
    getFormFieldsError,
  };
};
