import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import RadioButtons from "../components/RadioButtons";
import { GlobalStyles } from "../constants/style";
import CardRadioButtons from "../components/CardRadioButtons";
import Logo from "../assets/images/logo.svg";
import PrimaryButton from "../components/PrimaryButton";
import TextButton from "../components/TextButton";

import { licensedUsers, unlicensedUsers } from "../dummyData";
("../dummyData");

const OnBoarding = ({ navigation }) => {
    const [value, setValue] = useState("licensed");
    const [userType, setUserType] = useState(null);
    const singUpHandler = () => {
        navigation.navigate("signupFrom");
    };
    return (
        <View style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                    <PrimaryButton onPress={singUpHandler}>
                        Continue
                    </PrimaryButton>
                </View>
                <View style={styles.sinInButtonContainer}>
                    <Text style={styles.signInText}>
                        Already have an account?
                    </Text>
                    <TextButton>Sign In</TextButton>
                </View>
            </ScrollView>
        </View>
    );
};

export default OnBoarding;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
        // marginTop: 32,
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    imageContainer: {
        alignItems: "center",
        marginTop: 50,
    },
    image: {
        height: 100,
        width: 120,
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "500",
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
        paddingBottom: 50,
    },
});
