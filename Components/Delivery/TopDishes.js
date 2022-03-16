import { Box, Button, FlatList, Image,Text, Input, ScrollView } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useState } from "react";
const TopDishes = () =>{
    //const [isClicked,setIsCLicked] = useState(false);
    //const customStyle = isClicked? styles.clilckedImage:styles.Image
    const topDishes= [
        {
            Name:'All',
            URL:'https://www.elmenus.com/public/img/should-delete/all-dishes.png',
        },
        {
            Name:'Shawerma',
            URL:'https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/750d98e0-001d-4219-91f3-b95d6687c6ac.jpg',
        },
        {
            Name:'Sandwiches',
            URL:'https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/a13d5bda-cf1f-45b6-aeb4-d8549491c7f8.jpg',
        },
        {
            Name:'Desserts',
            URL:'https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/e279f0e5-f0d6-4673-ba0a-349d63b84533.jpg',
        },
        {
            Name:'Waffles',
            URL:'https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/1f7e9a27-26a6-463c-aed5-eb22220fda55.jpg',
        },
        {
            Name:'Donuts',
            URL:'https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b22fc974-27b7-11e8-add5-0242ac110011.jpg',
        },
    ]
    return(
        <>
        <Box marginTop='14px' marginLeft='10px' marginRight='10px' >
            <Box flexDirection='row' style={{justifyContent:'space-between'}}>
                <Text fontWeight='extrabold' fontSize='15px'>
                    Discover Top Dishes
                </Text>
                <Text fontWeight='extrabold' color='#e32207'>
                    See All
                </Text>
            </Box>
        <Box marginTop='2'>
            <FlatList style={{ flex: 1 }}
            data={topDishes} 
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>
                <>
                <Box flexDirection='column' margin='2'>
                    <Box borderRadius='10px'>
                    <Image  borderRadius='10px' width='20' height='20' source={{uri:item.URL}} />
                    </Box>
                    <Text fontWeight='600' textAlign='center'>{item.Name}</Text>
                </Box>
                </>
            }
        />
        </Box>
        </Box>
        </>
    )
}

// const styles = StyleSheet.create({
//     clilckedImage:{
//         borderWidth:2,
//         borderColor:'#e32207'
//     }
//     ,Image:{
//         borderWidth:0,
//         borderColor:'white'
//     }
// })

export default TopDishes;