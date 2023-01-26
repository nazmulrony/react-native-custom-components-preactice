import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import {
    VictoryArea,
    VictoryAxis,
    VictoryChart,
    VictoryTheme,
} from "victory-native";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import { GlobalStyles } from "../../constants/style";
import { Ionicons } from "@expo/vector-icons";
const BalanceChart = () => {
    const data = [
        { day: "Sun", value: 22 },
        { day: "Mon", value: 20 },
        { day: "Tue", value: 30 },
        { day: "Wed", value: 25 },
        { day: "Thu", value: 40 },
        { day: "Fri", value: 38 },
        { day: "Sat", value: 45 },
    ];
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text style={styles.fontBase}>Balance</Text>
                <TouchableOpacity
                    style={styles.widthDrawText}
                    activeOpacity={0.6}
                >
                    <Text>Withdraw</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.amount}>$35400.36</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="caret-up-outline" size={12} color="#4CAF50" />
                <Text
                    style={{
                        fontSize: 12,
                        marginHorizontal: 3,
                        color: GlobalStyles.colors.primary500,
                    }}
                >
                    6%
                </Text>
                <Text style={styles.fontBase}>than last week</Text>
            </View>
            <View style={styles.chartContainer}>
                <VictoryChart height={180} theme={VictoryTheme.material}>
                    <Defs>
                        <LinearGradient
                            id="balanceChart"
                            x1="0%"
                            x2="0%"
                            y1="0%"
                            y2="100%"
                        >
                            <Stop offset="0%" stopColor="#4CAF50" />
                            <Stop offset="100%" stopColor="white" />
                        </LinearGradient>
                    </Defs>
                    <VictoryArea
                        data={data}
                        animate
                        x="day"
                        y="value"
                        style={{
                            data: {
                                fill: "url(#balanceChart)",
                                stroke: "#4CAF50",
                                strokeWidth: 2,
                                fillOpacity: 0.7,
                            },
                        }}
                        // labels={({ datum }) => datum.value}
                    />
                    <VictoryAxis style={{ grid: { stroke: "none" } }} />
                </VictoryChart>
            </View>
        </View>
    );
};

export default BalanceChart;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginVertical: 24,
        borderRadius: 6,
        padding: 16,
        paddingBottom: 0,
        position: "relative",
    },
    chartContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    fontBase: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
    },
    amount: {
        fontSize: 16,
        fontWeight: "600",
    },
    widthDrawText: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary500,
        padding: 4,
        borderRadius: 6,
        backgroundColor: GlobalStyles.colors.primary50,
    },
});
