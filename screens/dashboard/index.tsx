import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "react-native-magnus";
import { getTabColorConfig } from "../../constants";
import { ScreenPage } from "../../components/screen-page";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

export const Dashboard = () => {
  const { theme } = useTheme();
  const tabColorConfig = getTabColorConfig(theme);
  return (
    <ScreenPage
      color={tabColorConfig.home ?? ""}
      icon={<AntDesign name="piechart" size={36} />}
      title="Dashboard"
    >
      {/* <Text>Coming soon...</Text> */}
    </ScreenPage>
  );
};
