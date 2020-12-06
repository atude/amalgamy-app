import * as React from "react";
import { ProfileAvatar } from "../../components/profile/ProfileAvatar";
import ProfileMenuItem from "../../components/profile/ProfileMenuItem";
import { Layout, ScrollableLayout, Text, View } from "../../components/Themed";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { types } from "@babel/core";
import { SubMenu, User, Option } from "../../types";
import { ProfileMenuWrapper } from "../../components/profile/ProfileMenuWrapper";

type Prop = {
  subMenus: Array<SubMenu>;
  checked?: boolean;
};

export default function ProfileMenuSet(prop: Prop) {
  const { subMenus } = prop;
  return (
    <ScrollableLayout>
      {subMenus.map((subMenu, i) => (
        <ProfileMenuWrapper
          options={subMenu.optionList}
          title={subMenu.title}
          key={i}
          firstItem={i === 0}
        />
      ))}
    </ScrollableLayout>
  );
}
