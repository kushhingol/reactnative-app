import { useTheme } from "react-native-magnus";
import { FontAwesome } from "@expo/vector-icons";

import { getTabColorConfig } from "../../constants";
import { ScreenPage } from "../../components/shared/screen-page";
import { ClientDetailsDocType } from "../upsell/upsell-form";
import { SearchClient } from "../../components/search-client";
import { useMemo, useState } from "react";
import { FlatList, Linking, StyleSheet, View } from "react-native";
import { TitleSubtitleCard } from "../../components/shared/title-subtitle-card";
import { SafeAreaView } from "react-native-safe-area-context";
import { startCase } from "lodash";
import { NoSearchResultFound } from "../../components/shared/no-search-result-found";

export const SearchCustomer = () => {
  const { theme } = useTheme();
  const tabColorConfig = getTabColorConfig(theme);

  const [clientDetails, setClientDetails] = useState<ClientDetailsDocType>();

  const handleSearchListItemClick = (clientDetails: ClientDetailsDocType) => {
    setClientDetails(clientDetails);
  };

  const gridData = useMemo(() => {
    return [
      "clientName",
      "phoneNumber",
      "email",
      "address1",
      "address2",
      "city",
      "pinCode",
      "state",
    ];
  }, []);

  return (
    <ScreenPage
      color={tabColorConfig.search ?? ""}
      icon={<FontAwesome name="search" size={36} />}
      title="Search Customer"
    >
      <SafeAreaView style={{ flex: 1, margin: 0 }}>
        <View style={{ marginTop: 0 }}>
          <SearchClient handleSearchListItemClick={handleSearchListItemClick} />
        </View>

        {!!clientDetails ? (
          <View style={{ marginTop: 16, flex: 1 }}>
            <FlatList
              numColumns={2}
              keyExtractor={(_, index) => index.toString()}
              data={gridData as unknown as keyof ClientDetailsDocType}
              renderItem={({ item }) => {
                if (item !== "id") {
                  return (
                    <View
                      style={{ flex: 1, flexDirection: "column", margin: 1 }}
                    >
                      <TitleSubtitleCard
                        title={startCase(item)}
                        subtitle={
                          clientDetails?.[item as keyof ClientDetailsDocType] ??
                          ""
                        }
                        callBackFn={() => {
                          if (item === "phoneNumber") {
                            Linking.openURL(
                              `tel:+91${clientDetails?.phoneNumber}`
                            );
                          }
                        }}
                        isLink={item === "phoneNumber"}
                      />
                    </View>
                  );
                }
                return null;
              }}
            />
          </View>
        ) : (
          <NoSearchResultFound message="No client Found" />
        )}
      </SafeAreaView>
    </ScreenPage>
  );
};

const styles = StyleSheet.create({});
