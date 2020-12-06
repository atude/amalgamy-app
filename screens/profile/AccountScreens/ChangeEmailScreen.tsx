import * as React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import ProfileMenuSet from "../../../components/profile/ProfileMenuSet";
import GlobalStyles, { styles } from "../../../constants/GlobalStyles";
import { BigButton, Layout, Text } from "../../../components/Themed";
import { User } from "../../../types";
import { DUMMY_FRIENDS } from "../../../data/_dummyData";

type Props = {
  user: User;
};

export default function ChangeEmailScreen(props: Props) {
  //const { user } = props;
  const user = {
    email: "bobjeremy@email.com",
    firstName: "Bob",
    lastName: "Jeremy",
    avatar: "yes",
  };
  return (
    <Layout>
      <Text style={GlobalStyles.styles.paragraphText}>Change your email</Text>
      <TextInput
        placeholder={user.email}
        style={GlobalStyles.styles.textInput}
      />
      <BigButton text="Submit" />
    </Layout>
  );
}
