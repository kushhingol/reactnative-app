import { View, Text } from "react-native";
import { useTheme } from "react-native-magnus";
import { getTabColorConfig } from "../../constants";
import { ScreenPage } from "../../components/screen-page";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const Settings = () => {
  const { theme } = useTheme();
  const tabColorConfig = getTabColorConfig(theme);
  return (
    <ScreenPage
      color={tabColorConfig.settings ?? ""}
      icon={<Ionicons name="settings" size={36} />}
      title="Add Sale"
    >
      {/* <Text>Coming soon...</Text> */}
    </ScreenPage>
  );
};
