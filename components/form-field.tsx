import React from "react";
import { Input, InputProps, Div, Text } from "react-native-magnus";

interface IProps extends InputProps {
  formKey: string;
  handleFormValueChange: (key: string, value: any) => void;
  error?: string;
}

export const FormField = (props: IProps) => {
  return (
    <>
      <Input
        {...props}
        onChange={(event) =>
          props.handleFormValueChange(props.formKey, event.nativeEvent.text)
        }
      />
      {props.error && (
        <Div h={20}>
          <Div position="absolute" top={0} zIndex={1}>
            <Text color="red500" fontSize="md" mt="sm">
              {props.error}
            </Text>
          </Div>
        </Div>
      )}
    </>
  );
};
