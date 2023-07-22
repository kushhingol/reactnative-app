import React from "react";
import { useTheme } from "react-native-magnus";
import { Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { Dashboard } from "../screens/dashboard";
import { Upsell } from "../screens/upsell";
import { SearchCustomer } from "../screens/search-customer";
import { Settings } from "../screens/settings";
import { ROUTES } from "./navigation-routes";
import { getTabColorConfig } from "../constants";
import { AddClient } from "../screens/add-client";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const { theme } = useTheme();

  const tabColorConfig = getTabColorConfig(theme);
  return (
    <Pressable style={{ flex: 1 }} disabled>
      <Tab.Navigator
        initialRouteName={ROUTES.TABS.HOME}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        screenOptions={{
          tabBarStyle: {
            height: 64,
          },

          tabBarItemStyle: {
            margin: 8,
          },
          headerStatusBarHeight: 40,
        }}
      >
        <Tab.Screen
          name={ROUTES.TABS.HOME}
          component={Dashboard}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <AntDesign
                name="piechart"
                size={size}
                color={focused ? tabColorConfig.home : tabColorConfig.default}
              />
            ),
            tabBarActiveTintColor: tabColorConfig.home,
            headerStyle: {
              backgroundColor: tabColorConfig.home,
              borderBottomLeftRadius: 48,
              borderBottomRightRadius: 48,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        ></Tab.Screen>
        <Tab.Screen
          name={ROUTES.TABS.UPSELL}
          component={Upsell}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <FontAwesome
                name="dollar"
                size={size}
                color={focused ? tabColorConfig.upsell : tabColorConfig.default}
              />
            ),
            tabBarActiveTintColor: tabColorConfig.upsell,
            headerStyle: {
              backgroundColor: tabColorConfig.upsell,
              borderBottomLeftRadius: 48,
              borderBottomRightRadius: 48,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        ></Tab.Screen>
        <Tab.Screen
          name={ROUTES.TABS.ADD_CLIENT}
          component={AddClient}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <FontAwesome
                name="handshake-o"
                size={size}
                color={
                  focused ? tabColorConfig.addClient : tabColorConfig.default
                }
              />
            ),
            tabBarActiveTintColor: tabColorConfig.addClient,
            headerStyle: {
              backgroundColor: tabColorConfig.addClient,
              borderBottomLeftRadius: 48,
              borderBottomRightRadius: 48,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        ></Tab.Screen>
        <Tab.Screen
          name={ROUTES.TABS.SEARCH}
          component={SearchCustomer}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <FontAwesome
                name="search"
                size={size}
                color={focused ? tabColorConfig.search : tabColorConfig.default}
              />
            ),
            tabBarActiveTintColor: tabColorConfig.search,
            headerStyle: {
              backgroundColor: tabColorConfig.search,
              borderBottomLeftRadius: 48,
              borderBottomRightRadius: 48,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        ></Tab.Screen>
        <Tab.Screen
          name={ROUTES.TABS.SETTINGS}
          component={Settings}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name="settings"
                size={size}
                color={
                  focused ? tabColorConfig.settings : tabColorConfig.default
                }
              />
            ),
            tabBarActiveTintColor: tabColorConfig.settings,
            headerStyle: {
              backgroundColor: tabColorConfig.settings,
              borderBottomLeftRadius: 48,
              borderBottomRightRadius: 48,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </Pressable>
  );
};
