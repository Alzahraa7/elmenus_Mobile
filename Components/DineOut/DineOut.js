import { View, StyleSheet, ImageBackground } from "react-native";
import { HStack, Text, Image, ScrollView, CheckIcon, VStack, FlatList, Box, Input, CircleIcon, SearchIcon } from 'native-base'
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Star from "react-native-star-view/lib/Star"
import MoodCard from "./moodCard";
import CityCard from "./cityResCard";
import NewResCard from "./newResCard";

import { collection,getDocs,getDoc,doc } from "firebase/firestore/lite";
import { db } from "../../Firebase/firebase";

const DineOut = () => {
  

    const dineoutbyMood = [
        {
            Name: "COFFEESHOPS",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14b83-2225-11e8-924e-0242ac110011.jpg"
        },
        {
            Name: "WORK OR STUDY",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14d74-2225-11e8-924e-0242ac110011.jpg"
        },
        {
            Name: "CASUAL DINING",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b15181-2225-11e8-924e-0242ac110011.jpg"
        },
        {
            Name: "HIDDEN GEMS",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14c1e-2225-11e8-924e-0242ac110011.jpg"
        }
    ];

    const discoverCity = [
        {
            Name: "Burger King",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ac4317db-2561-4766-af36-3314513b7d5e.jpg",
            Logo: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/9a5c967e-7937-488f-b4ce-69f165f4c86e.jpg",
            Rate: 3.5
        },
        {
            Name: "McDonald's",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/eb1ad4a5-6c50-4c07-aec5-162f5b09266f.jpg",
            Logo: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/4b182745-abbb-4926-9069-ac05ba1e1841.jpg",
            Rate: 5
        },
        {
            Name: "Bazooka",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/aad0463c-f53e-4a6c-969c-55bc55fed1bf.jpg",
            Logo: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/d772c046-4a28-4c85-bfe6-0fd4627c37b4.jpg",
            Rate: 3.5
        },
        {
            Name: "Kansas Fried Chicken",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/91e12be8-ae48-4aa6-826c-47b771502891.jpg",
            Logo: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/9fecd758-50ca-484d-881d-ed17a3080daf.jpg",
            Rate: 4
        }
    ]

    const types = [
        {
            Name: "PIZZA",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b66b9310-bc6c-449c-a163-4c86947568c0.jpg"
        },
        {
            Name: "FRIED CHICKEN",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/a9dd12fb-782a-40d7-a9b3-34fba2802d2b.jpg"
        },
        {
            Name: "PASTA",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/c4169de0-5ef1-462f-b9da-b190d5616acf.jpg"
        },
        {
            Name: "SANDWICHES",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/a13d5bda-cf1f-45b6-aeb4-d8549491c7f8.jpg"
        },
        {
            Name: "BURGERS",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/f7e33790-77d7-4739-8992-d73b810fdc0c.jpg"
        },

    ]
    const [Res,setRes] =useState([]);
    let [len,setLen] = useState(0)
    useEffect(()=>{
      async function getResturants() {
          const RestaurantRef = collection(db,'Restaurants')
          const ResSnapshot = await getDocs(RestaurantRef);
          const ResList = ResSnapshot.docs.map(doc => doc.data());
          setLen(ResSnapshot.docs.length)
          setRes(ResList)
          return ResList
    }
    getResturants()
},[])

    return (
        <>
            <ScrollView style={{ backgroundColor: "white" }}>

                <View style={{ backgroundColor: "#FCFDFE" }}>
                    <View style={{ marginLeft: "35px", marginTop: "5px" }}>
                        <Input variant="outline" placeholder="Find a Restaurant" width={350} />
                        <HStack>
                            <Text style={{ marginLeft: "100px", marginRight: "5px" }}>Dine out in</Text>
                            <Text style={{ marginLeft: "5px" }} color="#e32207">Maadi</Text>
                        </HStack>
                    </View>
                </View>


                <Box>
                    <HStack justifyContent="space-between" style={{ margin: "15px" }}>
                        <Text fontSize="lg"> Discover by moods </Text>
                        <Text fontSize="lg" color="#e32207"> See All </Text>
                    </HStack>

                    <FlatList
                        style={{ margin: "3px", height: "auto" }}
                        numColumns={2}
                        data={dineoutbyMood}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <MoodCard mood={item} />
                        }

                    />
                </Box>

                <View>
                    <HStack justifyContent="space-between" style={{ margin: "15px", marginTop: "30px" }}>
                        <Text fontSize="lg"> Discover Maadi </Text>
                        <Text fontSize="lg" color="#e32207"> See All </Text>
                    </HStack>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Res}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <CityCard res={item} />
                            )
                        }}
                    />
                </View>

                <View style={{ marginLeft: "5px" }}>
                    <HStack justifyContent="space-between" style={{ margin: "15px", marginTop: "30px" }}>
                        <Text fontSize="lg"> Discover by Top Dishes </Text>
                        <Text fontSize="lg" color="#e32207"> See All </Text>
                    </HStack>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={types}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginRight: "7px" }}>
                                    <Image source={{
                                        uri: `${item.Image}`
                                    }} alt="Alternate Text" size="100px" borderRadius={10} />

                                    <Text style={{ textAlign: "center", marginTop: "5px" }}>{item.Name}</Text>
                                </View>
                            )
                        }}
                    />

                </View>


                <View>
                    <HStack justifyContent="space-between" style={{ margin: "15px", marginTop: "30px" }}>
                        <Text fontSize="lg"> Hidden gems </Text>
                        <Text fontSize="lg" color="#e32207"> See All </Text>
                    </HStack>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Res}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <CityCard res={item} />
                            )
                        }}
                    />
                </View>

                <View>
                    <HStack justifyContent="space-between" style={{ margin: "15px", marginTop: "30px" }}>
                        <Text fontSize="lg"> New Restaurants </Text>
                        <Text fontSize="lg" color="#e32207"> See All </Text>
                    </HStack>

                    <FlatList
                        style={{ marginLeft: "5px" }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Res}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <NewResCard res={item} />
                            )
                        }}
                    />
                </View>



            </ScrollView>
        </>
    )
}

export default DineOut;

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
        paddingTop: 130,
        paddingLeft: 5
        // justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 20,
        lineHeight: 84,
      
        // fontWeight: "bold",
        // textAlign: "center",
        // backgroundColor: "#000000c0"
    }
})