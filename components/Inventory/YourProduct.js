import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../constants/style";
import RadioButtons from "../RadioButtons";
import PrimaryButton from "../PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

const YourProduct = () => {
    const [value, setValue] = useState("lb");
    const items = [
        {
            label: "lb",
            value: "lb",
        },
        {
            label: "gm",
            value: "gm",
        },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Products</Text>
            <Text style={styles.fontBase}>
                You can add your new product for publish in your Product list as
                well as save as draft for further editing.
            </Text>

            <View style={styles.buttonsContainer}>
                <RadioButtons
                    items={items}
                    onPress={setValue}
                    direction="row"
                    color={"#4CAF50"}
                    initial={value}
                    gap={16}
                />
                <PrimaryButton style={{ width: 150 }} icon="add">
                    Add New
                </PrimaryButton>
            </View>
        </View>
    );
};

export default YourProduct;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#ffffff",
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: GlobalStyles.colors.gray700,
    },
    fontBase: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
    },
    buttonsContainer: {
        marginVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
