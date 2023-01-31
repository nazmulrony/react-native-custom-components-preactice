import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/style";

const SearchBar = ({ style }) => {
    return (
        <View style={[styles.container, style]}>
            <Ionicons
                name="ios-search-outline"
                size={24}
                color={GlobalStyles.colors.gray300}
            />
            <TextInput placeholder="Search products" style={styles.input} />
            <Ionicons
                name="options-outline"
                size={24}
                color={GlobalStyles.colors.gray300}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        backgroundColor: "white",
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 8,
        // marginBottom: 36,
    },
    input: {
        flex: 1,
        paddingHorizontal: 4,
    },
});
