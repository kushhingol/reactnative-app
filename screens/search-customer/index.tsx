import { View, Text } from "react-native";
import { useTheme } from "react-native-magnus";
import { getTabColorConfig } from "../../constants";
import { ScreenPage } from "../../components/screen-page";
import { FontAwesome } from "@expo/vector-icons";

export const SearchCustomer = () => {
  const { theme } = useTheme();
  const tabColorConfig = getTabColorConfig(theme);
  return (
    <ScreenPage
      color={tabColorConfig.search ?? ""}
      icon={<FontAwesome name="search" size={36} />}
      title="Search Customer"
    >
      {/* <Text>Coming soon...</Text> */}
    </ScreenPage>
  );
};
