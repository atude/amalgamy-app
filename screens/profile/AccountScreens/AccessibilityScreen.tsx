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
    optionText: "Subtitles",
    checkbox: true,
  },
  {
    optionText: "Eye-tracking",
    checkbox: true,
  },
  {
    optionText: "Screen-reader support",
    checkbox: true,
  },
  {
    optionText: "Voice control",
    checkbox: true,
  },
  {
    optionText: "One-handed gameplay",
    checkbox: true,
  },
  {
    optionText: "Colour-blindess support",
    checkbox: true,
  },
];

export default function AccessibilityScreen() {
  return (
    <Layout>
      <ProfileMenuWrapper options={AccessiblityOptions} />
    </Layout>
  );
}
