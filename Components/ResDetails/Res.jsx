import { Box, Button, FlatList, ScrollView, Text, View } from "native-base"
import { Image, HStack } from "native-base"
import { Ionicons } from "@expo/vector-icons";
import Star from "react-native-star-view/lib/Star"
import { CircleIcon } from "native-base";
import * as React from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ResDetailsCard from "./ResDetailsCard";
import MenuCard from "./menuCard";
import InfoCard from "./InfoCard";
import ReviewCard from "./ReviewCard";
import { useState,useEffect } from "react";
import { collection,getDocs,getDoc,doc } from "firebase/firestore/lite";
import { db } from "../../Firebase/firebase";

export const ResDetails = (props) => {
    const  ResID = props.route.params.ResID;
    const [Res,setRes] =useState([])
    const [Menu,setMenu] =useState([])
    const Rest = doc(db, 'Restaurant',ResID);
    const Menus = collection(db, 'Restaurant',ResID)
    useEffect(()=>{
        async function getResturants() {
            const ResSnapshot = await getDoc(Rest);
            const ResList = ResSnapshot.data()
            setRes(ResList)
            return ResList
      }
      async function getMenu() {
        const ResSnapshot = await getDocs(Menus);
        const MenuList = ResSnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setMenu(MenuList);
        return MenuList;
      }



      getResturants()
      getMenu()

    },[])
   
    const FirstRoute = () => (
        <>
            <MenuCard props={props} Menu={Menu}/>
        </>
    );

    const SecondRoute = () => (

        <InfoCard />
    );

    const FourRoute = () => (

        <ReviewCard />
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        four: FourRoute
    });

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Menu' },
        { key: 'second', title: 'Info' },
        // { key: 'Three', title: 'Photos' },
        { key: 'four', title: 'Reviews' }
    ]);




    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: "white", height: "100%" }}>

                    <ResDetailsCard Res={Res}/>

                    <View style={{ color: "black" }}>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={{ width: layout.width }}
                            style={{ color: "red" }}
                            renderTabBar={props => {
                                return <TabBar
                                    {...props}
                                    inactiveColor="black"
                                    activeColor="#e32207"
                                    indicatorStyle={{ backgroundColor: "#e32207" }}
                                    style={{ backgroundColor: "white" }}
                                />
                            }
                            }
                        />
                    </View>

                    <View style={{  position:'sticky',bottom:0 }}>
                        {
                            localStorage.getItem("Added") && <Button colorScheme="red" width="100%" rightIcon={<Ionicons name="basket" size="lg" color="white" />}
                            onPress={() => props.navigation.navigate({name:'MyBasket'})}
                            > Go To Basket </Button>
                        }
                    </View>

                </View>
            </ScrollView>


        </>
    )
}
