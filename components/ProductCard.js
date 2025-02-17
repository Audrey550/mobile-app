import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = () => {
    return (
        <View style={StyleSheet.card}>
            <Image 
                source={require("../images/tomnookpillow.jpg")} 
                style={styles.image} />
            <Text style={styles.title}>Tom Nook Pillow</Text>
            <Text style={styles.price}>€ 19.95</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 16,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
    },
    price: {
        fontSize: 14,
        color: "#888",
        marginTop: 4,
    },
});

export default ProductCard;
    