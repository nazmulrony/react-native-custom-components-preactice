import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import DrawerNavigator from "./navigators/DrawerNavigator";
import Inventory from "./screens/Inventory";
import OnBoarding from "./screens/OnBoarding";
import SignupForm from "./screens/signupForm";
import UnlicensedUsers from "./screens/UnlicensedUsers";

const Stack = createStackNavigator();
export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen
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
                            // headerShown: false,
                            title: "",
                        }}
                    />
                    <Stack.Screen
                        name="drawer"
                        component={DrawerNavigator}
                        options={{
                            headerShown: false,
                        }}
                    /> */}
                    {/* <Stack.Screen
                        name="UnlicensedUsers"
                        component={UnlicensedUsers}
                        options={{
                            headerShown: false,
                        }}
                    /> */}
                    <Stack.Screen name="Inventory" component={Inventory} />
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
