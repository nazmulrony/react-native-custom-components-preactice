import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../constants/style";
import { transactionData } from "../../dummyData";
import PrimaryButton from "../PrimaryButton";

const TransactionHistory = () => {
    const RenderTableItem = ({ item }) => {
        return (
            <View style={styles.tableItemContainer}>
                <Text style={[styles.tableContent, { flex: 0.5 }]}>
                    #{item.id}
                </Text>
                <Text style={[styles.tableContent, { flex: 0.8 }]}>
                    {item.client}
                </Text>
                <Text style={styles.tableContent}>{item.event}</Text>
                <Text style={styles.tableContent}>${item.amount}</Text>
                <Text style={styles.tableContent}>View</Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transaction History</Text>
            <ScrollView nestedScrollEnabled={true} horizontal={true}>
                <View style={{ width: 720 }}>
                    <View style={styles.tableHeaderContainer}>
                        <Text style={[styles.header, { flex: 0.5 }]}>Id</Text>
                        <Text style={[styles.header, { flex: 0.8 }]}>
                            Client
                        </Text>
                        <Text style={styles.header}>Event</Text>
                        <Text style={styles.header}>Amount</Text>
                        <Text style={[styles.header, { borderRightWidth: 0 }]}>
                            Action
                        </Text>
                    </View>
                    <View style={{ height: 400 }}>
                        <ScrollView nestedScrollEnabled={true}>
                            {transactionData.map((data, index) => (
                                <RenderTableItem key={index} item={data} />
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <PrimaryButton style={{ marginVertical: 36 }}>
                View more
            </PrimaryButton>
        </View>
    );
};

export default TransactionHistory;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 6,
        flex: 1,
    },
    fontBase: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
        marginVertical: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        padding: 16,
        paddingBottom: 8,
    },
    tableHeaderContainer: {
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
        backgroundColor: "#FAFAFA",
        paddingVertical: 8,
    },
    header: {
        flex: 1,
        borderRightWidth: 1,
        textAlign: "center",
        color: GlobalStyles.colors.gray300,
        borderRightColor: GlobalStyles.colors.gray200,
    },
    tableItemContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.gray200,
    },
    tableContent: {
        flex: 1,
        fontSize: 13,
        color: GlobalStyles.colors.gray700,
        textAlign: "center",
    },
    category: {
        fontSize: 11,
        color: GlobalStyles.colors.gray700,
        textAlign: "center",
    },
});
