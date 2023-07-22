import { StyleSheet, View, Text, Linking } from "react-native";
import { Div, useTheme } from "react-native-magnus";

interface IProps {
  title: string;
  subtitle: string;
  callBackFn?: () => void;
  isLink?: boolean;
}

export const TitleSubtitleCard = ({
  title,
  subtitle,
  callBackFn,
  isLink,
}: IProps) => {
  const { theme } = useTheme();
  return (
    <Div style={styles.cardContainer} shadow="md" bg="white" rounded="md">
      <Text style={[styles.subTitle, { color: theme.colors?.["gray600"] }]}>
        {title}
      </Text>
      <Text
        onPress={callBackFn}
        style={[
          styles.titleText,
          isLink && { ...styles.linkStyle, color: theme.colors?.["blue600"] },
        ]}
      >
        {subtitle}
      </Text>
    </Div>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    margin: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  linkStyle: {
    textDecorationLine: "underline",
  },
});
