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

const Languages: Array<Option> = [
  {
    optionText: "Strategy",
    checkbox: true,
  },
  {
    optionText: "Party Games",
    checkbox: true,
  },
  {
    optionText: "Action",
    checkbox: true,
  },
  {
    optionText: "Adventure",
    checkbox: true,
  },
  {
    optionText: "Fantasy",
    checkbox: true,
  },
  {
    optionText: "Casual",
    checkbox: true,
  },
  {
    optionText: "Indie",
    checkbox: true,
  },
];

export default function LanguagesScreen() {
  return (
    <Layout>
      <ProfileMenuWrapper options={Languages} />
    </Layout>
  );
}
