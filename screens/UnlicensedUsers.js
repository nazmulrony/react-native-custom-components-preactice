import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/style";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/UnlicensedUsers/Header";
import SearchBar from "../components/SearchBar";
import BalanceChart from "../components/UnlicensedUsers/BalanceChart";
import SalesChart from "../components/UnlicensedUsers/SalesChart";
import RevenueChart from "../components/UnlicensedUsers/RevenueChart";

const UnlicensedUsers = () => {
    return (
        <View style={styles.screen}>
            <ScrollView>
                <Header />
                <SearchBar />
                <BalanceChart />
                <SalesChart />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <RevenueChart />
                    <RevenueChart />
                </View>
            </ScrollView>
        </View>
    );
};

export default UnlicensedUsers;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.light50,
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    profileContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16,
    },
    imageContainer: {
        height: 44,
        width: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primary500,
        overflow: "hidden",
        marginRight: 6,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    fontBase: {
        fontSize: 12,
        color: GlobalStyles.colors.gray300,
    },
});
