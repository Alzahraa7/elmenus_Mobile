import { Text, View, StyleSheet,FlatList } from "react-native";
import { db } from "../../Firebase/firebase";
import { collection,getDocs } from "firebase/firestore/lite";
import { Ionicons } from "@expo/vector-icons";

import {

  NativeBaseProvider,
  
} from "native-base";
import { Box,Stack,Input,Button } from "native-base";
import { SearchBar } from "react-native-screens";
import Card from "./Card";
import { useState } from "react";
const Restaurant = (props) => {
  const [propsCopy,setProps]=useState(props)
  console.log(props)
   const [Res,setRes] =useState([])
  async function getResturants() {
    const Res = collection(db, 'Restaurant');
    const ResSnapshot = await getDocs(Res);
    const ResList = ResSnapshot.docs.map(doc => doc.data());
    setRes(ResList)
    return ResList 
  }
  getResturants()
   const updateSearch=()=>{
         console.log("Hi")
   }
  
  return (
    <>
      <NativeBaseProvider>
        <View
          style={{ flex: 1,backgroundColor:'white'}}
        >
            
          <Stack  space={4} w="100%" >
          {/* <SearchBar
            placeholder="Type Here to Search..." onChangeText={updateSearch} 
           /> */}
           
          <Input size="md" placeholder="     Find a Resturant or Dish" type="Search" variant="filled" style={{"paddingLeft":24,"position":"relative"}} />
          <Ionicons name="search" size={20}  color={"grey"} style={{"position":"absolute","top":9}} />
          </Stack>
            {/* <FlatList
               data={Res}
               renderItem={({ item }) => <Card item={item} />}
               ItemSeparatorComponent={() => (
          <Box
            style={{
              margin: 5,
             
            }}
          ></Box>
        )}
        
      /> */}
      <Card propsCopy={propsCopy}/>
      
        
         <Button onPress={() => props.navigation.navigate({name:'ResDetails'})}> </Button>
        </View>

      </NativeBaseProvider>
    </>
  );
};

export default Restaurant;


