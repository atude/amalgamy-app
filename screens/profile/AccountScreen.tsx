import * as React from "react";
import { SubMenu, User, Option } from "../../types";
import ProfileMenuSet from "../../components/profile/ProfileMenuSet";

const UserInfo = [
  {
    optionText: "Email",
    pageLink: "ChangeEmailScreen",
    valueText: "atude@cyberscopic.net",
  },
  {
    optionText: "Change Password",
    pageLink: "ChangePasswordScreen",
  },
];

const RecPrefs: Array<Option> = [
  {
    optionText: "Devices and Platforms",
    pageLink: "DevicesScreen",
  },
  {
    optionText: "Accessiblity",
    pageLink: "AccessibilityScreen",
  },
  {
    optionText: "Genre",
    pageLink: "GenreScreen",
  },
  {
    optionText: "Languages",
    pageLink: "LanguagesScreen",
  },
];

const Privacy = [
  {
    optionText: "Data Usage",
    pageLink: "DataUsageScreen",
  },
  {
    optionText: "Privacy Policy",
    pageLink: "PrivacyPolicyScreen",
  },
];

const menus: Array<SubMenu> = [
  {
    title: "User Information",
    optionList: UserInfo,
  },
  {
    title: "Recommendation Preferences",
    optionList: RecPrefs,
  },
  {
    title: "Privacy and Data",
    optionList: Privacy,
  },
];

export default function AccountScreen() {
  return <ProfileMenuSet subMenus={menus} />;
}
