import * as React from "react";
import { ProfileAvatar } from "../../components/profile/ProfileAvatar";
import ProfileMenuItem from "../../components/profile/ProfileMenuItem";
import { Layout, ScrollableLayout, Text, View } from "../../components/Themed";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { types } from "@babel/core";
import { User } from "../../types";
import { ProfileMenuWrapper } from "../../components/profile/ProfileMenuWrapper";

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
    optionText: "Username",
    link: "ChangeUsernameScreen",
    valueText: "cyberscopes",
  },
  {
    optionText: "Email",
    link: "ChangeEmailScreen",
    valueText: "atude@cyberscopic.net",
  },
  {
    optionText: "Change Password",
    link: "ChangePasswordScreen",
  },
  {
    optionText: "Two-Factor Authentication",
    link: "TwoFactorAuthScreen",
  },
];

const RecPrefs = [
  {
    optionText: "Devices and Platforms",
    link: "DevicesScreen",
  },
  {
    optionText: "Accessiblity",
    link: "AccessibilityScreen",
  },
  {
    optionText: "Genre",
    link: "GenreScreen",
  },
  {
    optionText: "Languages",
    link: "LanguagesScreen",
  },
];

const Privacy = [
  {
    optionText: "Data Usage",
    link: "DataUsageScreen",
  },
  {
    optionText: "Privacy Policy",
    link: "PrivacyPolicyScreen",
  },
];

export default function AccountScreen() {
  return (
    <ScrollableLayout>
      <ProfileMenuWrapper options={UserInfo} title={"User Information"} topPadding={true} />
      <ProfileMenuWrapper
        options={RecPrefs}
        title={"Recommendation Preferences"}
      />
      <ProfileMenuWrapper options={Privacy} title={"Privacy and Data"} />
    </ScrollableLayout>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignContent: "flex-start",
  },
});
