import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-magnus";
import { useForm } from "../../../hooks/useForm";
import { FormField } from "../../../components/form-field";
import { useAddClientForm } from "./use-add-client-form";

interface IProps {
  buttonColor: string;
}

export const AddClientForm = ({ buttonColor }: IProps) => {
  const {
    formValues,
    handleFormValueChange,
    isFormComplete,
    getFormFieldsError,
  } = useAddClientForm();

  const handleSubmitAddClient = () => {
    console.log(formValues);
  };

  return (
    <View style={styles.container}>
      <FormField
        formKey="clientName"
        handleFormValueChange={handleFormValueChange}
        placeholder="Client Name"
        p={10}
        focusBorderColor="green700"
        error={getFormFieldsError("clientName")}
      />
      <FormField
        formKey="address1"
        handleFormValueChange={handleFormValueChange}
        placeholder="Address 1"
        p={10}
        mt={16}
        focusBorderColor="green700"
        error={getFormFieldsError("address1")}
      />
      <FormField
        formKey="address2"
        handleFormValueChange={handleFormValueChange}
        placeholder="Address 2"
        p={10}
        mt={16}
        focusBorderColor="green700"
        error={getFormFieldsError("address2")}
      />
      <FormField
        formKey="city"
        handleFormValueChange={handleFormValueChange}
        placeholder="City"
        p={10}
        mt={16}
        focusBorderColor="green700"
        error={getFormFieldsError("city")}
      />
      <FormField
        formKey="state"
        handleFormValueChange={handleFormValueChange}
        placeholder="State"
        p={10}
        mt={16}
        focusBorderColor="green700"
        error={getFormFieldsError("state")}
      />
      <FormField
        formKey="pinCode"
        handleFormValueChange={handleFormValueChange}
        placeholder="Pin Code"
        p={10}
        mt={16}
        focusBorderColor="green700"
        keyboardType="number-pad"
        error={getFormFieldsError("pinCode")}
      />
      <FormField
        formKey="phoneNumber"
        handleFormValueChange={handleFormValueChange}
        placeholder="Phone Number"
        p={10}
        mt={16}
        focusBorderColor="green700"
        keyboardType="number-pad"
        error={getFormFieldsError("phoneNumber")}
      />
      <FormField
        formKey="email"
        handleFormValueChange={handleFormValueChange}
        placeholder="Email"
        p={10}
        mt={16}
        focusBorderColor="green700"
        keyboardType="email-address"
        error={getFormFieldsError("email")}
      />

      <Button
        style={styles.button}
        mt="lg"
        px="xl"
        bg={buttonColor}
        color="white"
        onPress={handleSubmitAddClient}
        disabled={isFormComplete}
      >
        Add Client
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 24,
  },
  button: {
    width: "100%",
  },
});
