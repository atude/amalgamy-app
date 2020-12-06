import * as React from "react";
import { ProfileAvatar } from "../../../components/profile/ProfileAvatar";
import ProfileMenuItem from "../../../components/profile/ProfileMenuItem";
import {
  Layout,
  ScrollableLayout,
  Text,
  View,
} from "../../../components/Themed";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { types } from "@babel/core";
import { SubMenu, User, Option } from "../../../types";
import { ProfileMenuWrapper } from "../../../components/profile/ProfileMenuWrapper";
import ProfileMenuSet from "../../../components/profile/ProfileMenuSet";
import MenuItemWithCheck from "../../../components/profile/MenuItemWithCheck";

const AccessiblityOptions: Array<Option> = [
  {
    optionText: "Strategy",
    checkbox: false,
  },
  {
    optionText: "Eye-tracking",
    checkbox: false,
  },
  {
    optionText: "Screen-reader support",
    checkbox: false,
  },
  {
    optionText: "Voice control",
    checkbox: false,
  },
  {
    optionText: "One-handed gameplay",
    checkbox: false,
  },
  {
    optionText: "Colour-blindess support",
    checkbox: false,
  },
];

export default function GenreScreen() {
  return (
    <Layout>
      <ProfileMenuWrapper options={GenreOptions} />
    </Layout>
  );
}
