import * as React from "react";
import { TextInput } from "react-native";
import GlobalStyles from "../../../constants/GlobalStyles";
import { BigButton, Layout, Text } from "../../../components/Themed";
import { User } from "../../../types";

type Props = {
  user: User;
};

export default function ChangePasswordScreen(props: Props) {
  //const { user } = props;
  return (
    <Layout>
      <Text style={GlobalStyles.styles.paragraphText}>
        Change your password
      </Text>
      <TextInput
        placeholder={"New password"}
        style={GlobalStyles.styles.textInput}
      />
      <TextInput
        placeholder={"Confirm new password"}
        style={GlobalStyles.styles.textInput}
      />
      <BigButton text="Confirm new password" />
    </Layout>
  );
}
