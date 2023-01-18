import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RadioButtons from "./components/RadioButtons";
import OnBoarding from "./screens/OnBoarding";

const Stack = createStackNavigator();

export default function App() {
    const items = [
        { value: "seller", label: "seller" },
        { value: "buyer", label: "buyer" },
        { value: "admin", label: "admin" },
        { value: "admin2", label: "admin2" },
    ];
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="OnBoarding"
                        component={OnBoarding}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
