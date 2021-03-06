import { Box, Button, FlatList, ScrollView, Text, View } from "native-base"
import { Image, HStack } from "native-base"
import { Ionicons } from "@expo/vector-icons";
import Star from "react-native-star-view/lib/Star"
import { CircleIcon } from "native-base";
import * as React from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const categories = [
    'Top Dishes',
    '4x4 Pizza',
    'Meat Pizza',
    'Chicken Pizza',
    'Special Pizza',
    'Cheese Lovers Pizza',
    'Seafood Pizza',
    'Drinks'
]

const MenuCard = ({props,Menu}) => {

    console.log(Menu)

    return (
        <>
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <Text style={style.text}>{item}</Text>
                        )
                    }}
                />
            </View>

            <View style={style.backText}>
                <Text>Top Dishes</Text>
            </View>

            
                <FlatList
                    ItemSeparatorComponent={() => <hr color="#A2A4A4" style={{height: "0px", width: "90%"}}/>}
                    data={Menu}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <>
                            <HStack>
                                <View style={style.cardStyle}>
                                    <HStack style={{ color: "black" }}>
                                        <Button style={style.plusBtn} variant="ghost" colorScheme="success"  onPress={() => props.navigation.navigate('MealDetails',{MealID: item.id})} >+</Button>
                                        <Text style={{ fontWeight: "bold" }}>{ item.Name }</Text>
                                    </HStack>
                                    <Text style={{ marginBottom: "10px", color: "#8A8E8E", fontSize: "2vh", width: "200px" }}> {item.Description} </Text>
                                    <Text> {item.Size[0].Price} EGP </Text>
                                </View>
                                <Image source={{
                                    uri: `${item.Image}`
                                }} alt="Alternate Text" size="100px" borderRadius={10} />
                                </HStack>
                            </>
                        )
                    }}
                />
          

        </>
    )
}

export default MenuCard;



const style = StyleSheet.create({
    text: {
        backgroundColor: "#DDE0DE",
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
        backgroundColor: "#FBFCFC",
        padding: "15px",
        width: "100%",
        fontSize: "100px"
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