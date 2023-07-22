import { useState, useMemo, useCallback } from "react";

type FormControlConfiguration = {
  value: string | number | null;
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

type FormValues = {
  [key: keyof IParams]: string;
};

export const useForm = (formConfiguration: IParams) => {
  const [formConfigurationObj, setFormConfigurationObj] = useState({
    ...formConfiguration,
  });

  const handleFormValueChange = (key: string, value: any) => {
    let errorString = "";
    const validator = formConfigurationObj?.[key]?.validator;
    if (validator) {
      errorString = validator(value);
      23;
    }
    setFormConfigurationObj({
      ...formConfigurationObj,
      [key]: {
        ...formConfigurationObj[key],
        value: value,
        error: errorString,
      },
    });
  };

  const isFormComplete = useMemo(() => {
    const requiredFields = Object.values(formConfigurationObj).filter(
      (formFieldConfig) => formFieldConfig.required
    );
    const requiredFieldsHasValue = requiredFields.filter(
      (formField) => formField.value && !formField.error
    );
    return requiredFieldsHasValue.length == requiredFields.length;
  }, [formConfigurationObj]);

  const seedValues = useCallback((seedFormValuesObj: FormSeedValuesType) => {
    let formValuesState = { ...formConfigurationObj };
    Object.keys(seedFormValuesObj).forEach((formKey) => {
      formValuesState = {
        ...formValuesState,
        [formKey]: {
          ...formValuesState[formKey],
          value:
            seedFormValuesObj[formKey].valueOf() ?? formValuesState[formKey],
        },
      };
    });
    setFormConfigurationObj(formValuesState);
  }, []);

  const reset = useCallback(() => {
    const resetForm: IParams = {};
    for (let key in formConfigurationObj) {
      const obj = formConfigurationObj[key];
      obj.value = null;
      resetForm[key] = obj;
    }
    setFormConfigurationObj(resetForm);
  }, []);

  const getFormFieldsError = useCallback(
    (formKey: keyof IParams) => {
      return formConfigurationObj?.[formKey]?.error ?? "";
    },
    [formConfigurationObj]
  );

  const formValues = useMemo(() => {
    let formValuesObj: FormValues = {};
    Object.keys(formConfigurationObj).forEach((formKey) => {
      formValuesObj = {
        ...formValuesObj,
        [formKey]: formConfigurationObj[formKey].value?.toString() ?? "",
      };
    });
    return formValuesObj;
  }, [formConfigurationObj]);

  return {
    reset,
    formValues,
    handleFormValueChange,
    setFormConfigurationObj,
    seedValues,
    isFormComplete,
    getFormFieldsError,
  };
};
