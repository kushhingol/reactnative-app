import { useState } from "react";

interface IParams {
  [key: string]: string | number;
}

export const useForm = (values: IParams) => {
  const [formValues, setFormValues] = useState({
    ...values,
  });

  const handleFormValueChange = (key: string, value: any) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };

  return { formValues, handleFormValueChange, setFormValues };
};
