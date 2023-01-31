import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { productInfo } from "../../dummyData";
import { ScrollView } from "react-native-gesture-handler";

import Icon from "../../assets/images/inventory.svg";
const ProductInfo = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {productInfo.map((product, index) => (
                    <View key={index} style={styles.cardContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.fontBase}>{product.name}</Text>
                            <Text style={styles.title}>{product.amount}KG</Text>
                        </View>
                        {<product.Icon height={40} width={40} />}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ProductInfo;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: -8,
    },
    cardContainer: {
        flexDirection: "row",
        padding: 18,
        backgroundColor: "#ffffffff",
        borderRadius: 8,
        marginVertical: 24,
        marginHorizontal: 8,
    },
    textContainer: {
        marginRight: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: GlobalStyles.colors.gray700,
        marginVertical: 8,
    },
    fontBase: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
    },
    buttonsContainer: {
        marginVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
