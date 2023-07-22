import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

interface IProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}

export const ScreenPage = ({ title, icon, color, children }: IProps) => {
  return (
    <View
      style={{
        ...styles.pageContainer,
        backgroundColor: color,
      }}
    >
      <View style={styles.screenPageContainer}>
        <View style={styles.pageHeadingContainer}>
          {icon}
          <Text style={styles.pageHeading}>{title}</Text>
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          style={styles.scrollView}
          automaticallyAdjustKeyboardInsets
        >
          {children}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  screenPageContainer: {
    backgroundColor: "white",
    elevation: 0,
    flex: 1,
    // borderTopRightRadius: 48,
  },
  pageHeadingContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 24,
    marginLeft: 24,
  },
  pageIcon: {
    margin: 0,
  },
  pageHeading: {
    fontSize: 24,
    marginLeft: 16,
  },
  scrollView: {
    marginLeft: 24,
    marginRight: 24,
  },
});
