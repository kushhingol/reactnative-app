import { useForm } from "../../../hooks/useForm";
import { validateEmailAddress, validatePhoneNumber } from "../../../utils";

export const useAddClientForm = () => {
  return useForm({
    clientName: {
      value: "",
      required: true,
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
      validator: (value) =>
        value && !validateEmailAddress(value.toString())
          ? "Please enter valid email address"
          : "",
    },
  });
};
