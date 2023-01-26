import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import TextButton from "../components/TextButton";

const SignupForm = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate("UnlicensedUsers");
    };
    return (
        <View style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
                <Text style={styles.title}>Become a grower</Text>
                <Input label={"First Name*"} inputConfig={{}} />
                <Input label={"Last Name*"} inputConfig={{}} />
                <Input label={"Business Name*"} inputConfig={{}} />
                <Input label={"Contact Email*"} inputConfig={{}} />
                <Input label={"Contact Number*"} inputConfig={{}} />
                <Input label={"DBA"} inputConfig={{}} />
                <Input label={"License Type*"} inputConfig={{}} />
                <Input label={"License Number*"} inputConfig={{}} />
                <Input label={"State"} inputConfig={{}} />
                <Input label={"City"} inputConfig={{}} />
                <Input label={"ZIP Code"} inputConfig={{}} />
                <Input label={"Website"} inputConfig={{}} />
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginVertical: 8,
                    }}
                >
                    <Text>By proceeding, I agree to Cannabis Connector </Text>
                    <TextButton>Terms of Use</TextButton>
                    <Text>and acknowledge that I have read the</Text>
                    <TextButton>Privacy Policy.</TextButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={onPressHandler}>
                        Create Account
                    </PrimaryButton>
                </View>
            </ScrollView>
        </View>
    );
};

export default SignupForm;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 16,
        // paddingTop: 32,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        // textAlign: "center",
        marginVertical: 16,
        // marginTop: 32,
    },

    button: {
        alignItems: "center",
        marginVertical: 24,
        paddingBottom: 36,
    },
    termsText: {},
});
