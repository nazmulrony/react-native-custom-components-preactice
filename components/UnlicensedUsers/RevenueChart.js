import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { VictoryArea, VictoryAxis, VictoryChart } from "victory-native";
import { Defs, LinearGradient, Stop, Svg } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/style";

const RevenueChart = () => {
    const data = [1, 15, 20, 15, 12, 20, 35, 45, 50];
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
                    height={60}
                    width={120}
                    padding={{ top: 0, bottom: 0, right: 0, left: 0 }}
                >
                    <Defs>
                        <LinearGradient
                            id="revenueChart"
                            x1="0%"
                            x2="0%"
                            y1="0%"
                            y2="100%"
                        >
                            <Stop offset="0%" stopColor="#9155FD" />
                            <Stop offset="100%" stopColor="white" />
                        </LinearGradient>
                    </Defs>
                    <VictoryArea
                        animate
                        data={data}
                        interpolation="natural"
                        style={{
                            data: {
                                fill: "url(#revenueChart)",
                                fillOpacity: 0.6,
                                strokeWidth: 2,
                                stopColor: "#9155FD",
                            },
                        }}
                    />
                    <VictoryAxis
                        style={{
                            axis: { stroke: "none" },
                            ticks: { stroke: "transparent" },
                            tickLabels: { fill: "transparent" },
                        }}
                    />
                </VictoryChart>
            </View>
        </View>
    );
};

export default RevenueChart;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        marginVertical: 24,
        flex: 0.5,
        marginRight: 10,
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
