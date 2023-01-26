import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Auction from "../screens/Auction";
import AddProduct from "../screens/AddProduct";
import Inventory from "../screens/Inventory";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/style";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { TouchableOpacity } from "react-native-gesture-handler";

const BottomTab = createBottomTabNavigator();

const DashboardBottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={({ navigation }) => ({
                tabBarActiveTintColor: GlobalStyles.colors.primary500,

                tabBarInactiveTintColor: "black",
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{ backgroundColor: "#4CAF50" }}
                    >
                        <Text>OpenDrawer</Text>
                    </TouchableOpacity>
                ),
            })}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Auction"
                component={Auction}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="gavel" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="AddProduct"
                component={AddProduct}
                options={{
                    tabBarLabel: "Add Product",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="clipboard-search-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Inventory"
                component={Inventory}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="inventory"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default DashboardBottomTabNavigator;
