import React from "react";
import { useTheme } from "react-native-magnus";
import { AntDesign } from "@expo/vector-icons";
import { getTabColorConfig } from "../../constants";
import { ScreenPage } from "../../components/screen-page";

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
