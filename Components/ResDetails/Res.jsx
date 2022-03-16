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



const FirstRoute = () => (
    // <View style={{ flex: 1 }} />
    <>
        <MenuCard/>
    </>
);

const SecondRoute = () => (
    // <View style={{ flex: 1}} />
    // <Text>Info</Text>
    <InfoCard/>
);

// const ThreeRoute = () => (
//     // <View style={{ flex: 1}} />
//     <Text>Photos</Text>
// );
const FourRoute = () => (
    // <View style={{ flex: 1}} />
    // <Text>Reviews</Text>
    <ReviewCard/>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    // Three: ThreeRoute,
    four: FourRoute
});

export const ResDetails = () => {

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

                    <ResDetailsCard />

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



                </View>
            </ScrollView>


        </>
    )
}
