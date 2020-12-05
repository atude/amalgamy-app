import * as React from "react";
import { ProfileAvatar } from "../components/profile/ProfileAvatar";
import { Layout, Text, View } from "../components/Themed";
import { StyleSheet } from "react-native";
import { ProfileMenuWrapper } from "../components/profile/ProfileMenuWrapper";
import { Option } from "../types/index";

const DUMMY_PROFILE = {
  firstName: "Mozamel",
  lastName: "Anwary",
  avatar: "../../assets/images/icon.png",
};

const OPTIONS: Option[] = [
  {
    optionText: "Account",
    pageLink: "AccountScreen",
    icon: "md-settings"
  },
  {
    optionText: "Connected Services",
    pageLink: "Services",
    icon: "md-git-branch"
  },
  {
    optionText: "Saved Games",
    pageLink: "SavedGames",
    icon: "md-bookmarks"
  },
  {
    optionText: "Reviews",
    pageLink: "Reviews",
    icon: "md-star"
  },
];

export default function ProfileHome() {
  return (
    <Layout style={styles.container}>
      <ProfileAvatar
        firstName={DUMMY_PROFILE.firstName}
        lastName={DUMMY_PROFILE.lastName}
        avatar={DUMMY_PROFILE.avatar}
      />
      <ProfileMenuWrapper options={OPTIONS} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
  },
});
