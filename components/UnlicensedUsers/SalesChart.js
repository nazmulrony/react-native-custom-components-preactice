import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { VictoryLabel, VictoryPie } from "victory-native";
import { Svg } from "react-native-svg";
import { GlobalStyles } from "../../constants/style";

const SalesChart = () => {
    const data = [
        { x: "Cats", y: 60 },
        { x: "Dogs", y: 25 },
        { x: "Birds", y: 20 },
        { x: "Birds", y: 55 },
    ];
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Total Sales</Text>
                <Text style={styles.fontBase}>Calculated in last 7 days</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>$35400.36</Text>
                    <Ionicons
                        name="caret-up-outline"
                        size={13}
                        color="#4CAF50"
                        style={{ marginHorizontal: 4 }}
                    />
                    <Text style={{ color: "#4CAF50" }}>9%</Text>
                </View>
            </View>
            <View style={styles.chartContainer}>
                <Svg height={80} width={80}>
                    <VictoryPie
                        padding={{ top: 0, bottom: 0, right: 0, left: 0 }}
                        height={80}
                        width={80}
                        innerRadius={30}
                        colorScale={[
                            "#9155FD",
                            "#35C2FD",
                            "#FF830C",
                            "#6FD226",
                        ]}
                        data={data}
                        labels={() => ""}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        style={{ fontSize: 20, fontWeight: "600" }}
                        x={40}
                        y={40}
                        text="91%"
                    />
                </Svg>
            </View>
        </View>
    );
};

export default SalesChart;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        borderRadius: 6,
        flex: 1,
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
});
