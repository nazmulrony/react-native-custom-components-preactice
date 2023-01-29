import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Defs, LinearGradient, Stop, Svg } from "react-native-svg";
import { VictoryLabel, VictoryPie } from "victory-native";

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
                <Svg height={40} width={80}>
                    <Defs>
                        <LinearGradient
                            id="salesChart"
                            x1="0%"
                            x2="0%"
                            y1="0%"
                            y2="100%"
                        >
                            <Stop offset="0%" stopColor="#9155FD" />
                            <Stop offset="100%" stopColor="white" />
                        </LinearGradient>
                    </Defs>
                    <VictoryPie
                        innerRadius={32}
                        colorScale={["#D9D9D9", "#5CBAEE"]}
                        height={80}
                        width={80}
                        padding={{ top: 0, bottom: 0, right: 0, left: 0 }}
                        startAngle={90}
                        endAngle={-90}
                        data={[100 - progress, progress]}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        style={{
                            fontSize: 14,
                            fontWeight: "400",
                        }}
                        x={40}
                        y={30}
                        text={`${progress}%`}
                    />
                </Svg>
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
