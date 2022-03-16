import { Box, Button, FlatList, ScrollView, Text, View, VStack } from "native-base"
import { Image, HStack } from "native-base"
import { Ionicons } from "@expo/vector-icons";
import Star from "react-native-star-view/lib/Star"
import { CircleIcon } from "native-base";
import * as React from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const InfoCard = () => {
    return (
        <>
            <View height="auto">
                <Box>
                    <Text style={style.backText}> <Ionicons name="location" size={20} /> Adresses </Text>
                    <VStack style={{ padding: "10px" }}>
                        <Text style={{ marginLeft: "20px" }}> Maadi: Road 9 </Text>
                        <Text style={{ marginLeft: "20px" }}> Maadi: Road 12 </Text>
                        <Text style={{ marginLeft: "20px" }}> Shoubra: 5 masaked, 116 st </Text>

                    </VStack>
                </Box>
            </View>

            <View>
                <HStack >
                    <Text style={style.backText}> <Ionicons name="alert-circle" size={20} />Working Hours </Text>
                </HStack>
                <HStack style={{ marginLeft: "20px", padding: "10px" }}>
                    <Text style={{ color: "#B2AEAE" }}> Everyday </Text>
                    <Text> 11:00 AM - 02:45 AM </Text>
                </HStack>
            </View>

            <View>
            <HStack >
                    <Text style={style.backText}> <Ionicons name="bicycle" size={20} /> Delivery hours </Text>
                </HStack>
                <HStack style={{ marginLeft: "20px", padding: "10px" }}>
                    <Text style={{ color: "#B2AEAE" }}> Everyday </Text>
                    <Text> 11:00 AM - 02:45 AM </Text>
                </HStack>
            </View>



        </>
    )
}

export default InfoCard;



const style = StyleSheet.create({
    text: {
        backgroundColor: "#D5D1D1",
        color: "black",
        width: "auto",
        padding: "10px",
        margin: "5px",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomStartRadius: 30,
        borderTopStartRadius: 30,
        textAlign: "center"
    },
    backText: {
        backgroundColor: "#E7E5E5",
        padding: "10px",
        width: "100%",
        fontSize: "20px"
    },
    cardStyle: {
        margin: "10px",
        padding: "10px"
    },
    plusBtn: {
        color: "red",
        backgroundColor: "white",
        border: "1px solid black",
        width: "25px",
        height: "25px",
        marginRight: 10
    }
})