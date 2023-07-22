import React from "react";
import { useTheme, Text } from "react-native-magnus";
import { AntDesign } from "@expo/vector-icons";
import { getTabColorConfig } from "../../constants";
import { ScreenPage } from "../../components/shared/screen-page";
import { View, Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";

export const Dashboard = () => {
  const { theme } = useTheme();
  const tabColorConfig = getTabColorConfig(theme);

  // TODO add actual data here
  return (
    <ScreenPage
      color={tabColorConfig.home ?? ""}
      icon={<AntDesign name="piechart" size={36} />}
      title="Dashboard"
    >
      <View style={{ marginTop: 16 }}>
        <Text fontWeight="bold" fontSize="3xl" mt="md">
          Sales
        </Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 48} // from react-native
          height={220}
          yAxisLabel="₹"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: theme.colors?.["blue300"],
            backgroundGradientFrom: theme.colors?.["blue300"],
            backgroundGradientTo: theme.colors?.["blue300"],
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: theme.colors?.["blue500"],
              fill: "white",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View>
        <ProgressChart
          data={{
            labels: ["Return", "Buy", "Upsell"], // optional
            data: [0.4, 0.6, 0.8],
          }}
          width={Dimensions.get("window").width - 48}
          height={220}
          strokeWidth={8}
          radius={24}
          chartConfig={{
            backgroundColor: theme.colors?.["blue300"],
            backgroundGradientFrom: theme.colors?.["blue300"],
            backgroundGradientTo: theme.colors?.["blue300"],
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          hideLegend={false}
          style={{
            marginVertical: 4,
            borderRadius: 16,
          }}
        />
      </View>
    </ScreenPage>
  );
};
