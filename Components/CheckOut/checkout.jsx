import {
  Heading,
  HStack,
  ScrollView,
  Text,
  View,
  Image,
  Box,
  Radio,
  Divider,
  Button
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
export const CheckOut = () => {
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: 'white', height: "100%" }}>
        <HStack space={3}>
          <View p={3}>
            <Image
              backgroundColor="white"
              size={50}
              resizeMode={"contain"}
              borderRadius={100}
              source={{
                uri: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/5a501b2d-faf1-4b61-9ff3-846ba311f6c6.jpg",
              }}
              alt="Logo"
            />
          </View>
          <View>
            <Text fontSize={14}> Your Order From</Text>
            <Heading fontWeight={500}>Abou Anas El Soury</Heading>
            <Text fontSize={14} style={{ color: "grey" }}>
              <Ionicons name="bicycle" size={20} /> 60 minutes to deliver
            </Text>
          </View>
        </HStack>
        <View my={5}>
        <Text style={{ color: "grey" , marginLeft:10,marginBottom:8 }} >Delivery address</Text>
        <Box style={{ margin: 5, width: "100%" }}>
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            style={{ padding: 15, maxWidth: "365px",height:100 }}
          >
            <Text style={{ color: "red" }}> Add delivery address </Text>
          </Box>
        </Box>
        </View>
        <View mb={5}>
        <Text style={{ color: "grey" , marginLeft:10,marginBottom:8 }} >Payment method</Text>
        <Box style={{ margin: 5, width: "100%" }}>
          <Box
            maxW="80"
            
            overflow="hidden"
            borderColor="coolGray.200"
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            style={{ maxWidth: "365px"}}
          >
            <Radio.Group
                defaultValue="Cash"
                name="myRadioGroup"
                accessibilityLabel="Pick your favorite number"
              >
               <View style={{"position":'relative',paddingLeft:16,paddingRight:16}}><Radio colorScheme="red" size="md" value="Cash" my={3}>
                 Cash on Delivery
                </Radio>
                </View> 
                <Ionicons name='cash-outline' size={20} style={{"color":"blue","position":'absolute','top':15,'right':16}}/>
                <Divider />
                <View style={{"position":'relative',paddingLeft:16,paddingRight:16}}><Radio colorScheme="red" size="md" value="Card" my={3}>
                 Credit Card
                </Radio>
                </View> 
                <Ionicons name='card-outline' size={20} style={{"color":"red","position":'absolute','top':60,'right':16}}/>

               
            </Radio.Group>
          </Box>
        </Box>
        </View>
        <View mb={5}>
        <Text style={{ color: "grey" , marginLeft:10,marginBottom:8 }} >Payment method</Text>
        <Box style={{ margin: 5, width: "100%" }}>
          <Box
            maxW="80"
            
            overflow="hidden"
            borderColor="coolGray.200"
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            style={{ maxWidth: "365px"}}
          >
            <Accordion
           
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>1 item</Typography>
            </AccordionSummary>
            <AccordionDetails>
                  
            </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        </View>
        <View mb={5}>
        <Box style={{ margin: 5, width: "100%" }}>
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            style={{ maxWidth: "365px",padding:16}}
          >
           <Heading mb={3}>Payment details</Heading>
           <View style={{flexDirection:'row',justifyContent:'space-between'}} my={3}>
               <View><Text fontWeight={700}>Subtotal</Text></View>
               <View><Text>00.00 <Text style={{color:'grey'}}>EGP</Text></Text></View>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}} mb={3}>
               <View><Text style={{color:'grey'}}>Tax</Text></View>
               <View><Text>00.00 <Text style={{color:'grey'}}>EGP</Text></Text></View>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}} mb={3}>
               <View><Text style={{color:'grey'}}>Delivery fees</Text></View>
               <View><Text>00.00 <Text style={{color:'grey'}}>EGP</Text> </Text></View>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}} mb={3}>
               <View><Text fontWeight={700}>Total</Text></View>
               <View ><Text fontWeight={700}>00.00<Text>EGP</Text> </Text></View>
           </View>
          </Box>
        </Box>
        </View>
        <View p={4} style={{position:'sticky', bottom:0}} ><Button colorScheme="red" style={{backgroundColor:'red', padding:12}} >Place order</Button></View>
      </ScrollView>
    </>
  );
};
