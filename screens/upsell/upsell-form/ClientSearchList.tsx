import { View, ScrollView, Text } from "react-native";
import { ClientDetailsDocType } from ".";
import { useTheme } from "react-native-magnus";
import { getTabColorConfig } from "../../../constants";
import { NoSearchResultFound } from "../../../components/shared/no-search-result-found";

interface IProps {
  searchListData: ClientDetailsDocType[];
  onListItemClick: (documentItem: ClientDetailsDocType) => void;
}

export const ClientSearchList = ({
  searchListData,
  onListItemClick,
}: IProps) => {
  const { theme } = useTheme();
  return (
    <ScrollView
      style={{
        height: 200,
      }}
      scrollEnabled={true}
      nestedScrollEnabled={true}
    >
      {searchListData.length ? (
        searchListData.map((item) => (
          <View
            key={item.id}
            style={{
              maxWidth: "100%",
              padding: 16,
              borderColor: theme.colors?.["gray600"],
              borderWidth: 0,
              borderBottomWidth: 1,
              marginLeft: 16,
              marginRight: 16,
            }}
          >
            <Text
              style={{
                textAlign: "center",
              }}
              onPress={() => onListItemClick(item)}
            >
              {item.clientName} - {item.phoneNumber}
            </Text>
          </View>
        ))
      ) : (
        <NoSearchResultFound
          message="No Client Found"
          style={{ width: 100, height: 100 }}
        />
      )}
    </ScrollView>
  );
};
