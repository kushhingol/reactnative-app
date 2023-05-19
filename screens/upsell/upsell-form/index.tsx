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
import { useUpsellForm } from "./use-upsell-form";

interface IProps {
  buttonColor: string;
}

export const UpsellForm = ({ buttonColor }: IProps) => {
  const [isBuyback, setIsBuyback] = useState<boolean>(false);

  const {
    formValues,
    handleFormValueChange,
    getFormFieldsError,
    isFormComplete,
  } = useUpsellForm();

  const handleBuybackCheck = () => setIsBuyback((buyback) => !buyback);

  const handleSubmit = () => console.log(formValues);

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
        formKey={"phoneNumber"}
        handleFormValueChange={handleFormValueChange}
        placeholder="Phone number"
        p={10}
        mt={16}
        focusBorderColor="green700"
        keyboardType="numeric"
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
        placeholder="Pin code"
        p={10}
        mt={16}
        keyboardType="numeric"
        keyboardAppearance="default"
        focusBorderColor="green700"
        error={getFormFieldsError("pinCode")}
      />

      <FormField
        formKey="modelNumber"
        handleFormValueChange={handleFormValueChange}
        placeholder="Model Number"
        p={10}
        mt={16}
        keyboardAppearance="default"
        focusBorderColor="green700"
        error={getFormFieldsError("modelNumber")}
      />

      <FormField
        formKey="serialNumber"
        handleFormValueChange={handleFormValueChange}
        placeholder="Serial Number"
        p={10}
        mt={16}
        keyboardAppearance="default"
        focusBorderColor="green700"
        error={getFormFieldsError("serialNumber")}
      />

      <FormField
        formKey="quotedPrice"
        handleFormValueChange={handleFormValueChange}
        placeholder="Quoted Price"
        p={10}
        mt={16}
        keyboardType="numeric"
        keyboardAppearance="default"
        focusBorderColor="green700"
        error={getFormFieldsError("quotedPrice")}
      />

      <FormField
        formKey="sellingPrice"
        handleFormValueChange={handleFormValueChange}
        placeholder="Selling Price"
        p={10}
        mt={16}
        keyboardType="numeric"
        keyboardAppearance="default"
        focusBorderColor="green700"
        error={getFormFieldsError("sellingPrice")}
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
          mt={16}
          keyboardType="numeric"
          keyboardAppearance="default"
          focusBorderColor="green700"
          error={getFormFieldsError("buybackPrice")}
        />
      )}

      <Button
        mt="lg"
        px="xl"
        style={styles.button}
        onPress={handleSubmit}
        disabled={!isFormComplete}
        color="white"
        bg={buttonColor}
      >
        Add New Sell
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
    padding: 0,
    borderRadius: 45,
  },
});
