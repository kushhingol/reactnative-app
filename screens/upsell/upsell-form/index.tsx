import React, { useCallback, useEffect, useState } from "react";
import { SearchBar } from "react-native-screens";
import {
  Checkbox,
  Input,
  Text,
  Div,
  Button,
  Snackbar,
  Icon,
} from "react-native-magnus";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { FormField } from "../../../components/shared/form-field";
import { useUpsellForm } from "./use-upsell-form";
import {
  ClientDetailsType,
  ClientServices,
  UpsellDetailsType,
  UpsellServices,
} from "../../../services/client";
import { useLoading } from "../../../hooks/useLoading";
import { SearchBarListField } from "../../../components/shared/search-bar-list-field";
import { useDebounce } from "../../../hooks/useDebounce";
import { ClientSearchList } from "./ClientSearchList";
import { SearchClient } from "../../../components/search-client";

interface IProps {
  buttonColor: string;
}

export interface ClientDetailsDocType extends ClientDetailsType {
  id: string;
}

const snackbarRef = React.createRef<Snackbar>();

export const UpsellForm = ({ buttonColor }: IProps) => {
  const { isLoading, setIsLoading } = useLoading();
  const [isBuyback, setIsBuyback] = useState<boolean>(false);

  const {
    reset,
    formValues,
    seedValues,
    handleFormValueChange,
    getFormFieldsError,
    isFormComplete,
  } = useUpsellForm();

  const handleBuybackCheck = () => setIsBuyback((buyback) => !buyback);

  const mapFormValuesInAddClientRequest = (): ClientDetailsType => {
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

  const mapFormValuesInAddUpSellRequest = (
    clientId: string,
    addClientRequest: ClientDetailsType
  ): UpsellDetailsType => {
    return {
      ...addClientRequest,
      modelNumber: formValues.modelNumber,
      sellingPrice: formValues.sellingPrice,
      buybackPrice: formValues.buybackPrice,
      quotedPrice: formValues.quotedPrice,
      serialNumber: formValues.serialNumber,
      clientId: clientId,
    };
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const addClientRequest = mapFormValuesInAddClientRequest();
    ClientServices.addClient(addClientRequest)
      .then((res) => {
        console.log(res.id, "res");
        const clientId = res.id;
        const request = mapFormValuesInAddUpSellRequest(
          clientId,
          addClientRequest
        );
        UpsellServices.addUpsell(request)
          .then(() => {
            if (snackbarRef.current) {
              snackbarRef.current.show("Upsell Added successfully!");
            }
            setIsLoading(false);
            setIsBuyback(false);
            reset();
          })
          .catch((err) => {
            console.log("err", err);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.log("err", err);
        setIsLoading(false);
      });
  };

  const handleSearchListItemClick = useCallback(
    (clientDetails: ClientDetailsDocType) => {
      seedValues({
        address1: clientDetails.address1 ?? "",
        clientName: clientDetails.clientName ?? "",
        address2: clientDetails.address2 ?? "",
        city: clientDetails.city ?? "",
        email: clientDetails.email ?? "",
        phoneNumber: clientDetails.phoneNumber ?? "",
        pinCode: clientDetails.pinCode ?? "",
        state: clientDetails.state ?? "",
      });
    },
    []
  );

  return (
    <>
      <View style={styles.container}>
        <SearchClient handleSearchListItemClick={handleSearchListItemClick} />
        <FormField
          formKey="clientName"
          handleFormValueChange={handleFormValueChange}
          placeholder="Client Name"
          p={10}
          mt={16}
          focusBorderColor="green700"
          error={getFormFieldsError("clientName")}
          value={formValues["clientName"]}
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
          placeholder="Pin code"
          p={10}
          mt={16}
          keyboardType="numeric"
          keyboardAppearance="default"
          focusBorderColor="green700"
          error={getFormFieldsError("pinCode")}
          value={formValues["pinCode"]}
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
          value={formValues["modelNumber"]}
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
          value={formValues["serialNumber"]}
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
          value={formValues["quotedPrice"]}
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
          value={formValues["sellingPrice"]}
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
            value={formValues["buybackPrice"]}
          />
        )}
        <Button
          mt="lg"
          px="xl"
          style={styles.button}
          onPress={handleSubmit}
          disabled={!isFormComplete || isLoading}
          color="white"
          bg={buttonColor}
        >
          Add New Sell
        </Button>
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
    </>
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
