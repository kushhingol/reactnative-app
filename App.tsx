import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "./navigations";
import { ThemeProvider } from "react-native-magnus";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.root}>
          <StatusBar style="auto" />
          <BottomTabs />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
