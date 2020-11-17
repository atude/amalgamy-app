import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import Colors from "../constants/Colors";
interface IHollowButtonProps {
    onPress: any;
    text: string;
    // icon: any;
}

const HollowButton: React.FC<IHollowButtonProps> = (
    props: IHollowButtonProps,
) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderColor: Colors.brandPurple,
        borderWidth: 1,
        paddingVertical: 3,
        paddingHorizontal: 10,
        maxHeight: 30,
    },
    text: { color: Colors.brandPurple, fontSize: 14 },
});
export default HollowButton;
