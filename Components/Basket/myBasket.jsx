import { Ionicons } from '@expo/vector-icons';
import { AlertDialog, FlatList, Text, Box, View, AspectRatio, Hidden, Center, Button, Image, useColorMode, ScrollView, VStack, HStack } from 'native-base';
import OrderCard from './orderCard';

import { db } from './../../Firebase/firebase'
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";




const MyBasket = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);
    const [Res, setRes] = useState([]);

    useEffect(() => {
        async function getResturants() {
            const RestaurantRef = collection(db, 'User', localStorage.getItem("userID"), "Cart")
            const ResSnapshot = await getDocs(RestaurantRef);
            const ResList = ResSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setRes(ResList)
            return ResList
        }
        getResturants()

    }, [])

    var total = 0;


    return (
        <>
            {
                Res.map((m) => {
                    total += parseInt(m.TotalPrice)
                })
            }

            <ScrollView style={{ backgroundColor: "white", height: "100%" }}>

                <Center>

                    <AlertDialog isOpen={isOpen} onClose={onClose}>
                        <AlertDialog.Content>
                            <AlertDialog.CloseButton />
                            <AlertDialog.Header>Delete </AlertDialog.Header>
                            <AlertDialog.Body>
                                Are You Sure You Want To Delete  ?!
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button.Group space={2}>
                                    <Button variant="unstyled" colorScheme="coolGray" onPress={onClose}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme="danger" onPress={
                                     () => {
                                            Res.map((one) => {
                                             deleteDoc(doc(db, "User", localStorage.getItem('userID'), "Cart", one.id))

                                            })
                                        }}>
                                        Delete
                                    </Button>
                                </Button.Group>
                            </AlertDialog.Footer>
                        </AlertDialog.Content>
                    </AlertDialog>
                </Center>

                <View>

                    <Box style={{ width: "100%" }}>
                        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" style={{ padding: 15, maxWidth: "365px" }}>
                            <HStack>
                                <Image source={{
                                    uri: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/dc58ea78-2580-11e8-add5-0242ac110011.jpg"
                                }} alt="Alternate Text" size="50px" borderRadius={50} />

                                <VStack>
                                    <Text style={{ color: "#A7A3A3" }}> Your order From </Text>
                                    <Text style={{ fontWeight: "bold", fontSize: "20px" }}> {localStorage.getItem('ResName')} </Text>
                                </VStack>
                            </HStack>
                        </Box>
                    </Box>

                    <Box style={{ margin: "5px", width: "100%" }}>
                        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" style={{ padding: 15, maxWidth: "365px" }}>

                            <HStack style={{ justifyContent: "space-between" }}>
                                <Text style={{ fontSize: "20px", marginBottom: "10px" }}> Order details </Text>
                                <Text style={{ color: "red" }} colorScheme="danger" onPress={() => setIsOpen(!isOpen)}> <Ionicons name='trash' /> Remove all </Text>
                            </HStack>


                            <FlatList
                                data={Res}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {

                                    return (
                                        <>
                                            <OrderCard item={item} propsCopy={props}/>
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
                                    <Text>{total} EGP</Text>
                                </HStack>

                                <HStack style={{ justifyContent: "space-between", marginBottom: "5px" }}>
                                    <Text>Delivery fees</Text>
                                    <Text>20.00 EGP</Text>
                                </HStack>

                                <HStack style={{ justifyContent: "space-between", marginBottom: "5px" }}>
                                    <Text style={{ fontWeight: "bold" }}>Total</Text>
                                    <Text>{total + 20} EGP</Text>
                                </HStack>

                            </View>
                        </Box>
                    </Box>

                    <View style={{ position: 'sticky', bottom: 0 }}>
                        <Button colorScheme="red" width="100%"> Checkout Now</Button>
                    </View>


                </View>
            </ScrollView>
        </>
    );
}

export default MyBasket;