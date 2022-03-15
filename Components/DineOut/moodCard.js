import { View, StyleSheet, ImageBackground } from "react-native";
import { HStack, Text,Box, Image, ScrollView, VStack, FlatList } from 'native-base'
import { useState } from "react/cjs/react.production.min";

const MoodCard = (props) => {


    return (

            <HStack style={{ marginBottom: '3px', marginRight: '3px' }}>
                <View style={style.container}>
                    <ImageBackground source={{uri: `${props.mood.Image}`}} resizeMode="cover" style={style.image}>
                        <Text style={style.text}>{props.mood.Name}</Text>
                    </ImageBackground>
                </View>
            </HStack>


    )
}

export default MoodCard;

const style = StyleSheet.create({
    moodCard: {
        backgroundColor: "red",
        height: 50,
        width: 50,

    },
    container: {
        width: "200px"
    },
    image: {
        width: "200px",
        height: "200px",
        paddingTop: 140,
    },
    text: {
        color: "white",
        fontSize: 20,
        lineHeight: 60,
        paddingLeft: 2,
        backgroundColor: "#000000c0"
    }
})