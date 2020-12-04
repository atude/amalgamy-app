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
import TabTwoScreen from "../screens/SocialScreen";
import {
  BottomTabParamList,
  HomeParamList,
  ProfileParamList,
  GamesHomeParamList,
  SocialParamList,
} from "../types";
import SocialScreen from "../screens/SocialScreen";

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
        name="Games"
        component={GamesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="logo-game-controller-b" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Social"
        component={SocialNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-people" color={color} />
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

const SocialStack = createStackNavigator<SocialParamList>();

function SocialNavigator() {
  return (
    <SocialStack.Navigator>
      <SocialStack.Screen
        name="SocialScreen"
        component={SocialScreen}
        options={{
          headerTitle: "Friends & Groups",
          headerTitleAlign: "left",
          headerTitleStyle: styles.headerText,
          headerStyle: styles.headerContainer,
        }}
      />
    </SocialStack.Navigator>
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

const GamesStack = createStackNavigator<GamesHomeParamList>();

function GamesNavigator() {
  return (
    <GamesStack.Navigator>
      <GamesStack.Screen
        name="GamesHome"
        component={GamesHome}
        options={{
          headerTitle: "Games",
          headerTitleAlign: "left",
          headerTitleStyle: styles.headerText,
          headerStyle: styles.headerContainer,
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
