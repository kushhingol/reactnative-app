import { View, Image, Text, StyleProp, ImageStyle } from "react-native";

interface IProps {
  message: string;
  style?: StyleProp<ImageStyle>;
}

export const NoSearchResultFound = ({
  message,
  style = { width: 350, height: 350 },
}: IProps) => {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", marginTop: 36 }}
    >
      <Image
        style={style}
        source={require("../../assets/no-search-result.png")}
      />
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{message}</Text>
    </View>
  );
};
