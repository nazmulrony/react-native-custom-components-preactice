import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryTheme,
} from "victory-native";
import VictoryZoomContainer from "victory-native/src/components/victory-zoom-container";
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
                        }}
                    />
                </VictoryChart>
            </View>
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
});
