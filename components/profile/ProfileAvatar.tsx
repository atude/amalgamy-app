
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";
import Colors from "../../constants/Colors";

type Props = {
    firstName: string
    lastName: string
    avatar: string
}

export const ProfileAvatar = (props: Props) => {
    const { firstName, lastName, avatar } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.image}
                    //TODO: get profile pic
                    source={require("../../assets/images/icon.png")}
                />
            </TouchableOpacity>
            <Text style={styles.username}>
                {firstName} {lastName}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        alignSelf: "center",
        borderWidth: 3,
        borderColor: Colors.light.primary
    },
    username: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        padding: 15,
        fontSize: 35,

    },
    container: {
        flex: 1,
        justifyContent: "center"
    }
})