import * as React from "react";
import { ProfileAvatar } from "../../components/profile/ProfileAvatar";
import ProfileMenuItem from "../../components/profile/ProfileMenuItem";
import { Layout, ScrollableLayout, Text, View } from "../../components/Themed";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { types } from "@babel/core";
import { SubMenu, User, Option } from "../../types";
import { ProfileMenuWrapper } from "../../components/profile/ProfileMenuWrapper";
import ProfileMenuSet from "../../components/profile/ProfileMenuSet";

const DUMMY_PROFILE = {
  firstName: "Mozamel",
  lastName: "Anwary",
  avatar: "../../assets/images/icon.png",
  email: "atude@soundcloud.com",
  devices: ["fat ass", "dummy thicc"],
  genres: ["yes", "indeed"],
};

const UserInfo = [
  {
    optionText: "Email",
    pageLink: "ChangeEmailScreen",
    valueText: "atude@cyberscopic.net",
  },
  {
    optionText: "Change Password",
    pageLink: "ChangePasswordScreen",
  },
];

const RecPrefs: Array<Option> = [
  {
    optionText: "Devices and Platforms",
    pageLink: "DevicesScreen",
  },
  {
    optionText: "Accessiblity",
    pageLink: "AccessibilityScreen",
  },
  {
    optionText: "Genre",
    pageLink: "GenreScreen",
  },
  {
    optionText: "Languages",
    pageLink: "LanguagesScreen",
  },
];

const Privacy = [
  {
    optionText: "Data Usage",
    pageLink: "DataUsageScreen",
  },
  {
    optionText: "Privacy Policy",
    pageLink: "PrivacyPolicyScreen",
  },
];

const menus: Array<SubMenu> = [
  {
    title: "User Information",
    optionList: UserInfo,
  },
  {
    title: "Recommendation Preferences",
    optionList: RecPrefs,
  },
  {
    title: "Privacy and Data",
    optionList: Privacy,
  },
];

export default function AccountScreen() {
  return <ProfileMenuSet subMenus={menus} />;
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignContent: "flex-start",
  },
});
