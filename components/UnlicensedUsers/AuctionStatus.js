import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { auctionData } from "../../dummyData";
import PrimaryButton from "../PrimaryButton";

const AuctionStatus = () => {
    const RenderAuctionItem = ({ item }) => {
        return (
            <View style={styles.tableItemContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.tableContent}>{item.product}</Text>
                    <Text style={styles.category}>{item.category}</Text>
                </View>
                <Text style={[styles.tableContent, { flex: 1 }]}>
                    ${item.highestBid}
                </Text>
                <Text style={[styles.tableContent, { flex: 1 }]}>
                    {item.client}
                </Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Auction Status</Text>
            <View style={styles.tableHeaderContainer}>
                <Text style={styles.header}>Product</Text>
                <Text style={styles.header}>Highest Bid</Text>
                <Text style={[styles.header, { borderRightWidth: 0 }]}>
                    Client
                </Text>
            </View>
            {auctionData.map((data, index) => (
                <RenderAuctionItem item={data} key={index} />
            ))}
            <PrimaryButton style={{ marginVertical: 24 }}>
                View more
            </PrimaryButton>
        </View>
    );
};

export default AuctionStatus;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 6,
        flex: 1,
        marginVertical: 24,
    },
    chartContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    fontBase: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
        marginVertical: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
    },
    tableHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
        backgroundColor: "#FAFAFA",
        paddingVertical: 8,
        marginHorizontal: -16,
    },
    header: {
        flex: 1,
        borderRightWidth: 1,
        textAlign: "center",
        color: GlobalStyles.colors.gray300,
        borderRightColor: GlobalStyles.colors.gray200,
        fontWeight: "600",
    },
    tableItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        marginHorizontal: -16,
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.gray200,
    },
    tableContent: {
        fontSize: 13,
        color: GlobalStyles.colors.gray700,
        textAlign: "center",
    },
    category: {
        fontSize: 11,
        color: GlobalStyles.colors.gray300,
        textAlign: "center",
    },
});
