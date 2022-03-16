import { Ionicons } from '@expo/vector-icons';
import { Text, Box, View, AspectRatio, Hidden, Center, Button, Image, useColorMode, ScrollView, VStack, HStack, FlatList } from 'native-base';
import OrderCard from './orderCard';
const MyBasket = () => {

    const Orders = [
        {
            Name: "Beef Shawerma",
            Number: 3,
            Size: "Regular",
            Description: "Fries and Coca",
        },
        {
            Name: "Beef Shawerma",
            Number: 3,
            Size: "Regular",
            Description: "Fries and Coca",
        },
        {
            Name: "Beef Shawerma",
            Number: 3,
            Size: "Regular",
            Description: "Fries and Coca",
        }
    ]

    return (
        <>
            <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
                <View>

                    <Box style={{ margin: "5px", width: "100%" }}>
                        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" style={{ padding: 15, maxWidth: "365px" }}>
                            <HStack>
                                <Image source={{
                                    uri: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/dc58ea78-2580-11e8-add5-0242ac110011.jpg"
                                }} alt="Alternate Text" size="50px" borderRadius={50} />

                                <VStack>
                                    <Text style={{ color: "#A7A3A3" }}> Your order From </Text>
                                    <Text style={{ fontWeight: "bold", fontSize: "20px" }}> Abo Mazen El Soury </Text>
                                </VStack>
                            </HStack>
                        </Box>
                    </Box>

                    <Box style={{ margin: "5px", width: "100%" }}>
                        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" style={{ padding: 15, maxWidth: "365px" }}>

                            <HStack style={{ justifyContent: "space-between" }}>
                                <Text style={{ fontSize: "20px", marginBottom: "10px" }}> Order details </Text>
                                <Text style={{ color: "red" }}> <Ionicons name='trash' /> Remove all </Text>
                            </HStack>


                            <FlatList
                                data={Orders}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <>
                                            <OrderCard item={item} />
                                        </>
                                    )
                                }}
                            />
                        </Box>
                    </Box>

                    <Box style={{ margin: "5px", width: "100%" }}>
                        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" style={{ padding: 15, maxWidth: "365px" }}>

                            <Text style={{ fontSize: "20px", marginBottom: "10px" }}> Payment details </Text>

                            <View style={{ marginLeft: "2px" }}>
                                <HStack style={{ justifyContent: "space-between", marginBottom: "5px" }}>
                                    <Text style={{ fontWeight: "bold" }}>Subtotal</Text>
                                    <Text>201.00 EGP</Text>
                                </HStack>

                                <HStack style={{ justifyContent: "space-between", marginBottom: "5px" }}>
                                    <Text>Delivery fees</Text>
                                    <Text>20.00 EGP</Text>
                                </HStack>

                                <HStack style={{ justifyContent: "space-between", marginBottom: "5px" }}>
                                    <Text style={{ fontWeight: "bold" }}>Total</Text>
                                    <Text>221.00 EGP</Text>
                                </HStack>

                            </View>
                        </Box>
                    </Box>

                    <View style={{ position: 'sticky', bottom: 0 }}>
                        <Button colorScheme="red" width="100%"> Checkout Now ( 221.00 EGP ) </Button>
                    </View>


                </View>
            </ScrollView>
        </>
    );
}

export default MyBasket;