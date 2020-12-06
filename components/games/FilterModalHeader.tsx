import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import { Text, StyleSheet, View,  TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import layout from "../../constants/ScreenLayout";
type Props = {
  setMenu(menu: string): void;
  menu: string;
};
export default function FilterModalHeader(props: Props) {
  const { menu, setMenu } = props;
  return (
    <>
      {props.menu !== "filters" ? (
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:"center",
            }}
          >
            <TouchableOpacity style={{ flex: 1, paddingLeft: 10 }} onPress={() => setMenu('filters')}>
              <Text style={{ fontSize: 20, color: "red", fontWeight: "200" }}>
                <AntDesign name="left" size={24} color="white" />
              </Text>
            </TouchableOpacity>
            <View style={{ flex: 1, paddingLeft: 30, paddingRight: 20 }}>
              <Text style={styles.title}>{menu}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>{menu}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.primary,
    width: layout.window.width,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "400",
    color: "white",
    paddingBottom: 10,
    letterSpacing: 1.5,
    textTransform: "capitalize",
  },
});
