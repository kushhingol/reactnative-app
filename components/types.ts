import { InputProps } from "react-native-magnus";

export interface InputFieldProps extends InputProps {
  formKey: string;
  handleFormValueChange: (key: string, value: any) => void;
  error?: string;
}
