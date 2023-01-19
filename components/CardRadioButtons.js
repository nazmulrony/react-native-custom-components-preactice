import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";
import { Ionicons } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const CardRadioButtons = ({ items, onPress, initial }) => {
    // console.log(items);
    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <Pressable
                    key={index}
                    style={[
                        styles.card,
                        item.userType === initial && styles.selected,
                        item?.style && { alignSelf: "center" },
                    ]}
                    onPress={() => onPress(item.userType)}
                >
                    <item.Icon
                        width={40}
                        height={40}
                        style={{ marginRight: 4 }}
                    />
                    <View>
                        <Text style={styles.userType}>{item.userType}</Text>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                    </View>
                    {/* <View style={styles.outer}></View> */}
                    <View style={styles.outer}>
                        {item.userType === initial ? (
                            <Ionicons
                                name="checkmark-circle-sharp"
                                size={18}
                                color={GlobalStyles.colors.primary500}
                            />
                        ) : (
                            <Ionicons
                                name="radio-button-off-outline"
                                size={18}
                                color={GlobalStyles.colors.gray200}
                            />
                        )}
                    </View>
                </Pressable>
            ))}
        </View>
    );
};

export default CardRadioButtons;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 16,
        justifyContent: "center",
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray200,
        borderRadius: 8,
        paddingHorizontal: 4,
        paddingBottom: 12,
        paddingTop: 22,
        width: "47%",
        marginVertical: 4,
        marginHorizontal: 4,
        position: "relative",
    },
    userType: {
        fontWeight: "bold",
        fontSize: 12,
    },
    description: {
        fontSize: 10,
        width: "60%",
    },
    outer: {
        position: "absolute",
        top: 6,
        right: 8,
    },
    inner: {},
    selected: {
        borderWidth: 1.2,
        borderColor: GlobalStyles.colors.primary500,
    },
});
