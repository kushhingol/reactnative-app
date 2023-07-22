import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { FormField } from "./form-field";
import { InputFieldProps } from "../types";
import { Div, Icon } from "react-native-magnus";

interface IProps extends InputFieldProps {
  SearchListComponent?: ReactNode;
  show?: boolean;
}

export const SearchBarListField = ({
  show,
  formKey,
  handleFormValueChange,
  error,
  value,
  SearchListComponent,
}: IProps) => {
  return (
    <>
      <FormField
        formKey={formKey}
        handleFormValueChange={handleFormValueChange}
        placeholder="Search"
        p={10}
        focusBorderColor="green700"
        error={error}
        value={value}
        style={searchBarStyles.searchBarFormFieldStyles}
        suffix={<Icon name="search" color="gray900" fontFamily="Feather" />}
      />
      {show && (
        <Div shadow="md" bg="white" style={{ borderRadius: 8, zIndex: 999 }}>
          {SearchListComponent}
        </Div>
      )}
    </>
  );
};

const searchBarStyles = StyleSheet.create({
  searchBarFormFieldStyles: {
    position: "relative",
  },
});
