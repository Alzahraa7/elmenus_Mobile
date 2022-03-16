import { Box, Button, Text, View } from "native-base"
import { Image, HStack } from "native-base"
import { Ionicons } from "@expo/vector-icons";
import Star from "react-native-star-view/lib/Star"
import { CircleIcon } from "native-base";
import * as React from 'react';


const ResDetailsCard = ()=>{
    return(
        <>
             <View>
                    <Image source={{
                        uri: "https://www.elmenus.com/public/img/default-cover.png"
                    }} alt="Alternate Text" size="100%" style={{ height: "170px" }} />


                    <Image source={{
                        uri: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/54e5be67-d9a6-4e18-a7b1-06081bada524.jpg"
                    }} alt="Alternate Text" size="70px" borderRadius={10} style={{ position: "absolute", top: "80%", marginLeft: "15px", border: "1px solid #EBE7E7" }} />

                    <HStack style={{ position: "absolute", top: "85%", left: "65%" }}>
                        <Button style={{ backgroundColor: "white", borderRadius: "50%", marginRight: "10px", boxShadow: "4px 5px 7px -5px rgba(97,90,90,0.84)" }}><Ionicons color="#e32207" name="people" size={30} /></Button>
                        <Button style={{ backgroundColor: "white", borderRadius: "50%", boxShadow: "4px 5px 7px -5px rgba(97,90,90,0.84)" }}><Ionicons color="#e32207" name="headset-outline" size={30} /></Button>
                    </HStack>
                </View>

                <View style={{ marginTop: "40px", marginBottom: "10px", paddingLeft: "15px" }}>
                    <Text style={{ fontWeight: "bold" }}> Papa John's Pizza </Text>
                    <HStack>
                        <Star score={4.5} style={{ width: "80", height: "15" }} />
                        <Text><Text style={{ textDecorationLine: "underline", color: "#6E7570" }}>4.5 Rating</Text></Text>
                    </HStack>

                    <Text style={{ color: "#6E7570" }}> Fast Food, Italian, Pizza </Text>
                    <Text> 8/1 El Naser St., New Maadi </Text>
                </View>

                <View style={{ marginLeft: "5px", marginBottom: "10px" }}>
                    <Box style={{ width: "97vw", height: "70px", border: "1px solid #EBE7E7", padding: "10px", borderRadius: "7px" }}>
                        <Text> 30 EGP on orders above 140 EGP </Text>
                        <Text style={{ color: "#6E7570" }}> Discount on orders above 140 EGP. Expires in 16 days </Text>
                    </Box>

                    <Box style={{ border: "1px solid #EBE7E7", padding: "10px", borderRadius: "7px" }}>
                        <HStack style={{ justifyContent: "space-between", paddingTop: "15px" }}>
                            <Text> EPapa </Text>
                            <Text style={{ color: "green", fontWeight: "bold" }}> Apply Offer </Text>
                        </HStack>
                    </Box>
                </View>

                <View style={{ width: "100vw", padding: "15px", backgroundColor: "#CCF5D5" }}>
                    <Box>
                        <HStack>
                            <Ionicons name="bicycle" color="#e32207" size={20} />
                            <Text> Delivers To </Text>
                            <Text color="#e32207"> New Maadi, Maadi </Text>
                            <Text style={{ marginLeft: "auto" }}> Fee 20.00 EGP </Text>
                        </HStack>
                    </Box>
                </View>

                <View style={{ width: "100vw", padding: "30px"}}>
                    <HStack>
                        <HStack>
                            <Ionicons name="bicycle" size={20} />
                            <Text> 60 mins </Text>
                        </HStack>
                        <HStack style={{ marginLeft: "auto" }}>
                            <CircleIcon size={4} color="#3bc93a" style={{ paddingRight: 6, marginTop: "2px" }} />
                            <Text color="#3bc93a" > ORDER ONLINE </Text>
                        </HStack>
                    </HStack>
                </View>

           
        </>
    )
}

export default ResDetailsCard;