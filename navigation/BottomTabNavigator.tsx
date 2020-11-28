import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GamesHome from "../screens/GamesHome";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  BottomTabParamList,
  HomeParamList,
  ProfileParamList,
  TabTwoParamList,
  GamesHomeParamList
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].primary }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-person" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Games"
        component={GamesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "For You",
          headerTitleAlign: "left",
          headerTitleStyle: styles.headerText,
          headerStyle: styles.headerContainer,
        }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          headerTitleAlign: "left",
          headerTitleStyle: styles.headerText,
          headerStyle: styles.headerContainer,
        }}
      />
    </ProfileStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
const GamesStack = createStackNavigator<GamesHomeParamList>();

function GamesNavigator() {
  return (
    <GamesStack.Navigator>
      <GamesStack.Screen
        name="GamesHome"
        component={GamesHome}
        options={{
          headerTitle: "Games"
        }}
      />
    </GamesStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerText: {
    ...GlobalStyles.styles.textHeader,
    fontFamily: "sans-serif",
    fontWeight: "700",
    paddingLeft: 4,
  },
  headerContainer: {
    height: 120,
  },
});
