import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, FlatList } from "react-native";

const { width, height } = Dimensions.get("window");

const images = [
    { uri: "https://picsum.photos/id/10/200/300" },
    { uri: "https://picsum.photos/id/20/200/300" },
    { uri: "https://picsum.photos/id/30/200/300" },
];

const ImageItem = ({ item }) => {
    return (
        <View style={{ width, height }}>
            <Image
                source={item}
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
        </View>
    );
};
const ImageSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => (index + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <FlatList
            data={images}
            renderItem={ImageItem}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
                setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
            }}
            scrollEventThrottle={16}
            snapToAlignment="center"
            snapToInterval={width}
            decelerationRate="fast"
            initialScrollIndex={index}
        />
    );
};

export default ImageSlider;
