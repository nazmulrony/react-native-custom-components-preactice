import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={styles.profileContainer}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../../assets/images/person.webp")}
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text style={styles.fontBase}>Welcome!</Text>
                    <Text style={{ fontSize: 16 }}>Nazmul Rony</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={24}
                    color={GlobalStyles.colors.gray300}
                    style={{ marginRight: 24 }}
                />
                <Ionicons
                    name="notifications-outline"
                    size={24}
                    color={GlobalStyles.colors.gray300}
                />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.light50,
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    profileContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16,
    },
    imageContainer: {
        height: 44,
        width: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primary500,
        overflow: "hidden",
        marginRight: 6,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    fontBase: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
    },
});
