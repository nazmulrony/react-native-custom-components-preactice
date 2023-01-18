import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import RadioButtons from "../components/RadioButtons";
import { GlobalStyles } from "../constants/style";

const OnBoarding = () => {
    const [value, setValue] = useState(null);
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/images/logo.png")} />
            </View>
            <Text style={styles.title}>Sign Up Cannabis Connecter</Text>
            <View style={styles.radioButtonContainer}>
                <RadioButtons
                    items={[
                        { value: "licensed", label: "licensed users" },
                        { value: "unlicensed", label: "unlicensed users" },
                    ]}
                    color={GlobalStyles.colors.primary500}
                    onPress={setValue}
                    initial={value}
                    direction="row"
                    gap={32}
                />
            </View>
        </View>
    );
};

export default OnBoarding;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imageContainer: {
        alignItems: "center",
        marginTop: 100,
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 16,
    },
    radioButtonContainer: {
        alignItems: "center",
    },
});
