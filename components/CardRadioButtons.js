import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import grower from "../assets/images/grower.svg";
import processor from "../assets/images/processor.svg";
import dispensary from "../assets/images/dispensary.svg";
import transporters from "../assets/images/transporters.svg";
import lab from "../assets/images/lab.svg";
import debrisManagement from "../assets/images/debrisManagement.svg";
import { GlobalStyles } from "../constants/style";
import { Ionicons } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const CardRadioButtons = () => {
    const items = [
        {
            userType: "Grower",
            description: "I am a grower to join cannabis connecter",
            Icon: grower,
        },
        {
            userType: "Processor",
            description: "I am a processor to join cannabis connecter",
            Icon: processor,
        },
        {
            userType: "Dispensary",
            description: "I am a processor to join cannabis connecter",
            Icon: dispensary,
        },
        {
            userType: "Transporters",
            description: "I am a processor to join cannabis connecter",
            Icon: transporters,
        },
        {
            userType: "Lab",
            description: "I am a processor to join cannabis connecter",
            Icon: lab,
        },
        {
            userType: "Debris Management",
            description: "I am a processor to join cannabis connecter",
            Icon: debrisManagement,
        },
    ];
    const [value, setValue] = useState(null);
    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <Pressable
                    key={index}
                    style={[
                        styles.card,
                        item.userType === value && styles.selected,
                    ]}
                    onPress={() => setValue(item.userType)}
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
                        {item.userType === value ? (
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
        justifyContent: "space-between",
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
        marginVertical: 8,
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
        // height: 14,
        // width: 14,
        // borderRadius: 7,
        // borderWidth: 1,
        // borderColor: GlobalStyles.colors.gray200,
    },
    inner: {},
    selected: {
        borderWidth: 1.2,
        borderColor: GlobalStyles.colors.primary500,
    },
});
