import {
    View,
    Box,
    AspectRatio,
    Image,
    Divider,
    Heading,
    Text,
    Checkbox,
    Radio,
    ScrollView,
    Input,
    Button,
    HStack,
    FlatList
} from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';
import { useState, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Ionicons } from "@expo/vector-icons";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { collection, getDocs, getDoc, doc, addDoc } from "firebase/firestore/lite";
import { db } from "../../Firebase/firebase";


const UpdateMeal = (props) => {

    const MealID = props.route.params.MealID;
    const User = doc(db, 'User', localStorage.getItem("userID"), "Cart", MealID);

    console.log(MealID)

    const [Res, setRes] = useState([])

    useEffect(() => {
        async function getResturants() {
            const ResSnapshot = await getDoc(User);
            const ResList = ResSnapshot.data()
            setRes(ResList)
            setSize(ResList.Size)
            setExtras(ResList.Extras)
            return ResList
        }

        getResturants()

    }, [])

    const [size, setSize] = useState([]);
    const [Extras, setExtras] = useState([]);
    const [specialAdditions, setSecialAdditions] = useState("")
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const [checked, setChecked] = useState(false);
    const [checkedExtras, setCheckedExtras] = useState([])
    const [checkedSize, setCheckedSize] = useState({})


    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: "white" }}>

                <Box
                    w="100%"
                    style={{ borderBottomColor: "grey", borderBottomWidth: 1 }}
                >
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                            source={{
                                uri: Res.Image,
                            }}
                            alt="image"
                        />
                    </AspectRatio>
                    <HStack style={{ position: "absolute", top: "88%", left: "80%" }}>

                        <Button style={{ backgroundColor: "white", borderRadius: "50%", boxShadow: "4px 5px 7px -5px rgba(97,90,90,0.84)" }}><Ionicons color="#e32207" name="share" size={30} /></Button>
                    </HStack>
                </Box>
                <View style={{ margin: 16 }}>
                    <Heading> {Res.Name} </Heading>
                    <Text style={{ color: "grey" }} pt={2} pb={2}>
                        {Res.Description}
                    </Text>
                </View>



            </ScrollView>
        </>
    );
}

export default UpdateMeal;

const styles = StyleSheet.create({

    touch: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E4E4E9",
        borderRadius: 20,
        padding: 10

    }
});