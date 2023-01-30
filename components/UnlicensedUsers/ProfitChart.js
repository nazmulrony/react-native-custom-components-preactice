import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import PrimaryButton from "../PrimaryButton";
const ProfitChart = () => {
    const data = [
        { day: "Sun", profit: 20 },
        { day: "Mon", profit: 5 },
        { day: "Tue", profit: 18 },
        { day: "Wed", profit: 15 },
        { day: "Thu", profit: 24 },
        { day: "Fri", profit: 36 },
        { day: "Sat", profit: 27 },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Total Profit</Text>
            <View style={styles.chartContainer}>
                <VictoryChart
                    padding={{ left: 48, bottom: 30, top: 20, right: 24 }}
                    width={Dimensions.get("window").width - 48}
                    height={200}
                    domainPadding={20}
                >
                    <VictoryAxis
                        dependentAxis
                        style={{
                            grid: { stroke: "#DADAD9" },
                            axis: { stroke: "none" },
                            tickLabels: { fill: "#8D8D97" },
                        }}
                    />
                    <VictoryBar
                        barWidth={30}
                        data={data}
                        x="day"
                        y="profit"
                        style={{ data: { fill: "#4CAF50" } }}
                    />
                    <VictoryAxis
                        style={{
                            tickLabels: { fill: "#8D8D97" },
                            axis: { stroke: "#DADAD9" },
                        }}
                    />
                </VictoryChart>
            </View>
            <View
                style={{
                    borderTopWidth: 1,
                    height: 0,
                    marginVertical: 16,
                    marginHorizontal: -16,
                    borderTopColor: "#EEEEEE",
                }}
            ></View>
            <Text style={styles.title}>$3232</Text>
            <Text style={styles.fontBase}>Last week profit</Text>

            <View style={styles.statusContainer}>
                <TouchableOpacity style={styles.statusIcon}>
                    <Octicons name="arrow-switch" size={24} color="#4CAF50" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.fontBaseDark}>$45675</Text>
                    <Text style={styles.fontBase}>Last week profit</Text>
                </View>
            </View>
            <View style={styles.statusContainer}>
                <TouchableOpacity style={styles.statusIcon}>
                    <Ionicons name="logo-usd" size={24} color="#4CAF50" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.fontBaseDark}>$45675</Text>
                    <Text style={styles.fontBase}>Total income</Text>
                </View>
            </View>
            <View style={styles.statusContainer}>
                <TouchableOpacity style={styles.statusIcon}>
                    <Ionicons name="md-stats-chart" size={24} color="#4CAF50" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.fontBaseDark}>$45675</Text>
                    <Text style={styles.fontBase}>Total monthly profit</Text>
                </View>
            </View>
            <PrimaryButton style={{ marginVertical: 16 }}>
                View Reports
            </PrimaryButton>
        </View>
    );
};

export default ProfitChart;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        flex: 0.5,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    fontBase: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
    },
    fontBaseDark: {
        fontSize: 13,
        color: GlobalStyles.colors.gray700,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
    },

    subTitle: {
        fontSize: 16,
        fontWeight: "600",
    },
    chartContainer: {
        alignItems: "flex-end",
    },
    statusContainer: {
        flexDirection: "row",
        marginVertical: 8,
        alignItems: "center",
    },
    statusIcon: {
        height: 44,
        width: 44,
        borderRadius: 8,
        backgroundColor: "#ECFFED",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
});
