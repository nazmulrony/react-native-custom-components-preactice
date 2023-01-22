import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

const SignupForm = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate("drawer");
    };
    return (
        <View style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
                <Text style={styles.title}>
                    Complete your profile to continue
                </Text>
                <Input label={"First Name"} inputConfig={{}} />
                <Input label={"Last Name"} inputConfig={{}} />
                <Input label={"Business Name"} inputConfig={{}} />
                <Input label={"Contact Email"} inputConfig={{}} />
                <Input label={"Contact Number"} inputConfig={{}} />
                <Input label={"DBA"} inputConfig={{}} />
                <Input label={"License Type"} inputConfig={{}} />
                <Input label={"License Number"} inputConfig={{}} />
                <Input label={"State"} inputConfig={{}} />
                <Input label={"City"} inputConfig={{}} />
                <Input label={"ZIP Code"} inputConfig={{}} />
                <Input label={"Website"} inputConfig={{}} />
                <PrimaryButton
                    style={{ width: 180, marginVertical: 32 }}
                    onPress={onPressHandler}
                >
                    Create Account
                </PrimaryButton>
            </ScrollView>
        </View>
    );
};

export default SignupForm;

const styles = StyleSheet.create({
    screen: {
        padding: 16,
        paddingTop: 24,
    },
    scrollView: {
        paddingBottom: 100,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 36,
        marginTop: 64,
    },
});
