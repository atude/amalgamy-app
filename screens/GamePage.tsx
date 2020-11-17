import * as React from "react";
import { StyleSheet } from "react-native";

import HollowButton from "../components/HollowButton";
import { Text, View } from "../components/Themed";

export default function GamePage() {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <HollowButton
                    onPress={() => {
                        return;
                    }}
                    text="See all"
                ></HollowButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        // flex: 0.1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
