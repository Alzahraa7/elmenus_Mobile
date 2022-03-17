import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
// import { AlertDialog, Center, Button } from 'native-base';
import { AlertDialog, Text, Box, View, AspectRatio, Hidden, Center, Button, Image, useColorMode, ScrollView, VStack, HStack } from 'native-base';
import { db } from './../../Firebase/firebase'
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc } from "firebase/firestore/lite";


const OrderCard = (props) => {
    // console.log(props)
    console.log(props.propsCopy.route.params.prop)

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    // const cancelRef = React.useRef(null);
    // console.log(item.id)
    return (
        <>
            <Center>
              
                <AlertDialog  isOpen={isOpen} onClose={onClose}>
                    <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Delete {props.item.Name}</AlertDialog.Header>
                        <AlertDialog.Body>
                           Are You Sure You Want To Delete ?!
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button.Group space={2}>
                                <Button variant="unstyled" colorScheme="coolGray" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme="danger" onPress={
                                    async ()=>{
                                    await deleteDoc(doc(db, "User",localStorage.getItem('userID'),"Cart",props.item.id))
                                }}>
                                    Delete
                                </Button>
                            </Button.Group>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog>
            </Center>


            <HStack style={{ marginBottom: "10px" }}>
                <Text style={{ fontWeight: "bold" }}> x{props.item.Quantity} </Text>
                <VStack>
                    <Text style={{ fontWeight: "bold" }}> {props.item.Name} </Text>
                    <Text style={{ color: "#A7A3A3" }}> {props.item.Size.Name} </Text>
                    <Text style={{ color: "#A7A3A3", width: "250px" }}> {props.item.Description} </Text>

                    <HStack>
                        <Text style={{ color: "green", marginRight: "10px" }} onPress={()=>{props.propsCopy.navigation.navigate('UpdateMeal', {MealID: props.item.id})}}> <Ionicons name='pencil' /> Edit </Text>
                        <Text style={{ color: "red" }}colorScheme="danger" onPress={() => setIsOpen(!isOpen)} > <Ionicons name='trash' /> Remove </Text>
                    </HStack>
                </VStack>

                <VStack style={{ marginLeft: "auto" }}>
                    <Text style={{ fontWeight: "bold" }}> {props.item.TotalPrice} EGP </Text>
                </VStack>

            </HStack>
        </>
    );
}

export default OrderCard;