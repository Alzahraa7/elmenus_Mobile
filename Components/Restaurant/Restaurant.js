import { Text, View, StyleSheet,FlatList } from "react-native";
import { db } from "../../Firebase/firebase";
import { collection,getDocs } from "firebase/firestore/lite";
import {

  NativeBaseProvider,
  
} from "native-base";
import { Box } from "native-base";
import Card from "./Card";
import { useState } from "react";
const Restaurant = () => {
   const [Res,setRes] =useState([])
  async function getResturants() {
    const Res = collection(db, 'Restaurant');
    const ResSnapshot = await getDocs(Res);
    const ResList = ResSnapshot.docs.map(doc => doc.data());
    setRes(ResList)
    return ResList 
  }
  getResturants()
  
  return (
    <>
      <NativeBaseProvider>
        <View
          style={{ flex: 1}}
        >
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

      <Card/>
          
        </View>

      </NativeBaseProvider>
    </>
  );
};

export default Restaurant;


