import { View } from "react-native";
import { HStack, Text,Box, Image, ScrollView, VStack, FlatList } from 'native-base'
import { useState } from "react/cjs/react.production.min";
import Star from "react-native-star-view/lib/Star"


const CityCard = (props) => {


    return (

        <View style={{ marginRight: "15px" }}>
        <Image source={{
            uri: `${props.res.Image}`
        }} alt="Alternate Text" size="160px" borderRadius={10}/>

        <Image source={{
            uri: `${props.res.Logo}`
        }} alt="Alternate Text" size="50px" borderRadius={10} style={{ position: "absolute", top: "50%", left: "2%" }} />

        <Text> {props.res.Name} </Text>
        <HStack>
            <Star score={props.res.Rate} style={{ width: "80", height: "15" }}/>
            <Text>{props.res.Rate} Rating</Text>
        </HStack>
    </View>


    )
}

export default CityCard;