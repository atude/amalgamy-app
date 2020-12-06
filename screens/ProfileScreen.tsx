import React, { useContext } from "react";
import { ProfileAvatar } from "../components/profile/ProfileAvatar";
import { BigButton, Layout, Text, View } from "../components/Themed";
import { StyleSheet } from "react-native";
import { ProfileMenuWrapper } from "../components/profile/ProfileMenuWrapper";
import { Option } from "../types/index";
import { signOut } from "../functions/auth";
import { AppContext } from "../context";

const DUMMY_PROFILE = {
  firstName: "Mozamel",
  lastName: "Anwary",
  avatar: "../../assets/images/icon.png",
};

const OPTIONS: Option[] = [
  {
    optionText: "Account",
    pageLink: "AccountScreen",
    icon: "md-settings",
  },
  {
    optionText: "Connected Services",
    pageLink: "Services",
    icon: "md-git-branch",
  },
  {
    optionText: "Saved Games",
    pageLink: "SavedGames",
    icon: "md-bookmarks",
  },
  {
    optionText: "Reviews",
    pageLink: "Reviews",
    icon: "md-star",
  },
];

export default function ProfileHome() {
  const { user } = useContext(AppContext);
  return (
    <Layout style={styles.container}>
      <ProfileAvatar
        firstName={user?.firstName ?? ""}
        lastName={user?.lastName ?? ""}
        avatar={user?.avatar ?? ""}
      />
      <ProfileMenuWrapper options={OPTIONS} />
      <BigButton text="Logout" onPress={signOut} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
  },
});
