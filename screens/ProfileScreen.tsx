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
  },
  {
    optionText: "Connected Services",
    pageLink: "askldfj",
  },
  {
    optionText: "Saved Games",
    pageLink: "askldfj",
  },
  {
    optionText: "Reviews",
    pageLink: "askldfj",
  },
];

export default function ProfileHome() {
  return (
    <Layout>
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
  menuContainer: {
    flex: 1,
    alignContent: "flex-start",
  },
});
