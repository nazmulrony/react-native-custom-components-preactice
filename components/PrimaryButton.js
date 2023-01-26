import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";

const PrimaryButton = ({ style, onPress, children }) => {
    return (
        <View style={[styles.root, style]}>
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
    root: {
        width: "100%",
    },
    buttonContainer: {
        backgroundColor: GlobalStyles.colors.primary500,
        padding: 12,
        borderRadius: 8,
    },
    pressed: {
        opacity: 0.75,
    },
    buttonText: {
        fontSize: 14,
        textAlign: "center",
        color: "white",
    },
});
