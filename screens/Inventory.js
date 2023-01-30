import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";
import YourProduct from "../components/Inventory/YourProduct";

const Inventory = () => {
    return (
        <View style={styles.screen}>
            <YourProduct />
        </View>
    );
};

export default Inventory;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.light50,
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
});
