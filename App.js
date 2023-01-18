import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RadioButtons from "./components/RadioButtons";

export default function App() {
    const items = [
        { value: "seller", label: "seller" },
        { value: "buyer", label: "buyer" },
        { value: "admin", label: "admin" },
        { value: "admin2", label: "admin2" },
    ];
    const [value, setValue] = useState(null);
    console.log(value);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <RadioButtons
                items={items}
                color="#4CAF50"
                // direction="row"
                // gap={22}
                onPress={(value) => setValue(value)}
                initial={value}
            />
            <Text>Dummy text</Text>
        </View>
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
