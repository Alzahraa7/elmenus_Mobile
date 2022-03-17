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

export const MealDetails = (props) => {
  console.log(props.route.params.MealID)
  const MealID = props.route.params.MealID;
  // shrouk

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [openIndex, setOpenIndex] = useState(-1);

  const radioClickHandler = (id, status) => {
    setOpenIndex(-1);
  };

  const data = [
    {
      title: "First Chapter",
      content: (
        <Checkbox
          onChange={radioClickHandler.bind(null, "first")}
          color="primary"
          label="Primary Checkbox"
        />
      ),
    },
    {
      title: "Second Chapter",
      content: (
        <Checkbox
          onChange={radioClickHandler.bind(null, "second")}
          color="primary"
          label="Secondary Checkbox"
        />
      ),
    },
  ];

  const Rest = doc(db, 'Restaurants', localStorage.getItem("ResID"), "Menus", MealID);
  const User = collection(db, 'User', localStorage.getItem("userID"), "Cart");

  const [Res, setRes] = useState([])
  const [size, setSize] = useState([]);
  const [Extras, setExtras] = useState([]);
  const [specialAdditions, setSecialAdditions] = useState("")
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  var test = []

  useEffect(() => {
    async function getResturants() {
      const ResSnapshot = await getDoc(Rest);
      const ResList = ResSnapshot.data()
      test = ResList.Size
      setRes(ResList)
      setSize(ResList.Size)
      setExtras(ResList.Extras)
      return ResList
    }

    getResturants()

  }, [])

  

  const [checked, setChecked] = useState(false);
  const [ checkedExtras, setCheckedExtras ] = useState([])
  const [ checkedSize, setCheckedSize ] = useState({})


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

        <View>
          <Box style={{ backgroundColor: "wheat", padding: "20px" }}>
            <Text> Select Size </Text>
          </Box>
          {/* <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number"> */}
          {
            size.map((t) => {
              return (
                <HStack style={{ margin: "5px" , justifyContent: "space-between"}}>
                    <Checkbox onClick={()=>{
                      setCheckedSize({
                        Name: t.Name,
                        Price: t.Price
                      })
                      setTotalPrice(t.Price);
                    }}>
                      <Text mx="2">
                        {t.Name}
                      </Text>
                    </Checkbox>
                    <Text style={{ "color": "grey", 'right': 8 }}>{ t.Price } EGP</Text>

                  </HStack>
              )
            })
          }

        
          <Box style={{ backgroundColor: "wheat", padding: "20px" }}>
            <Text> Select Extras </Text>
          </Box>
          {
            Extras.map((x) => {
              return (
                <>
                  <HStack style={{ margin: "5px", justifyContent: "space-between" }}>
                    <Checkbox value={x.Name} onClick={()=>{
                      setCheckedExtras([...checkedExtras, {
                        Name: x.Name,
                        Price: x.Price
                      }])
                      setTotalPrice((price) => price + Number(x.Price));

                    }}>
                      <Text mx="2">
                        {x.Name}
                      </Text>
                    </Checkbox>
                    <Text style={{ "color": "grey", 'right': 8 }}>{ x.Price } EGP</Text>

                  </HStack>
                </>
              )
            })
          }

                   <View style={{ backgroundColor: "#F5F5F5" }} mt={5} mb={2} p={3}>
            <Text style={{ fontSize: 15 }}>Special instructions</Text>
          </View>
          <View ms={3} style={{ fontSize: 16 }} mb={4}>
            <Input
              variant="unstyled"
              placeholder="eg. Please don`t add onion"
              onChange={
                (e)=>{
                  setSecialAdditions(e.target.value)
                }
              }
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-around', backgroundColor: "#F5F5F5", borderTopLeftRadius: 30, borderTopRightRadius: 30, position: 'sticky', bottom: 0 }} py={3} >

          <TouchableOpacity style={styles.touch} onPress={()=>{
            if(quantity != 1){
              setQuantity(quantity-1)
              setTotalPrice((price)=> price - Number(checkedSize.Price))
            }
          }}>
            <Text style={{ fontWeight: 600, fontSize: 30, marginBottom: 5, color: "red" }}>-</Text>
          </TouchableOpacity>
          <Heading > { quantity } </Heading>
          <TouchableOpacity style={styles.touch} onPress={()=>{
            setQuantity(quantity+1)
            setTotalPrice((price)=> price + Number(checkedSize.Price))
          }}>
            <Text style={{ fontWeight: 600, fontSize: 30, marginBottom: 5, color: "red" }}>+</Text>
          </TouchableOpacity>
          <Button colorScheme="red" leftIcon={<Ionicons name="basket" size="lg" color="white" />} onPress={
            async () => {
            localStorage.setItem('Added', true)
            // window.location.reload()
            await addDoc(User,{
              Name: Res.Name,
              Description: Res.Description,
              Extras: checkedExtras,
              Size: checkedSize,
              specialInstractions: specialAdditions,
              Quantity: quantity,
              Image: Res.Image,
              TotalPrice: totalPrice.toFixed(),
              ResName: localStorage.getItem('ResName')
            })
          }}>Add to basket</Button>
        </View>

      </ScrollView>
    </>
  );
};
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
