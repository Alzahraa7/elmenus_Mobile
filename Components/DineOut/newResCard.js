import { View } from "react-native";
import { HStack, Text,Box, Image, ScrollView, VStack, FlatList } from 'native-base'
import { useState } from "react/cjs/react.production.min";

const NewResCard = (props) => {


    return (

        <View style={{ marginRight: "7px" }}>
        <Image source={{
            uri: `${props.res.Logo}`
        }} alt="Alternate Text" size="70px" borderRadius={10} />

        <Text style={{  textAlign:"center" }}>Bazooka</Text>
    </View>


    )
}

export default NewResCard;