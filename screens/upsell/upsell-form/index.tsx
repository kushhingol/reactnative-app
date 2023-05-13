import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Input,
  Text,
  Div,
  useTheme,
  Button,
} from "react-native-magnus";
import { StyleSheet, View } from "react-native";
import { FormField } from "../../../components/form-field";
import { useForm } from "../../../hooks/useForm";

const defaultFormValue = {
  clientName: "",
  phoneNumber: "",
  email: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  pinCode: "",
  modelNumber: "",
  serialNumber: "",
  quotedPrice: "",
  sellingPrice: "",
  buybackPrice: "",
};

export const UpsellForm = () => {
  const [isBuyback, setIsBuyback] = useState<boolean>(false);

  const { formValues, handleFormValueChange, setFormValues } =
    useForm(defaultFormValue);

  const handleBuybackCheck = () => setIsBuyback((buyback) => !buyback);

  const handleSubmit = () => console.log(formValues);

  useEffect(() => {
    setFormValues(defaultFormValue);
  }, []);

  return (
    <View style={styles.container}>
      <FormField
        formKey="clientName"
        handleFormValueChange={handleFormValueChange}
        placeholder="Client Name"
        p={10}
        focusBorderColor="green700"
      />
      <FormField
        formKey={"phoneNumber"}
        handleFormValueChange={handleFormValueChange}
        placeholder="Phone number"
        p={10}
        mt={10}
        focusBorderColor="green700"
        keyboardType="numeric"
      />
      <FormField
        formKey="email"
        handleFormValueChange={handleFormValueChange}
        placeholder="Email"
        p={10}
        mt={10}
        focusBorderColor="green700"
        keyboardType="email-address"
      />
      <FormField
        formKey="address1"
        handleFormValueChange={handleFormValueChange}
        placeholder="Address 1"
        p={10}
        mt={10}
        focusBorderColor="green700"
      />
      <FormField
        formKey="address2"
        handleFormValueChange={handleFormValueChange}
        placeholder="Address 2"
        p={10}
        mt={10}
        focusBorderColor="green700"
      />
      <FormField
        formKey="city"
        handleFormValueChange={handleFormValueChange}
        placeholder="City"
        p={10}
        mt={10}
        focusBorderColor="green700"
      />
      <FormField
        formKey="state"
        handleFormValueChange={handleFormValueChange}
        placeholder="State"
        p={10}
        mt={10}
        focusBorderColor="green700"
      />

      <FormField
        formKey="pinCode"
        handleFormValueChange={handleFormValueChange}
        placeholder="Pin code"
        p={10}
        mt={10}
        keyboardType="numeric"
        keyboardAppearance="default"
        focusBorderColor="green700"
      />

      <FormField
        formKey="modelNumber"
        handleFormValueChange={handleFormValueChange}
        placeholder="Model Number"
        p={10}
        mt={10}
        keyboardAppearance="default"
        focusBorderColor="green700"
      />

      <FormField
        formKey="serialNumber"
        handleFormValueChange={handleFormValueChange}
        placeholder="Serial Number"
        p={10}
        mt={10}
        keyboardAppearance="default"
        focusBorderColor="green700"
      />

      <FormField
        formKey="quotedPrice"
        handleFormValueChange={handleFormValueChange}
        placeholder="Quoted Price"
        p={10}
        mt={10}
        keyboardType="numeric"
        keyboardAppearance="default"
        focusBorderColor="green700"
      />

      <FormField
        formKey="sellingPrice"
        handleFormValueChange={handleFormValueChange}
        placeholder="Selling Price"
        p={10}
        mt={10}
        keyboardType="numeric"
        keyboardAppearance="default"
        focusBorderColor="green700"
      />

      <Div mt={10} flexDir="row">
        <Checkbox value={isBuyback} onChecked={handleBuybackCheck} />
        <Text ml={12} fontWeight="600">
          Buy back?
        </Text>
      </Div>

      {isBuyback && (
        <FormField
          formKey="buybackPrice"
          handleFormValueChange={handleFormValueChange}
          placeholder="Buyback Price"
          p={10}
          mt={10}
          keyboardType="numeric"
          keyboardAppearance="default"
          focusBorderColor="green700"
        />
      )}

      <Button mt={26} mb={36} style={styles.button} onPress={handleSubmit}>
        Add New Sell
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  button: {
    width: "100%",
    padding: 0,
    borderRadius: 45,
  },
});
