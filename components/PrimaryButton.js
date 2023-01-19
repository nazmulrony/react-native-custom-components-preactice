import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";

const PrimaryButton = ({ style, onPress, children }) => {
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: GlobalStyles.colors.primary500,
        padding: 8,
        borderRadius: 4,
    },
    pressed: {
        opacity: 0.75,
    },
    buttonText: {
        fontSize: 12,
        textAlign: "center",
        color: "white",
    },
});
