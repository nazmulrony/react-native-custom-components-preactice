import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, TouchableOpacity } from "react-native";
import Dashboard from "../screens/Dashboard";
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
            <Drawer.Screen
                name="Inventory"
                component={Inventory}
                options={
                    {
                        // headerLeft: () => (
                        //     <TouchableOpacity
                        //         onPress={() => {}}
                        //         style={{ backgroundColor: "red" }}
                        //     >
                        //         <Text>OpenDrawer</Text>
                        //     </TouchableOpacity>
                        // ),
                    }
                }
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
