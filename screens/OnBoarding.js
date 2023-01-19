import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import RadioButtons from "../components/RadioButtons";
import { GlobalStyles } from "../constants/style";
import CardRadioButtons from "../components/CardRadioButtons";
import Logo from "../assets/images/logo.svg";
import PrimaryButton from "../components/PrimaryButton";
import TextButton from "../components/TextButton";

import { licensedUsers, unlicensedUsers } from "../dummyData";
("../dummyData");

const OnBoarding = () => {
    const [value, setValue] = useState("licensed");
    const [userType, setUserType] = useState(null);
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Logo width={150} height={120} />
            </View>
            <Text style={styles.title}>Sign Up To Cannabis Connecter</Text>
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
            {value === "licensed" ? (
                <CardRadioButtons
                    items={licensedUsers}
                    onPress={setUserType}
                    initial={userType}
                />
            ) : (
                <CardRadioButtons
                    items={unlicensedUsers}
                    onPress={setUserType}
                    initial={userType}
                />
            )}
            <View style={styles.button}>
                <PrimaryButton style={{ width: 180 }}>Continue</PrimaryButton>
            </View>
            <View style={styles.sinInButtonContainer}>
                <Text style={styles.signInText}>Already have an account?</Text>
                <TextButton>Sign In</TextButton>
            </View>
        </View>
    );
};

export default OnBoarding;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
    },
    imageContainer: {
        alignItems: "center",
        marginTop: 100,
    },
    image: {
        height: 100,
        width: 120,
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 16,
    },
    radioButtonContainer: {
        alignItems: "center",
    },
    button: {
        alignItems: "center",
    },
    signInText: {
        alignItems: "center",
    },
    sinInButtonContainer: {
        marginVertical: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
