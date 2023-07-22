import React, { LegacyRef, RefObject } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Button, Icon, Portal, Snackbar } from "react-native-magnus";
import { FormField } from "../../../components/shared/form-field";
import { useAddClientForm } from "./use-add-client-form";
import { useLoading } from "../../../hooks/useLoading";
import { ClientDetailsType, ClientServices } from "../../../services/client";

interface IProps {
  buttonColor: string;
}

const snackbarRef = React.createRef<Snackbar>();

export const AddClientForm = ({ buttonColor }: IProps) => {
  const { isLoading, setIsLoading } = useLoading();
  const {
    formValues,
    handleFormValueChange,
    isFormComplete,
    getFormFieldsError,
    reset,
  } = useAddClientForm();

  const mapFormValuesInRequest = (): ClientDetailsType => {
    return {
      address1: formValues.address1 ?? "",
      clientName: formValues.clientName ?? "",
      address2: formValues.address2 ?? "",
      city: formValues.city ?? "",
      email: formValues.email ?? "",
      phoneNumber: formValues.phoneNumber ?? "",
      pinCode: formValues.pinCode ?? "",
      state: formValues.state ?? "",
    };
  };

  const handleSubmitAddClient = () => {
    setIsLoading(true);
    const addClientRequest = mapFormValuesInRequest();
    ClientServices.addClient(addClientRequest)
      .then((res) => {
        if (snackbarRef.current) {
          snackbarRef.current.show("Client Added successfully!");
        }
        setIsLoading(false);
        reset();
      })
      .catch((err) => {
        console.log("err", err);
        setIsLoading(false);
      });
  };

  return (
    <View>
      <View style={styles.container}>
        <FormField
          formKey="clientName"
          handleFormValueChange={handleFormValueChange}
          placeholder="Client Name"
          p={10}
          focusBorderColor="green700"
          error={getFormFieldsError("clientName")}
          value={formValues["clientName"]}
        />
        <FormField
          formKey="address1"
          handleFormValueChange={handleFormValueChange}
          placeholder="Address 1"
          p={10}
          mt={16}
          focusBorderColor="green700"
          error={getFormFieldsError("address1")}
          value={formValues["address1"]}
        />
        <FormField
          formKey="address2"
          handleFormValueChange={handleFormValueChange}
          placeholder="Address 2"
          p={10}
          mt={16}
          focusBorderColor="green700"
          error={getFormFieldsError("address2")}
          value={formValues["address2"]}
        />
        <FormField
          formKey="city"
          handleFormValueChange={handleFormValueChange}
          placeholder="City"
          p={10}
          mt={16}
          focusBorderColor="green700"
          error={getFormFieldsError("city")}
          value={formValues["city"]}
        />
        <FormField
          formKey="state"
          handleFormValueChange={handleFormValueChange}
          placeholder="State"
          p={10}
          mt={16}
          focusBorderColor="green700"
          error={getFormFieldsError("state")}
          value={formValues["state"]}
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
          value={formValues["pinCode"]}
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
          value={formValues["phoneNumber"]}
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
          value={formValues["email"]}
        />

        <Button
          style={styles.button}
          mt="lg"
          px="xl"
          bg={buttonColor}
          color="white"
          onPress={handleSubmitAddClient}
          disabled={!isFormComplete || isLoading}
        >
          {isLoading ? "Adding Client " : `Add Client`}
        </Button>
      </View>
      <SafeAreaView style={{ marginTop: 56, flex: 1 }}>
        <Snackbar
          suffix={
            <Icon name="checkcircle" color="white" fontFamily="AntDesign" />
          }
          ref={snackbarRef}
          bg="green700"
          color="white"
          duration={2000}
          p={16}
        />
      </SafeAreaView>
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
