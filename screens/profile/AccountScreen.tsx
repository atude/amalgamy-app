import * as React from "react";
import { ProfileAvatar } from "../../components/profile/ProfileAvatar";
import ProfileMenuItem from "../../components/profile/ProfileMenuItem";
import { Layout, Text, View } from "../../components/Themed";
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

const OPTIONS = [
  {
    optionText: "Username",
    link: "askldfj",
  },
  {
    optionText: "Email",
    link: "askldfj",
  },
  {
    optionText: "Change Password",
    link: "askldfj",
  },
  {
    optionText: "Two-Factor Authentication",
    link: "askldfj",
  },
];

export default function AccountScreen() {
  return (
    <Layout>
      <ProfileMenuWrapper options={OPTIONS} title={"User Information"} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignContent: "flex-start",
  },
});
