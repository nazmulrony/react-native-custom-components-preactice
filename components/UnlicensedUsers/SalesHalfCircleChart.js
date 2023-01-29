import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Defs, LinearGradient, Stop, Svg } from "react-native-svg";
import {
    VictoryAxis,
    VictoryChart,
    VictoryLabel,
    VictoryPie,
} from "victory-native";

import { Entypo } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/style";

const SalesHalfCircleChart = () => {
    const progress = 70;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.fontBase}>Total Revenue</Text>
                    <Text style={styles.title}>$35K</Text>
                </View>
                <TouchableOpacity activeOpacity={0.6}>
                    <Entypo
                        name="dots-three-vertical"
                        size={16}
                        color="#808080"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.chartContainer}>
                <VictoryChart
                    height={40}
                    width={80}
                    padding={{ top: 40, bottom: 0, right: 0, left: 0 }}
                >
                    <Defs>
                        <LinearGradient
                            id="salesChart"
                            x1="100%"
                            x2="0%"
                            y1="0%"
                            y2="0"
                        >
                            <Stop offset="0%" stopColor="#4E83E1" />
                            <Stop offset="100%" stopColor="#5CBAEE" />
                        </LinearGradient>
                    </Defs>
                    <VictoryPie
                        radius={40}
                        innerRadius={32}
                        colorScale={["url(#salesChart)", "#D9D9D9"]}
                        startAngle={-90}
                        endAngle={90}
                        data={[progress, 100 - progress]}
                        labels={() => ""}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        style={{
                            fontSize: 14,
                            fontWeight: "600",
                        }}
                        x={40}
                        y={30}
                        text={`${progress}%`}
                    />
                    <VictoryAxis
                        style={{
                            grid: { stroke: "none" },
                            axis: { stroke: "none" },
                        }}
                    />
                </VictoryChart>
            </View>
        </View>
    );
};

export default SalesHalfCircleChart;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        marginVertical: 24,
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
        fontSize: 16,
        fontWeight: "600",
    },
    chartContainer: {
        // justifyContent: "",
        alignItems: "flex-end",
    },
});
