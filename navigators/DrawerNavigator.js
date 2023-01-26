import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Auction from "../screens/Auction";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Inventory from "../screens/Inventory";
import DashboardBottomTabNavigator from "./DashboardBottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{ backgroundColor: "red" }}
                    >
                        <Text>OpenDrawer</Text>
                    </TouchableOpacity>
                ),
            })}
        >
            <Drawer.Screen
                name="DashboardBottomTabNavigator"
                component={DashboardBottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Drawer.Screen name="Inventory" component={Inventory} />
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
