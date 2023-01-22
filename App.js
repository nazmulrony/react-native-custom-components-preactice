import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import DrawerNavigator from "./navigators/DrawerNavigator";
import OnBoarding from "./screens/OnBoarding";
import SignupForm from "./screens/signupForm";

const Stack = createStackNavigator();
export default function App() {
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
                    <Stack.Screen
                        name="signupFrom"
                        component={SignupForm}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="drawer"
                        component={DrawerNavigator}
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
