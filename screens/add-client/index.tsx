import React from "react";
import { useTheme } from "react-native-magnus";
import { FontAwesome } from "@expo/vector-icons";
import { getTabColorConfig } from "../../constants";
import { ScreenPage } from "../../components/screen-page";
import { AddClientForm } from "./add-client-form";

export const AddClient = () => {
  const { theme } = useTheme();
  const tabColorConfig = getTabColorConfig(theme);
  return (
    <ScreenPage
      color={tabColorConfig.addClient ?? ""}
      icon={<FontAwesome name="handshake-o" size={36} />}
      title="Add Client"
    >
      <AddClientForm buttonColor={tabColorConfig.addClient ?? ""} />
    </ScreenPage>
  );
};
