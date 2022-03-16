import { Box, Button, FlatList, ScrollView, Text, View, VStack } from "native-base"
import { Image, HStack } from "native-base"
import { Ionicons } from "@expo/vector-icons";
import Star from "react-native-star-view/lib/Star"
import { CircleIcon } from "native-base";
import * as React from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const ReviewCard = () => {

    const Reviews = [
        {
            Name: "Shrouk Khaled",
            Description: "this is a gread restaurant, i love it so so much",
            Rate: 4.5,
        },
        {
            Name: "Shrouk Khaled",
            Description: "this is a gread restaurant, i love it so so much",
            Rate: 4.5,
        },
        {
            Name: "Shrouk Khaled",
            Description: "this is a gread restaurant, i love it so so much",
            Rate: 4.5,
        },
        {
            Name: "Shrouk Khaled",
            Description: "this is a gread restaurant, i love it so so much",
            Rate: 4.5,
        },
        {
            Name: "Shrouk Khaled",
            Description: "this is a gread restaurant, i love it so so much",
            Rate: 4.5,
        },
    ]

    return (
        <>
            <View height="auto">
                <Box>
                    <Text style={style.backText}> <Ionicons name="people" size={20} /> 42k Reviews </Text>
                </Box>
            </View>

            <FlatList
                ItemSeparatorComponent={() => <hr color="#A2A4A4" style={{ height: "0px", width: "90%" }} />}
                data={Reviews}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <>
                            <View style={{ padding: "20px" }}>
                                <HStack>
                                    <Box style={{ color: "D5D1D1", backgroundColor: "#F1EDED", borderRadius: "50%", height: "30px", padding: "5px", marginTop: "10px" }}>
                                        <Ionicons name="person" size={20} style={{ color: "#817979" }} />
                                    </Box>
                                    <VStack style={{ paddingLeft: "10px" }}>
                                        <Text> {item.Name} </Text>
                                        <HStack>
                                            <Star score={item.Rate} style={{ width: "80", height: "15" }} />
                                            <Text style={{ color: "#9E9898" }}> 3 days </Text>
                                        </HStack>
                                        <Text> {item.Description} </Text>
                                    </VStack>
                                </HStack>
                            </View>
                        </>
                    )
                }}
            />


            {/* <View style={{ padding: "20px" }}>
                <HStack>
                    <Box style={{ color: "D5D1D1", backgroundColor: "#F1EDED", borderRadius: "50%", height: "30px", padding: "5px", marginTop: "10px" }}>
                        <Ionicons name="person" size={20} style={{ color: "#817979" }}/>
                    </Box>
                    <VStack style={{ paddingLeft: "10px" }}>
                        <Text> Sondos Amgad </Text>
                        <HStack>
                            <Star score={4.5} style={{ width: "80", height: "15" }} />
                            <Text style={{ color: "#9E9898" }}> 3 days </Text>
                        </HStack>
                        <Text> this is a gread restaurant, i love it so so much </Text>
                    </VStack>
                </HStack>
            </View> */}


        </>
    )
}

export default ReviewCard;



const style = StyleSheet.create({

    backText: {
        backgroundColor: "#E7E5E5",
        padding: "10px",
        width: "100%",
        fontSize: "20px"
    },

})