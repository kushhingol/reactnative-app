import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "react-native-magnus";
import { getTabColorConfig } from "../../constants";
import { ScreenPage } from "../../components/screen-page";
import { UpsellForm } from "./upsell-form";

export const Upsell = () => {
  const { theme } = useTheme();
  const tabColorConfig = getTabColorConfig(theme);
  return (
    <ScreenPage
      color={tabColorConfig.upsell ?? ""}
      icon={<FontAwesome name="rupee" size={36} />}
      title="Add Sale"
    >
      <UpsellForm buttonColor={tabColorConfig.upsell ?? ""} />
    </ScreenPage>
  );
};
