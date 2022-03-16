import {
  Box,
  Button,
  FlatList,
  Image,
  Text,
  Input,
  ScrollView,
  Avatar,
  Divider,
  AspectRatio,
  ChevronRightIcon,
} from "native-base";
import { Icon } from 'react-native-eva-icons';
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
const RestaurantList = () => {
  const { width: windowWidth } = Dimensions.get("window");
  const Res = [
    {
      ResName: "Bazooka",
      Type: ["Fast Food", "Chicken"],
      Rate: 4.2,
      ImageLogo:
        "https://bazookaegy.com/public/uploads/resturantes/s_1589125290189592.png",
      ImageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBgaryx_ufpuodVLvbyHgq9BXDW0cHUssTg&usqp=CAU",
      Offer: "30 EGP on orders above 150 EGP",
      ProName: "El Saytara Box",
      Price: "331.00",
    },
    {
      ResName: "Bazooka",
      Type: ["Fast Food", "Chicken"],
      Rate: 4.2,
      ImageLogo:
        "https://bazookaegy.com/public/uploads/resturantes/s_1589125290189592.png",
      ImageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBgaryx_ufpuodVLvbyHgq9BXDW0cHUssTg&usqp=CAU",
      Offer: "30 EGP on orders above 150 EGP",
      ProName: "El Saytara Box",
      Price: "331.00",
    },
  ];
  return (
    <>
      <Box margin="3">
        <Box>
          <Text fontWeight="extrabold" fontSize="15px">
            {" "}
            Restaurants (75)
          </Text>
        </Box>
        <Box margin="3">
          <FlatList
            style={{ flex: 1 }}
            data={Res}
            verticalAlign
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <Box borderRadius="15px" borderWidth='1' borderColor='gray.300' marginBottom="7" shadow="9">
                  <Box position='relative'>
                      <Image
                    width={windowWidth}
                    height="200px"
                    borderTopRightRadius="15px"
                    borderTopLeftRadius="15px"
                    source={{ uri: item.ImageURL }}
                  />
                  <Box style={{backgroundColor: "rgba(234, 234, 234, 0.4)",borderRadius:100}}  ><ChevronRightIcon size="8" color={"white"} /></Box>
                  <Box bgColor='white' opacity='0.5' position='absolute' bottom='5' borderBottomRightRadius='20px' borderTopRightRadius='20px' padding='2' margin='3'>
                      <Text fontSize='17px' fontWeight='extrabold' color='black'> {item.ProName} </Text>
                      <Text fontSize='15px' fontWeight='extrabold' color='black'> {item.Price} </Text>
                  </Box>
                  </Box>
                  <Box
                    margin="2"
                    flexDirection="row"
                    style={{ justifyContent: "space-between" }}
                  >
                    <Box flexDirection="row">
                      <Avatar source={{ uri: item.ImageLogo }} />
                      <Box flexDirection="column">
                        <Text
                          fontWeight="extrabold"
                          fontSize="19px"
                          letterSpacing='1'
                          marginTop="2"
                          marginLeft="2"
                        >
                          {item.ResName}
                        </Text>
                        <Text
                          fontWeight="bold"
                          color="grey"
                          fontSize="15px"
                          marginLeft="2"
                        >
                          {item.Type}
                        </Text>
                      </Box>
                    </Box>
                    <Box flexDirection="row">
                      <Ionicons name="star" color='gold' marginTop="2" />
                      <Ionicons name="star" color='gold' marginTop="2" />
                      <Ionicons name="star" color='gold' marginTop="2" />
                      <Ionicons name="star" color='gold' marginTop="2" />
                      <Ionicons name="star" color='gold' marginTop="2" />
                      <Text marginLeft="2">{item.Rate}</Text>
                    </Box>
                  </Box>
                  <Box
                    borderRadius="7px"
                    bgColor="#cdf0d7"
                    width="90%"
                    padding="10px"
                    flexDirection="row"
                    margin='3'
                  >
                    <Icon name="percent" width={20}></Icon>
                    <Text>{item.Offer}</Text>
                  </Box>
                  <Divider marginBottom='2' borderWidth='1' borderColor='gray.300' marginTop='2' />
                  <Box flexDirection='row' justifyContent='space-around' padding='2'> 
                  <Box flexDirection='row'>
                      <Ionicons name="bicycle" fontWeight='500' style={{fontSize:'19px'}} ></Ionicons>
                      <Text fontWeight='500'> 60 mins </Text>
                  </Box>
                  <Box flexDirection='row'>
                  <Ionicons color='green' margin='2' name="ellipse" ></Ionicons>
                  <Text color='green.600' fontWeight='600'>
                      ORDER ONLINE
                  </Text>
                  </Box>
                  </Box>
                </Box>
              </>
            )}
          />
        </Box>
      </Box>
    </>
  );
};

export default RestaurantList;
