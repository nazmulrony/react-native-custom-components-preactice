import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalStyles } from "../../constants/style";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SearchBar from "../SearchBar";

const ProductList = () => {
    const [tab, setTab] = useState("Products");

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <View
                    style={[styles.tab, tab === "Products" && styles.activeTab]}
                >
                    <Pressable onPress={() => setTab("Products")}>
                        <Text
                            style={[
                                styles.text,
                                tab === "Products" && styles.activeText,
                            ]}
                        >
                            Products
                        </Text>
                    </Pressable>
                </View>
                <View
                    style={[styles.tab, tab === "Bundle" && styles.activeTab]}
                >
                    <Pressable onPress={() => setTab("Bundle")}>
                        <Text
                            style={[
                                styles.text,
                                tab === "Bundle" && styles.activeText,
                            ]}
                        >
                            Bundle
                        </Text>
                    </Pressable>
                </View>
                <View style={[styles.tab]}></View>
            </View>
            <SearchBar style={{ marginVertical: 16 }} />
        </View>
    );
};

export default ProductList;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        backgroundColor: "white",
    },
    tabContainer: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 4,
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: GlobalStyles.colors.gray200,
    },
    activeTab: {
        borderBottomColor: GlobalStyles.colors.primary500,
    },
    text: {
        fontSize: 16,
        color: GlobalStyles.colors.gray200,
    },
    activeText: {
        color: GlobalStyles.colors.primary500,
    },
});
