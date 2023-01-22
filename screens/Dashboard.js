import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Dashboard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Hello There</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
});
