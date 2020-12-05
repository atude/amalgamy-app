import * as React from "react";
import {
  StyleSheet,
  Text as DefaultText,
  View as DefaultView,
  ScrollView as DefaultScrollView,
  TouchableOpacity as DefaultButton,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import useColorScheme from "../hooks/useColorScheme";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type ButtonTextProps = {
  text: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];
export type ButtonProps = ButtonTextProps & ThemeProps & DefaultButton["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const Layout = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return (
    <DefaultView
      style={[{ backgroundColor }, style, styles.layout]}
      {...otherProps}
    />
  );
};

export const ScrollableLayout = (props: ScrollViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return (
    <DefaultScrollView
      contentContainerStyle={styles.scrollableLayout}
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
};

export const Button = (props: ButtonProps) => {
  const { text, style, lightColor, darkColor, ...otherProps } = props;
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary",
  );

  return (
    <TouchableOpacity
      style={[{ borderColor }, style, styles.button]}
      {...otherProps}
    >
      <Text style={{ color: borderColor }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 24,
    height: "100%",
  },
  scrollableLayout: {
    padding: 24,
  },
  button: {
    borderRadius: GlobalStyles.consts.borderRadius,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
});
