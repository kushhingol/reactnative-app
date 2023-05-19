import React from "react";
import { Input, InputProps } from "react-native-magnus";

interface IProps extends InputProps {
  formKey: string;
  handleFormValueChange: (key: string, value: any) => void;
}

export const FormField = (props: IProps) => {
  return (
    <Input
      {...props}
      onChange={(event) =>
        props.handleFormValueChange(props.formKey, event.nativeEvent.text)
      }
    />
  );
};
