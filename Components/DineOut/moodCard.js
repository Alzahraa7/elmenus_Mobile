import { View } from "react-native";
import { HStack, Text,Box, Image, ScrollView, VStack, FlatList } from 'native-base'
import { useState } from "react/cjs/react.production.min";

const MoodCard = (props) => {


    return (

            <HStack style={{ marginBottom: '3px', marginRight: '3px' }}>
                <Image source={{
                    uri: `${props.mood.Image}`
                }} alt="Alternate Text" size="200px" />
                <Text size="md" style={{ position: "absolute", top: "80%", color: "white" }}> {props.mood.Name} </Text>
            </HStack>
            // <Text>ko</Text>


    )
}

export default MoodCard;