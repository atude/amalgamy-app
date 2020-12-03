import * as React from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, View } from "../Themed";
import Colors from "../../constants/Colors";

type Props = {
    optionText: string;
    icon?: string;
    pageLink?: string;
}

const ProfileMenuItem = (props: Props) => {
    const { optionText, pageLink } = props;
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.itemText}>
                    {optionText}
                </Text>
                <Image style={styles.image}
                    source={require("../../assets/images/icon.png")}
                />
            </View>
        </TouchableOpacity>
    )
}

export default ProfileMenuItem;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: Colors.light.lightgrey3,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemText: {
        alignSelf: "flex-start",
        fontSize: 30,
        padding: 12,
    },
    image: {
        alignSelf: "center",
        width: 30,
        height: 30,
        alignItems: "flex-end",
    }
})
