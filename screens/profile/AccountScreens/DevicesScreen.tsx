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

const DUMMY_PROFILE = {
  firstName: "Mozamel",
  lastName: "Anwary",
  avatar: "../../assets/images/icon.png",
  email: "atude@soundcloud.com",
  devices: ["fat ass", "dummy thicc"],
  genres: ["yes", "indeed"],
};

const OperatingSystems = [
  {
    optionText: "Windows",
    checkbox: true,
  },
  {
    optionText: "MacOS",
    checkbox: true,
  },
  {
    optionText: "Linux",
    checkbox: true,
  },
];

const Consoles: Array<Option> = [
  {
    optionText: "Nintendo Switch",
    checkbox: true,
  },
  {
    optionText: "PS4",
    checkbox: true,
  },
  {
    optionText: "PS5",
    checkbox: true,
  },
  {
    optionText: "Xbox One",
    checkbox: true,
  },
  {
    optionText: "Xbox Series X",
    checkbox: true,
  },
  {
    optionText: "Xbox Series S",
    checkbox: true,
  },
];

const menus: Array<SubMenu> = [
  {
    title: "Operating Systems",
    optionList: OperatingSystems,
  },
  {
    title: "Consoles",
    optionList: Consoles,
  },
];

export default function DevicesScreen() {
  return <ProfileMenuSet subMenus={menus} />;
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignContent: "flex-start",
  },
});
