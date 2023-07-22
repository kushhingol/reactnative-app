import { useForm } from "../../../hooks/useForm";
import { validateEmailAddress, validatePhoneNumber } from "../../../utils";

export const useUpsellForm = () => {
  return useForm({
    clientName: {
      value: "",
      required: true,
    },
    phoneNumber: {
      value: "",
      required: true,
      validator: (value) =>
        value && !validatePhoneNumber(value.toString())
          ? "Please enter valid phone number"
          : "",
    },
    email: {
      value: "",
      required: true,
      validator: (value) => {
        const isValidEmail = validateEmailAddress(value.toString());
        return value && !isValidEmail ? "Please enter email address" : "";
      },
    },
    address1: {
      value: "",
      required: true,
    },
    address2: {
      value: "",
    },
    city: {
      value: "",
      required: true,
    },
    state: {
      value: "",
      required: true,
    },
    pinCode: {
      value: "",
      required: true,
    },
    modelNumber: {
      value: "",
      required: true,
    },
    serialNumber: {
      value: "",
    },
    quotedPrice: {
      value: "",
    },
    sellingPrice: {
      value: "",
      required: true,
    },
    buybackPrice: {
      value: "",
    },
  });
};
