import * as React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import ProfileMenuSet from "../../../components/profile/ProfileMenuSet";
import GlobalStyles, { styles } from "../../../constants/GlobalStyles";
import { BigButton, Layout, Text } from "../../../components/Themed";
import { User } from "../../../types";
import { DUMMY_FRIENDS } from "../../../data/_dummyData";
import { AppContext } from "../../../context";

export default function ChangeEmailScreen() {
  const { user } = React.useContext(AppContext);
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
