import { Text, View, StyleSheet, FlatList } from "react-native";
import Star from "react-native-star-view/lib/Star";
import { Ionicons } from "@expo/vector-icons";
import { CircleIcon, ChevronRightIcon } from "native-base";
import {
  Button,
  Box,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Stack,
  Heading,
  Image,
  Spacer,
  Divider,
} from "native-base";
const Card = ({item,propsCopy}) => {
  return (
    <>
      <NativeBaseProvider>
        <View
          style={{ flex: 1, marginTop: 4 }}
        >
          <Box alignItems="center" style={styles.card}>
            <Box
              
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 5,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
              style={{"width":"80%"}}
            >
              <Box w="100%">
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: item.Image
                    }}
                    alt="image"
                    style={{"width":"100%"}}
                  />
                </AspectRatio>
                <Box

                  position="absolute"
                  bottom="4"
                  left="2"
                  px="3"
                  py="1.5"
                  style={styles.opacity}
                >
                 <Text style={{color:"white",fontSize:16}} onPress={() => propsCopy.navigation.navigate('ResDetails',{ResID:item.id})} >{item.Type}</Text> 
                 <View style={{backgroundColor: "rgba(234, 234, 234, 0.4)",borderRadius:100}}  ><ChevronRightIcon size="8" color={"white"}  /></View>
                  
                </Box>
              </Box>
              <Stack space={3}>
                <Stack
                  p="3"
                  pb="1"
                  space={2}
                  style={{ flex: 1, flexDirection: "row" }}
                >
                  <Center>
                    <Image
                      size={50}
                      resizeMode={"contain"}
                      borderRadius={100}
                      source={{
                        uri: item.Logo,
                      }}
                      alt="Logo"
                    />
                  </Center>

                  <View style={{ paddingLeft: 8 }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <Heading size="md" ml="-1" fontWeight={400}>

                       {item.ResName} 
                       <Spacer />
                        <Star score={Number(item.Rate)} style={styles.starStyle} />
                      </Heading>
                      <Text
                        fontSize="xs"
                        style={{ color: "grey", marginTop: 5, paddingLeft: 8 }}
                      >
                        {Number(item.Rate)}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{ color: "grey", fontSize: 13, marginTop: 10 }}
                        _text={{
                          color: "grey",
                        }}
                      >
                       {item.Type+','}
                      </Text>
                    </View>
                  </View>
                </Stack>
                <Divider />
                <Stack
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <Text fontSize={10} style={{ color: "grey" }}>
                      <Ionicons name="bicycle" size={20} /> 60 mins
                    </Text>
                  </View>
                  <View>
                    <Text fontSize={10} style={{ color: "#3bc93a" }}>

                      <CircleIcon size={4} color="#3bc93a" style={{ paddingRight: 6 }} />
                      ORDER ONLINE
                    </Text>
                  </View>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </View>


      </NativeBaseProvider>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {

  },
  opacity: {
    width: 180,
    backgroundColor: "rgba(234, 234, 234, 0.7)",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  starStyle: {
    width: 80,
    height: 15,
    marginLeft: 10,
  },
});
