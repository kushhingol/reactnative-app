import React from "react";
import { Input, InputProps, Div, Text } from "react-native-magnus";
import { InputFieldProps } from "./types";

export const FormField = (props: InputFieldProps) => {
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
