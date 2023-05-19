import { ThemeType } from "react-native-magnus";

export const getTabColorConfig = (theme: ThemeType) => {
  return {
    home: theme.colors?.["blue400"],
    upsell: theme.colors?.["green800"],
    search: theme.colors?.["teal600"],
    addClient: theme.colors?.["yellow600"],
    settings: theme.colors?.["purple500"],
    default: theme.colors?.["gray600"],
  };
};
