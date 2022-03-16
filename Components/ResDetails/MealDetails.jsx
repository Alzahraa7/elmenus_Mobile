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
import { useState, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Ionicons } from "@expo/vector-icons";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore/lite";
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
  const [Res, setRes] = useState([])

  useEffect(() => {
    async function getResturants() {
      const ResSnapshot = await getDoc(Rest);
      const ResList = ResSnapshot.data()
      setRes(ResList)
      return ResList
    }

    getResturants()

  }, [])

  const test = [
    {
      Name: "Regular",
      Price: 50
    },
    {
      Name: "Small",
      Price: 100
    }
  ]

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
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <Typography>Select Size</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Radio.Group
                defaultValue="1"
                name="myRadioGroup"
                accessibilityLabel="Pick your favorite number"
              >
{/* 
                <Text>dhdh</Text>
                <FlatList
                  data={test}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    return (
                      <>
                        <HStack>
                          <View style={{ "position": 'relative' }}><Radio colorScheme="green" size="lg" value="Regular" my={5}>
                            {item.Name}
                          </Radio>
                          </View>
                          <Text style={{ "color": "grey", "position": 'absolute', 'top': 25, 'right': 8 }}> {item.Price} EGP</Text>
                        </HStack>
                      </>
                    )
                  }}
                /> */}

                <View style={{ "position": 'relative' }}><Radio colorScheme="green" size="lg" value="Regular" my={5}>
                  Regular
                </Radio>
                </View>
                <Text style={{ "color": "grey", "position": 'absolute', 'top': 25, 'right': 8 }}>0.00 EGP</Text> 
              
                <Divider />
                <View style={{ "position": 'relative' }}><Radio colorScheme="green" size="lg" value="Medium" my={5}>
                  Medium
                </Radio>
                </View>
                <Text style={{ "color": "grey", "position": 'absolute', 'top': 90, 'right': 8 }}>0.00 EGP</Text>

                <Divider />
                <View style={{ "position": 'relative' }}><Radio colorScheme="green" size="lg" value="Large" my={5}>
                  Large
                </Radio>
                </View>
                <Text style={{ "color": "grey", "position": 'absolute', 'top': 158, 'right': 8 }}>0.00 EGP</Text>

                <Divider />
              </Radio.Group>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              style={{ backgroundColor: "#F5F5F5", borderBottom: "none" }}
            >
              <Typography>Select Extras</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Radio.Group
                defaultValue="1"
                name="myRadioGroup"
                accessibilityLabel="Pick your favorite number"
              >

                <View style={{ "position": 'relative' }}><Checkbox
                  value="spicy Souic"
                  colorScheme="green"
                  size="md"
                  my={5}
                >
                  spicy Souic
                </Checkbox>

                </View>
                <Text style={{ "color": "grey", "position": 'absolute', 'top': 25, 'right': 8 }}>0.00 EGP</Text>


                <Divider />
                <View style={{ "position": 'relative' }}><Checkbox
                  value="spicy Souic"
                  colorScheme="green"
                  size="md"
                  my={5}
                >
                  spicy Souic
                </Checkbox>

                </View>
                <Text style={{ "color": "grey", "position": 'absolute', 'top': 90, 'right': 8 }}>0.00 EGP</Text>
                <Divider />
              </Radio.Group>
            </AccordionDetails>
          </Accordion>
          <View style={{ backgroundColor: "#F5F5F5" }} mt={5} mb={2} p={3}>
            <Text style={{ fontSize: 15 }}>Special instructions</Text>
          </View>
          <View ms={3} style={{ fontSize: 16 }} mb={4}>
            <Input
              variant="unstyled"
              placeholder="eg. Please don`t add onion"
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-around', backgroundColor: "#F5F5F5", borderTopLeftRadius: 30, borderTopRightRadius: 30, position: 'sticky', bottom: 0 }} py={3} >

          <TouchableOpacity style={styles.touch}>
            <Text style={{ fontWeight: 600, fontSize: 30, marginBottom: 5, color: "red" }}>-</Text>
          </TouchableOpacity>
          <Heading >1</Heading>
          <TouchableOpacity style={styles.touch}>
            <Text style={{ fontWeight: 600, fontSize: 30, marginBottom: 5, color: "red" }}>+</Text>
          </TouchableOpacity>
          <Button colorScheme="red" leftIcon={<Ionicons name="basket" size="lg" color="white" />} onPress={() => {
            localStorage.setItem('Added', true)
            window.location.reload()
          }}>Add to basket</Button>
        </View>

        <View style={{ position: "sticky", bottom: 0 }}>
          {
            localStorage.getItem('Added') && <Button colorScheme="red" width="100%" rightIcon={<Ionicons name="basket" size="lg" color="white" />} > Go To Basket </Button>
          }
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
