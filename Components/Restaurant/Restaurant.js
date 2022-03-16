import { Text, View, StyleSheet, FlatList } from "react-native";
import { db } from "../../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { Ionicons } from "@expo/vector-icons";

import { NativeBaseProvider } from "native-base";
import { Box, Stack, Input, Button,HStack,Spinner,Heading,VStack,Divider } from "native-base";
import { SearchBar } from "react-native-screens";
import Card from "./Card";
import { useEffect, useState } from "react";
const Restaurant = (props) => {
  const [propsCopy, setProps] = useState(props);

  const [Res, setRes] = useState([]);

  useEffect(() => {
    let isMounted = true; // note mutable flag
    async function getResturants() {
      const Rest = collection(db, "Restaurant");
      const ResSnapshot = await getDocs(Rest);
      const ResList = ResSnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setRes(ResList);
      return ResList;
    }
    getResturants().then((data) => {
      if (isMounted) setRes(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const updateSearch = () => {
    console.log("Hi");
  };
  if (Res.id)
    return (
      <>
        <NativeBaseProvider>
          <View style={{ flex: 1, backgroundColor: "white" }}>
          <VStack my="4" space={5} w="100%"  divider={<Box px="2">
          <Divider />
        </Box>}>
      <VStack w="100%" space={5} alignSelf="center">
        <Input placeholder="Search" variant="filled" width="100%"  py="1" px="2" borderWidth="0" InputLeftElement={<Ionicons ml="2" size="4" color="gray.400"  name="ios-search" /> } />
      </VStack>
      </VStack>
            <FlatList
              data={Res}
              renderItem={({ item }) => (
                <Card item={item} propsCopy={propsCopy} />
              )}
              ItemSeparatorComponent={() => (
                <Box
                  style={{
                    margin: 5,
                  }}
                ></Box>
              )}
            />
            {/* <Card propsCopy={propsCopy}/> */}
          </View>
        </NativeBaseProvider>
      </>
    );
  return (
    <HStack space={2}  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading......
      </Heading>
    </HStack>
  );
};

export default Restaurant;
